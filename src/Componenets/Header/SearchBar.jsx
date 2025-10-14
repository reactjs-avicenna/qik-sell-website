import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 w-[74%] ">
      {/* Search Input Box */}
      <div className="flex items-center h-[42px] w-[100%] bg-white rounded-full border border-gray-300 px-3 flex-1">
        <input
          type="text"
          placeholder="Find Anything..."
          className="flex-1 outline-none w-full text-gray-600  text-[14px] pl-2"
        />
      </div>

      {/* Search Button (outside input box) */}
      <button className="h-[42px] px-6 bg-customBlue  text-white font-semibold text-[14px] rounded-full hover:bg-blue-700 transition">
             <SearchIcon fontSize="small" className="mr-1"/>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
