import React from "react";

const Panel = ({ children, onShow, title, isActive }) => {
  return (
    <div className="border rounded-xl shadow-md bg-white p-4 my-4 transition-all duration-300 hover:shadow-lg">

      <h1 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h1>

      {isActive ? (
        <div className="bg-gray-50 p-3 rounded-lg text-gray-700 leading-relaxed transition-all duration-300">
          {children}
        </div>
      ) : (
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium 
          hover:bg-blue-600 transition duration-200"
          onClick={onShow}
        >
          Show
        </button>
      )}

    </div>
  );
};

export default Panel;