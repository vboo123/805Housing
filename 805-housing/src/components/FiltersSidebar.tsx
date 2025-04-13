// src/components/FiltersSidebar.jsx
import React from "react";

export default function FiltersSidebar() {
  return (
    <aside className="w-64 bg-white p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-sm">Price Range</label>
          <input type="range" className="w-full" />
        </div>
        <div>
          <label className="block text-sm">Bedrooms</label>
          <select className="w-full border p-1 rounded">
            <option>Any</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
