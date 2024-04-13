import Link from "next/link";
import React from "react";

const imageCarousal = (images: any) => {
  return (
    <div className="carousel carousel-end rounded-box">
      {images.map((image: any, index: any) => (
        <div key={index} className="carousel-item">
          <img key={index} src={image.url} alt={image.description} />
        </div>
      ))}
    </div>
  );
};

export default function Apply({ params }: { params: { id: string } }) {
  const listings = require("../../../../payload.json");
  const property = listings.find((listing: any) => listing.id == params.id);

  return (
    <div className="flex justify-center flex-col">
      <div className="text-4xl p-4">
        Here`&apos;` what the landlord wants to know!
      </div>
      {imageCarousal(property.media)}
    </div>
  );
}
