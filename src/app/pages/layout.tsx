import type { Metadata } from "next";
import Navbar from "../components/Navbar";
export const metadata: Metadata = {
  title: "LEASE IT - Rental Listings",
  description: "Find your next rental home with us!",
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      {Navbar()}
      {children}
    </div>
  );
}
