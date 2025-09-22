import React from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces";

const PropertyCard: React.FC<CardProps> = ({ name, price, rating, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[300px]">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">${price.toLocaleString()}</p>
        <p className="text-yellow-500 font-medium">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
