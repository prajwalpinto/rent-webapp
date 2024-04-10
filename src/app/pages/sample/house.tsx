// House.js
import React from "react";

const House = ({ imageUrl, title, price, amenities }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{`$${price} per night`}</p>
        <div className="mt-4">
          <p className="text-gray-700 font-semibold mb-2">Amenities:</p>
          <ul>
            {amenities.map((amenity, index) => (
              <li key={index} className="text-gray-600">
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default House;
