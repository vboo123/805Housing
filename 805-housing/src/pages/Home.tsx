import React from "react";
import Navbar from "../components/Navbar";
import FiltersSidebar from "../components/FiltersSidebar";
import SearchBar from "../components/SearchBar";
import ListingsGrid from "../components/ListingsGrid";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <FiltersSidebar />
        <main className="flex-1 p-6">
          <SearchBar />
          <ListingsGrid />
        </main>
      </div>
    </div>
  );
};

export default Home;
