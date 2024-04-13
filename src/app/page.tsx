import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      {Navbar()}
      <main className="container items-center justify-between flex flex-col">
        <div className="text-4xl">Welcome to LEASE IT</div>
        <div className="text-2xl">
          Here is your one stop shop to find your rental property
        </div>
      </main>
      <div className="container items-center justify-between flex flex-col">
        <Link href="/pages/listings">
          {<button className="btn">ViEW LISTINGS</button>}
        </Link>
      </div>
    </div>
  );
}

// import Listings from "./pages/Listings";

// export default function Home() {
//   return (
//     <>
//       <div
//         className="text-center font-bold border-b-4 border-solid border-black mb-3"
//         style={{ fontSize: 80 }}
//       >
//         L E A S E I T
//       </div>
//       <main className="flex">
//         <Listings data={undefined} />
//       </main>
//     </>
//   );
// }
