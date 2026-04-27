const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dns = require('dns');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const DNS_SERVERS = process.env.DNS_SERVERS;

if (DNS_SERVERS) {
  const servers = DNS_SERVERS.split(',').map((server) => server.trim()).filter(Boolean);
  if (servers.length > 0) {
    dns.setServers(servers);
    console.log(`Using custom DNS servers: ${servers.join(', ')}`);
  }
}

// Middleware
app.use(cors());
app.use(express.json());

const itemSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    category: { type: String, required: true, trim: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const Item = mongoose.model('Item', itemSchema);

const getNextItemId = async () => {
  const lastItem = await Item.findOne().sort({ id: -1 }).select('id');
  return lastItem ? lastItem.id + 1 : 1;
};

const connectDB = async () => {
  if (!MONGO_URI) {
    throw new Error('MONGO_URI is missing in environment variables.');
  }

  await mongoose.connect(MONGO_URI);
  console.log('MongoDB connected successfully');
};

// ============ GET ENDPOINTS ============

// GET all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find().sort({ id: 1 }).select('-_id id name price category');

    res.json({
      success: true,
      data: items,
      message: 'All items fetched successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch items',
      error: error.message
    });
  }
});

// GET single item by ID
app.get('/api/items/:id', async (req, res) => {
  try {
    const itemId = Number(req.params.id);
    const item = await Item.findOne({ id: itemId }).select('-_id id name price category');

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.json({
      success: true,
      data: item,
      message: 'Item fetched successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch item',
      error: error.message
    });
  }
});

// ============ POST ENDPOINT ============

// CREATE new item
app.post('/api/items', async (req, res) => {
  try {
    const { name, price, category } = req.body;

    if (!name || price === undefined || !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, price, and category'
      });
    }

    const newItem = await Item.create({
      id: await getNextItemId(),
      name,
      price,
      category
    });

    res.status(201).json({
      success: true,
      data: {
        id: newItem.id,
        name: newItem.name,
        price: newItem.price,
        category: newItem.category
      },
      message: 'Item created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create item',
      error: error.message
    });
  }
});

// ============ UPDATE ENDPOINT ============

// UPDATE item by ID
app.put('/api/items/:id', async (req, res) => {
  try {
    const itemId = Number(req.params.id);
    const { name, price, category } = req.body;

    const payload = {};
    if (name !== undefined) payload.name = name;
    if (price !== undefined) payload.price = price;
    if (category !== undefined) payload.category = category;

    const item = await Item.findOneAndUpdate(
      { id: itemId },
      payload,
      { new: true, runValidators: true }
    ).select('-_id id name price category');

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.json({
      success: true,
      data: item,
      message: 'Item updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update item',
      error: error.message
    });
  }
});

// ============ DELETE ENDPOINT ============

// DELETE item by ID
app.delete('/api/items/:id', async (req, res) => {
  try {
    const itemId = Number(req.params.id);
    const deletedItem = await Item.findOneAndDelete({ id: itemId }).select('-_id id name price category');

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.json({
      success: true,
      data: deletedItem,
      message: 'Item deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete item',
      error: error.message
    });
  }
});

// ============ ERROR HANDLING ============

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`
API Endpoints:
  GET    /api/items          - Get all items
  GET    /api/items/:id      - Get single item
  POST   /api/items          - Create new item
  PUT    /api/items/:id      - Update item
  DELETE /api/items/:id      - Delete item
  `);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
