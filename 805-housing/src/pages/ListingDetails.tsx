import React from "react";
import { useParams } from "react-router-dom";

const ListingDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Listing Details</h1>
      <p>
        This is the detail page for listing ID: <strong>{id}</strong>
      </p>
    </div>
  );
};

export default ListingDetails;
