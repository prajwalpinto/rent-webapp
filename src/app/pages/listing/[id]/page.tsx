import Link from "next/link";
import React from "react";

export default function ListingDetail({ params }: { params: { id: string } }) {
  // const property = {
  //   imageUrl: "https://www.viewpoint.ca/property/cutimagel/202404593/1/1.jpg",
  //   title: "Modern Beach House",
  //   location: "Beachfront, Miami",
  //   description: "Beautiful modern beach house with stunning ocean views.",
  //   amenities: ["Beachfront", "Ocean view", "Swimming pool", "WiFi", "AC"],
  //   price: 150,
  // };

  const listings = require("../../../../payload.json");
  const property = listings.find((listing: any) => listing.id == params.id);

  console.log(property);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src={property.media[0].url}
              alt={property.title}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {property.title}
              </h2>
              <p className="mt-2 text-gray-600">{property.location}</p>
              <div className="mt-4">
                <p className="text-gray-700">{property.description}</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 font-semibold">Amenities:</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-700">
                  ${property.rent} per month
                </span>
                <Link href={`/pages/apply/${property.id}`}>
                  {
                    <button className="px-4 py-2 bg-white text-black rounded hover:bg-grey border-2 border-black">
                      Submit Application Now
                    </button>
                  }
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
