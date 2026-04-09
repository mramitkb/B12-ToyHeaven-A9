import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const {
    toyId,
    toyName,
    price,
    rating,
    availableQuantity,
    pictureURL,
  } = toy;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:bg-secondary hover:scale-105 transition duration-500 overflow-hidden group border border-gray-100">
      {/* Image */}
      <div className="overflow-hidden p-5">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full rounded-lg h-52 lg:h-64 object-cover hover:scale-103 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        
        {/* Toy Name */}
        <h2 className="text-lg font-bold text-gray-800">
          {toyName}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span className="text-sm font-medium text-gray-600">
            {rating}
          </span>
        </div>

        {/* Quantity */}
        <p className="text-sm text-gray-500">
          📦 Available: <span className="font-semibold">{availableQuantity}</span>
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-primary">
          ${price}
        </p>

        {/* Button */}
        <Link to={`/toy/${toyId}`}>
          <button className="w-full btn-neutral btn hover:text-primary border-none shadow-none rounded-lg font-medium">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;