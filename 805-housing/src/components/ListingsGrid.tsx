// src/components/ListingsGrid.jsx
import React from "react";
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
    <div className="grid grid-cols-2 gap-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}
