import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Select, MenuItem, InputBase } from "@mui/material";

export default function SidebarCategories() {
  const [location, setLocation] = useState("Lahore, Pakistan");

  return (
    <div className="w-full">

      {/* Categories Title */}
      <h2 className="text-[17px] font-semibold mb-3">Categories</h2>

      {/* Electronics Category */}
      <div>
        <p className="font-semibold text-sm mb-2">Electronics</p>

        <ul className="space-y-1 text-[13px] text-gray-700">
          {["Laptops", "Tablets", "Mobiles", "Monitors"].map((item, idx) => (
            <li
              key={item}
              className="flex justify-between cursor-pointer hover:text-customPurple"
            >
              <span>{item}</span>
              <span className="text-gray-500">({[10, 22, 34, 40][idx]})</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-4" />

      {/* Location Dropdown */}
      <div>
        <p className="font-semibold text-sm mb-2">Location</p>

        <Select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          displayEmpty
          input={<InputBase />}
          IconComponent={KeyboardArrowDownIcon}
          className="w-full border rounded-md px-2 py-1 text-[13px] cursor-pointer"
        >
          <MenuItem value="Lahore, Pakistan">Lahore, Pakistan</MenuItem>
          <MenuItem value="Karachi, Pakistan">Karachi, Pakistan</MenuItem>
          <MenuItem value="Islamabad, Pakistan">Islamabad, Pakistan</MenuItem>
          <MenuItem value="Multan, Pakistan">Multan, Pakistan</MenuItem>
        </Select>
      </div>

      <hr className="my-4" />

      {/* Pakistan Sub-locations */}
      <div>
        <p className="font-semibold text-sm mb-2">Pakistan</p>

        <ul className="space-y-1 text-[13px] text-gray-700">
          {["Islamabad", "Karachi", "Multan", "Lahore"].map((city, idx) => (
            <li
              key={city}
              className="flex justify-between cursor-pointer hover:text-customPurple"
            >
              <span>{city}</span>
              <span className="text-gray-500">({[20, 33, 24, 30][idx]})</span>
            </li>
          ))}
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
            className="w-1/2 border placeholder:text-black border-[#0000004D] rounded px-2 py-1 text-[12px]"
          />
        </div>
      </div>
    </div>
  );
}
