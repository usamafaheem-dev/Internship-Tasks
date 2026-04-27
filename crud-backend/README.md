# Simple CRUD Backend

A basic Node.js/Express backend for learning CRUD operations (GET, POST, UPDATE, DELETE) with MongoDB.

## Prerequisites

- Node.js installed
- MongoDB running locally, or a MongoDB Atlas connection string

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/crud_backend
```

You can copy from `.env.example` and update it as needed.

## Setup

```bash
npm install
npm start
```

Server will run on `http://localhost:5000`

---

## API Endpoints

### 1️⃣ GET ALL ITEMS
```
GET /api/items
```
**Description:** Fetch all items from MongoDB

**Response:**
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Laptop", "price": 50000, "category": "Electronics" },
    { "id": 2, "name": "Phone", "price": 30000, "category": "Electronics" }
  ],
  "message": "All items fetched successfully"
}
```

---

### 2️⃣ GET SINGLE ITEM
```
GET /api/items/:id
```
**Description:** Fetch a single item by ID

**Example:**
```
GET /api/items/1
```

**Response:**
```json
{
  "success": true,
  "data": { "id": 1, "name": "Laptop", "price": 50000, "category": "Electronics" },
  "message": "Item fetched successfully"
}
```

---

### 3️⃣ CREATE NEW ITEM (POST)
```
POST /api/items
```
**Description:** Create a new item

**Request Body:**
```json
{
  "name": "Keyboard",
  "price": 5000,
  "category": "Accessories"
}
```

**Response:**
```json
{
  "success": true,
  "data": { "id": 4, "name": "Keyboard", "price": 5000, "category": "Accessories" },
  "message": "Item created successfully"
}
```

---

### 4️⃣ UPDATE ITEM (PUT)
```
PUT /api/items/:id
```
**Description:** Update an existing item

**Example:**
```
PUT /api/items/1
```

**Request Body:**
```json
{
  "name": "Gaming Laptop",
  "price": 80000
}
```

**Response:**
```json
{
  "success": true,
  "data": { "id": 1, "name": "Gaming Laptop", "price": 80000, "category": "Electronics" },
  "message": "Item updated successfully"
}
```

---

### 5️⃣ DELETE ITEM
```
DELETE /api/items/:id
```
**Description:** Delete an item

**Example:**
```
DELETE /api/items/2
```

**Response:**
```json
{
  "success": true,
  "data": { "id": 2, "name": "Phone", "price": 30000, "category": "Electronics" },
  "message": "Item deleted successfully"
}
```

---

## Using Axios in Frontend

```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/items';

// GET all
axios.get(API_URL)

// GET one
axios.get(`${API_URL}/1`)

// POST
axios.post(API_URL, { name: 'Item', price: 100, category: 'Test' })

// PUT (Update)
axios.put(`${API_URL}/1`, { name: 'Updated', price: 200 })

// DELETE
axios.delete(`${API_URL}/1`)
```

---

## Running

```bash
npm install
npm start
```

Server starts on **http://localhost:5000**
