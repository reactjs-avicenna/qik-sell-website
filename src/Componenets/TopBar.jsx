import React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function TopBar({ viewMode, setViewMode }) {
  return (
    <div className="w-full bg-[#e7efff] px-4 py-3  flex justify-between items-center">

      {/* LEFT TEXT */}
      <h2 className="text-[18px] font-semibold">
        Viewing All Electronics In{" "}
        <span className="text-blue-600">Lahore, Pakistan</span>
      </h2>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* VIEW TOGGLE */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">View as:</span>

          {/* LIST ICON */}
          <button
            onClick={() => setViewMode("list")}
            className={` min-h-[30px] min-w-[30px]  flex justify-center items-center rounded-full transition ${
              viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-700"
            }`}
          >
            <ViewListIcon fontSize="10px" />
          </button>

          {/* GRID ICON */}
          <button
            onClick={() => setViewMode("grid")}
            className={`min-h-[30px] min-w-[30px] flex justify-center items-center rounded-full transition ${
              viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-700"
            }`}
          >
            <GridViewIcon fontSize="10px" />
          </button>
        </div>

        {/* SORT DROPDOWN */}
        <div className="flex items-center text-sm font-semibold">
          <span className="mr-2">Sort as:</span>
          <div className="border px-3 py-1 rounded flex items-center gap-1 cursor-pointer">
            <span className="text-gray-700">Most Relevant</span>
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
