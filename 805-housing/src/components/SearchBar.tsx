// src/components/SearchBar.jsx
import React from "react";

export default function SearchBar() {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search for listings..."
        className="w-full p-3 border rounded shadow-sm"
      />
    </div>
  );
}
