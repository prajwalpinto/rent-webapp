import Listing from "../../components/Listing";
import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";

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
  const handleSearch = async (searchTerm: string) => {
    // const addresses = await fetch(`/api/find-addresses?term=${searchTerm}`); // Example API call
    // console.log('Found addresses:', addresses);
    console.log(searchTerm);
    // You can display the addresses using a separate component (AddressList.js)
  };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <SearchBox onSearch={handleSearch("text")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {listings ? (
            listings.map((listing: any) => (
              <Listing data={listing} key={listing.id} />
            ))
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Listings;
