import { useState } from 'react';

const initialPlaces = {
  0: { id: 0, title: "Root",     childIds: [1] },
  1: { id: 1, title: "Earth",    childIds: [2] },
  2: { id: 2, title: "Africa",   childIds: [3, 4] },
  3: { id: 3, title: "Botswana", childIds: [] },
  4: { id: 4, title: "Egypt",    childIds: [] }
};

export default function FlatStateExample() {

  const [places, setPlaces] = useState(initialPlaces);

  // Delete Function
  function deletePlace(idToDelete) {
    setPlaces(oldPlaces => {
      const newPlaces = { ...oldPlaces };

      // Saare parents se ID remove karo
      Object.keys(newPlaces).forEach(key => {
        if (newPlaces[key].childIds) {
          newPlaces[key].childIds = newPlaces[key].childIds.filter(
            id => id !== idToDelete
          );
        }
      });

      // Khud ko bhi delete karo
      delete newPlaces[idToDelete];

      return newPlaces;
    });
  }

  // Screen par tree dikhane wala function
  function renderPlace(id) {
    const place = places[id];
    if (!place) return null;

    return (
      <div key={id} style={{ marginLeft: id * 20, marginBottom: "12px" }}>
        
        <span style={{ fontSize: "18px" }}>{place.title}</span>
        
        <button 
          onClick={() => deletePlace(id)}
          style={{
            marginLeft: "15px",
            padding: "5px 10px",
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>

        {/* Children ko dikhao */}
        {place.childIds && place.childIds.length > 0 && (
          <div>
            {place.childIds.map(childId => renderPlace(childId))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🌍 Flat State Simple Example</h1>
      <p>Delete button dabakar dekho kaise kaam karta hai</p>

      <div style={{ marginTop: "30px" }}>
        {renderPlace(0)}   {/* Root se tree shuru hota hai */}
      </div>

      <hr style={{ margin: "30px 0" }} />

      <button 
        onClick={() => console.log("Current State:", places)}
        style={{ padding: "10px 15px", fontSize: "16px" }}
      >
        Console mein pura data dekho
      </button>

      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        <strong>Note:</strong> Yeh flat state ka basic example hai. 
        Isme delete karna bohot easy hai.
      </p>
    </div>
  );
}   