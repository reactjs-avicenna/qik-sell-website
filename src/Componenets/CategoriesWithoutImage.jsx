import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const categories = [
  "Electronics",
  "Fashion",
  "Furniture",
  "Personal Care",
  "Health",
  "Toys",
  "Automotive",
  "Books"
];

const CategoriesWithoutImage = () => {
  const [openList, setOpenList] = useState(false);

  return (
    <section className="w-full mt-8 mb-8 pb-8 border-b relative">

      {/* TOP BAR LIKE THE IMAGE */}
      <div className="flex items-center gap-6 text-sm font-medium px-2">

        {/* All Categories with dropdown */}
        <div
          onClick={() => setOpenList(!openList)}
          className="flex items-center gap-1 cursor-pointer select-none"
        >
          All Categories
          {openList ? (
            <ExpandLessIcon fontSize="small" />
          ) : (
            <ExpandMoreIcon fontSize="small" />
          )}
        </div>

        {/* Inline simple text categories */}
        <div className="flex items-center gap-6 whitespace-nowrap">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="cursor-pointer text-gray-700 hover:text-black"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* DROPDOWN LIST */}
      {openList && (
        <div className="absolute top-8 left-2 bg-white shadow-md rounded-md z-20 w-48 max-h-60 overflow-y-auto border border-gray-200">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
            >
              {cat}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoriesWithoutImage;
