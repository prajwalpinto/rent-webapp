import Listing from "../../components/Listing";
import React, { useEffect, useState } from "react";

interface ListingProps {
  data: any;
}

const Listings: React.FC<ListingProps> = ({ data }) => {
  const listings = require("../../../payload.json");
  // const [listings, setListing] = useState([]);

  // useEffect(() => {
  //     const fetchData = async() => {
  //         try {
  //             const res = await fetch('api/listings')
  //             const data = await res.json();
  //             setListing(data);
  //         } catch (error) {
  //             console.error('Error fetching listings', error)
  //         }
  //     }
  //     fetchData()
  // },[])
  return (
    <>
      <div className="flex flex-wrap rounded bg-white">
        {listings ? (
          listings.map((listing: any) => (
            <Listing data={listing} key={listing.id} />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </>
  );
};
export default Listings;
