import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine flex justify-around mt-2rem align-middle p-8">
      <input
        type="search"
        name="search"
        className="block w-full p-4 ps-10 text-sm text-black border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search City"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 "
      >
        Search City
      </button>
    </div>
  );
};

export default Search;
