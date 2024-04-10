// export default function Page({ params }: { params: { id: string } }) {
//   return <div>My Post: {params.id}</div>;

// }

// App.js
import React from "react";
import PropertyDetails from "./details";

const propertyDetails = {
  imageUrl: "https://www.viewpoint.ca/property/cutimagel/202404593/1/1.jpg",
  title: "Modern Beach House",
  location: "Beachfront, Miami",
  description: "Beautiful modern beach house with stunning ocean views.",
  amenities: ["Beachfront", "Ocean view", "Swimming pool", "WiFi", "AC"],
  price: 150,
};

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-8">
        <PropertyDetails property={propertyDetails} />
      </div>
    </div>
  );
};

export default App;
