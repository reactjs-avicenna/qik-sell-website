import React, { useState, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const categories = [
  { name: "Electronics", icon: "💻" },
  { name: "Fashion", icon: "👕" },
  { name: "Furniture", icon: "🪑" },
  { name: "Personal Care", icon: "🧴" },
  { name: "Health", icon: "💊" },
  { name: "Toys", icon: "🧸" },
  { name: "Automotive", icon: "🚗" },
  { name: "Books", icon: "📚" },
  { name: "Shoes", icon: "👟" },
  { name: "Jewelry", icon: "💍" },
  { name: "Sports", icon: "🏀" },
];

const Categories = () => {
  const [openList, setOpenList] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full mt-8 relative">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 px-2">
        {/* Title with < and > */}
        <h2
          onClick={() => setOpenList(!openList)}
          className="text-lg font-semibold flex items-center gap-2 cursor-pointer select-none"
        >
          All Categories
          {openList ? (
            <ExpandLessIcon fontSize="small" className="ml-1" />
          ) : (
            <ExpandMoreIcon fontSize="small" className="ml-1" />
          )}
        </h2>

      </div>

      {/* DROPDOWN LIST (when clicked) */}
      {openList && (
        <div className="absolute top-10 left-2  bg-white rounded-md z-20 w-56 max-h-60 overflow-y-auto border border-gray-200">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.name}
            </div>
          ))}
        </div>
      )}

      {/* SCROLLABLE ROW */}
      <section className="w-full mt-8 flex items-center justify-center relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0  p-2 rounded-full z-10"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </button>

      {/* Scrollable Category Row */}
      <div
        ref={scrollRef}
        className="flex  overflow-x-auto scrollbar-hide  w-[90%] justify-start scroll-smooth"
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center  rounded-lg p-4 min-w-[120px] cursor-pointer"
          >
            <div className="text-3xl mb-2">{cat.icon}</div>
            <p className="text-sm text-gray-700 text-center">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0   p-2 rounded-full z-10"
      >
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </section>
    </section>
  );
};

export default Categories;
