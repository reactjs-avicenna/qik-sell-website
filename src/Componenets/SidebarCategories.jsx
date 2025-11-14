import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SidebarCategories() {
  return (
    <div className="w-full ">

      {/* Categories Title */}
      <h2 className="text-[17px] font-semibold mb-3">Categories</h2>

      {/* Electronics Category */}
      <div>
        <p className="font-semibold text-sm mb-2">Electronics</p>

        <ul className="space-y-1 text-[13px] text-gray-700">
          <li className="flex justify-between">
            <span>Laptops</span>
            <span className="text-gray-500">(10)</span>
          </li>

          <li className="flex justify-between">
            <span>Tablets</span>
            <span className="text-gray-500">(22)</span>
          </li>

          <li className="flex justify-between">
            <span>Mobiles</span>
            <span className="text-gray-500">(34)</span>
          </li>

          <li className="flex justify-between">
            <span>Monitors</span>
            <span className="text-gray-500">(40)</span>
          </li>
        </ul>
      </div>

      <hr className="my-4" />

      {/* Location Dropdown */}
      <div className="">
        <p className="font-semibold text-sm mb-2">Location</p>

        <div className="border rounded-md flex justify-between items-center px-2 py-1 cursor-pointer">
          <span className="text-[13px]">Lahore, Pakistan</span>
          <KeyboardArrowDownIcon fontSize="small" />
        </div>
      </div>

      <hr className="my-4" />

      {/* Pakistan Sub-locations */}
      <div>
        <p className="font-semibold text-sm mb-2">Pakistan</p>

        <ul className="space-y-1 text-[13px] text-gray-700">
          <li className="flex justify-between">
            <span>Islamabad</span>
            <span className="text-gray-500">(20)</span>
          </li>

          <li className="flex justify-between">
            <span>Karachi</span>
            <span className="text-gray-500">(33)</span>
          </li>

          <li className="flex justify-between">
            <span>Multan</span>
            <span className="text-gray-500">(24)</span>
          </li>

          <li className="flex justify-between">
            <span>Lahore</span>
            <span className="text-gray-500">(30)</span>
          </li>
        </ul>
      </div>

      <hr className="my-4" />

      {/* Price Filter */}
      <div>
        <p className="font-semibold text-sm mb-2">Price</p>

        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Min"
            className="w-1/2 border placeholder:text-black border-[#0000004D] rounded px-2 py-1 text-[12px]"
          />
         <p className="text-[10px]">To</p>
          <input
            type="number"
            placeholder="Max"
            className="w-1/2 border placeholder:text-black  border-[#0000004D] rounded px-2 py-1 text-[12px]"
          />
        </div>
      </div>
    </div>
  );
}
