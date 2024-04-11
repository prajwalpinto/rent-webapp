"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/pages/listing/${id}`);
  };
  return (
    <>
      <div
        className="max-w-sm rounded-xl overflow-hidden shadow-lg px-2 my-3"
        style={{ border: "solid 0.5px #80808045" }}
      >
        <div style={{ fontSize: 24, paddingBottom: 16 }}>{data.title}</div>
        {awesomeSlider(data.media)}
        {listingDetails(data)}
        <Link href={`/pages/listing/${data.id}`}>
          {
            <button
              type="button"
              className="text-gray-900 w-full bg-white border-2 border-gray-300 p-3 mt-1 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              View Details
            </button>
          }
        </Link>
      </div>
    </>
  );
};

export default Listing;
