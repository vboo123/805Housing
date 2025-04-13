// src/components/Navbar.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          805 Housing
        </Typography>
        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Saved</Button>
        <Button color="inherit">Profile</Button>
      </Toolbar>
    </AppBar>
  );
}
