"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

interface ListingProps {
  data: any;
}

const awesomeSlider = (media: any) => {
  return (
    <AwesomeSlider>
      {media.map((image: any) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <Image
            src={image.url}
            alt={image.description}
            width={1000}
            height={800}
          />
        </div>
      ))}
    </AwesomeSlider>
  );
};

const listingDetails = (data: any) => {
  return (
    <>
      <div style={{ paddingBottom: 16, fontSize: 24 }}>
        <FontAwesomeIcon icon={fas.faDollarSign} /> {data.rent}
      </div>
      <div
        className="flex-col"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div style={{ paddingRight: 16 }}>
          <FontAwesomeIcon icon={fas.faBed} /> {data.bath}
        </div>
        <div style={{ paddingRight: 16 }}>
          <FontAwesomeIcon icon={fas.faBath} /> {data.bed}
        </div>
        <div style={{ paddingRight: 16 }}>
          <FontAwesomeIcon icon={fas.faSquareParking} /> {data.parking_spots}
        </div>
      </div>
    </>
  );
};

const Listing: React.FC<ListingProps> = ({ data }) => {
  return (
    <>
      <div className="mx-auto rounded-xl shadow-md md:max-w-2xl w-96 h-96 px-2 my-3">
        <div style={{ fontSize: 24, paddingBottom: 16 }}>{data.title}</div>
        {awesomeSlider(data.media)}
        {listingDetails(data)}
      </div>
    </>
  );
};

export default Listing;
