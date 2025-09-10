import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search deals by title, location, or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-input pl-10 pr-10 py-3"
        style={{
          paddingLeft: "2.5rem",
          paddingRight: searchTerm ? "2.5rem" : "0.75rem",
        }}
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          X
        </button>
      )}
    </div>
  );
};

export default SearchBar;
