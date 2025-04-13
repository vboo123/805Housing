// src/components/FiltersSidebar.tsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function FiltersSidebar() {
  return (
    <Box sx={{ width: 240, p: 2, borderRight: "1px solid #ccc" }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Box mb={3}>
        <Typography variant="body2">Price Range</Typography>
        <Slider defaultValue={500} min={0} max={5000} step={100} />
      </Box>
      <FormControl fullWidth>
        <InputLabel>Bedrooms</InputLabel>
        <Select defaultValue="Any" label="Bedrooms">
          <MenuItem value="Any">Any</MenuItem>
          <MenuItem value={1}>1+</MenuItem>
          <MenuItem value={2}>2+</MenuItem>
          <MenuItem value={3}>3+</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
