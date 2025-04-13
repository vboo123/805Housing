import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  price: string;
  img: string;
}

const ListingCard: React.FC<Props> = ({ id, title, price, img }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={img} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{price}</p>
      <Link
        to={`/listing/${id}`}
        className="mt-2 inline-block text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ListingCard;
