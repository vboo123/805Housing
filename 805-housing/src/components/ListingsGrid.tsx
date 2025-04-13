// src/components/ListingsGrid.tsx
import React from "react";
import Grid from "@mui/material/Grid";
import ListingCard from "./ListingCard";

const listings = [
  {
    id: 1,
    title: "Room near Cal Poly",
    price: "$850/mo",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "3 Bed House in Downtown",
    price: "$2200/mo",
    img: "https://via.placeholder.com/150",
  },
];

export default function ListingsGrid() {
  return (
    <Grid container spacing={2}>
      {listings.map((listing) => (
        <Grid item xs={12} sm={6} md={4} key={listing.id}>
          <ListingCard {...listing} />
        </Grid>
      ))}
    </Grid>
  );
}
