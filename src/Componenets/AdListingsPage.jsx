import { useState } from "react";
import AdListingsCard from "./AdListingsCard"; // your card component

export default function AdListingsPage({ products }) {
  return (
    <div className="p-6 w-full space-y-5">

      {/* Top Header Section (Missing Section Added) */}
      <h1 className="text-2xl font-semibold">View Your Ad Listings</h1>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search By Ad Title"
          className="w-full border rounded-full px-4 py-2 outline-none"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mt-2 text-sm">
        <button className="px-4 py-1.5 border rounded-full bg-blue-600 text-white">
          View All (0)
        </button>
        <button className="px-4 py-1.5 border rounded-full">Active Ads(0)</button>
        <button className="px-4 py-1.5 border rounded-full">Inactive Ads(0)</button>
        <button className="px-4 py-1.5 border rounded-full">Pending Ads(0)</button>
        <button className="px-4 py-1.5 border rounded-full">Moderated Ads(0)</button>
      </div>

      {/* View Packages Link */}
      <p className="text-gray-500 text-sm">
        Buy Discount on packages{" "}
        <span className="text-blue-600 cursor-pointer">View Packages →</span>
      </p>

      {/* Product Listings */}
      <div className="space-y-5">
        {products.map((item, index) => (
          <AdListingsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
