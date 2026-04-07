import React from "react";

const Searchbar = ({ value, onChange }) => {
  return (
    <div className="m-6">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        🔍 Search Food
      </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Type to search (e.g. sushi, dal...)"
        className="w-full max-w-md px-5 py-3 text-lg border border-gray-300 rounded-xl 
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                   shadow-sm transition-all duration-200"
      />
    </div>
  );
};

export default Searchbar;