import { useState } from 'react';

const initialItems = [
  { title: 'Pretzels', id: 0 },
  { title: 'Crispy Seaweed', id: 1 },
  { title: 'Granola Bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);   // ← Duplication!

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, title: e.target.value };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input 
              value={item.title} 
              onChange={e => handleItemChange(item.id, e)} 
            />
            <button onClick={() => setSelectedItem(item)}>
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked: <b>{selectedItem.title}</b></p>
    </>
  );
}