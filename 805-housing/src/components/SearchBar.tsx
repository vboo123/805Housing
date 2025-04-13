// src/components/SearchBar.tsx
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function SearchBar() {
  return (
    <Box mb={3}>
      <TextField fullWidth label="Search for listings..." variant="outlined" />
    </Box>
  );
}
