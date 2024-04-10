// App.js
import React from "react";
import House from "./House";

const App = () => {
  // Sample data for demonstration
  const houses = [
    {
      id: 1,
      imageUrl: "house1.jpg",
      title: "Modern Beach House",
      price: 150,
      amenities: ["Beachfront", "Swimming pool", "WiFi", "AC"],
    },
    {
      id: 2,
      imageUrl: "house2.jpg",
      title: "Cozy Mountain Cabin",
      price: 120,
      amenities: ["Mountain view", "Fireplace", "WiFi", "Heating"],
    },
    {
      id: 3,
      imageUrl: "house2.jpg",
      title: "Cozy Mountain Cabin",
      price: 120,
      amenities: ["Mountain view", "Fireplace", "WiFi", "Heating"],
    },
    {
      id: 4,
      imageUrl: "house2.jpg",
      title: "Cozy Mountain Cabin",
      price: 120,
      amenities: ["Mountain view", "Fireplace", "WiFi", "Heating"],
    },
    {
      id: 5,
      imageUrl: "house2.jpg",
      title: "Cozy Mountain Cabin",
      price: 120,
      amenities: ["Mountain view", "Fireplace", "WiFi", "Heating"],
    },
    {
      id: 6,
      imageUrl: "house2.jpg",
      title: "Cozy Mountain Cabin",
      price: 120,
      amenities: ["Mountain view", "Fireplace", "WiFi", "Heating"],
    },
    {
      id: 7,
      imageUrl: "house2.jpg",
      title: "Cozy Mountain Cabin",
      price: 120,
      amenities: ["Mountain view", "Fireplace", "WiFi", "Heating"],
    },
    {
      id: 8,
      imageUrl: "house2.jpg",
      title: "Cozy Mountain Cabin",
      price: 120,
      amenities: ["Mountain view", "Fireplace", "WiFi", "Heating"],
    },
    {
      id: 9,
      imageUrl: "house2.jpg",
      title: "Cozy Mountain Cabin",
      price: 120,
      amenities: ["Mountain view", "Fireplace", "WiFi", "Heating"],
    },
    // Add more house objects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Rental Houses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {houses.map((house) => (
          <House
            key={house.id}
            imageUrl={house.imageUrl}
            title={house.title}
            price={house.price}
            amenities={house.amenities}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
