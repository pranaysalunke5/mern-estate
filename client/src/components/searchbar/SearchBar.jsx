import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center p-2 bg-gray-100 rounded-lg">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 bg-white rounded-lg outline-none text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default SearchBar;
