// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">805 Housing</h1>
      <div className="space-x-4">
        <button>Dashboard</button>
        <button>Saved</button>
        <button>Profile</button>
      </div>
    </nav>
  );
}
