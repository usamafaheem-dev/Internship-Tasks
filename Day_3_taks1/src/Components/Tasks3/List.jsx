import React from "react";

const List = ({ items }) => {
  return (
    <div className="mx-6">
      <table className="w-full max-w-4xl border-collapse bg-white shadow-lg rounded-2xl overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <th className="px-6 py-4 text-left font-semibold">Food Name</th>
            <th className="px-6 py-4 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((food) => (
            <tr 
              key={food.id} 
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 font-medium text-gray-800">{food.name}</td>
              <td className="px-6 py-4 text-gray-600 leading-relaxed">
                {food.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {items.length === 0 && (
        <p className="text-center text-gray-500 mt-8 text-lg">
          No matching food found 😔
        </p>
      )}
    </div>
  );
};

export default List;