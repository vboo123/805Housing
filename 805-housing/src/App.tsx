// src/App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import FiltersSidebar from "./components/FiltersSidebar";
import SearchBar from "./components/SearchBar";
import ListingsGrid from "./components/ListingsGrid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Box sx={{ display: "flex", mt: 2 }}>
        <FiltersSidebar />
        <Box sx={{ flexGrow: 1, ml: 2 }}>
          <SearchBar />
          <ListingsGrid />
        </Box>
      </Box>
    </Container>
  );
}
