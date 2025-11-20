import React from "react";
import LocationSelector from "./LocationSelector";
import SearchBar from "./SearchBar";
import logo from "../../Images/QikSell 1.png"
import car from "../../Images/car.png"
import property from "../../Images/property.png"
import { useNavigate } from "react-router-dom";
const Header = () => {
   let navigate = useNavigate();
  return (
    <header className="w-full  bg-[#EFF3FF] flex justify-center items-center flex-col border-gray-200">
      <div className="flex h-[100px]  w-[85%] items-center justify-between ">
        <div className="flex items-center gap-3 font-semibold text-[12px]">
          <img onClick={() => {
          navigate("/"),
          window.scrollTo(0, 0);
        }} src={logo} alt="Logo" className="h-14 cursor-pointer" />
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={car} alt="Logo" className="h-8" />
            <p>Motors</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={property} alt="Logo" className="h-10" />
            <p>Property</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Log In Button */}
          <button className="bg-customBlue text-white h-[42px] w-[100px] text-[14px] font-semibold flex items-center justify-center rounded-full hover:bg-blue-700 transition">
            Log In
          </button>

          {/* QikSell Button with Thicker Gradient Border */}
          <div className="p-[4px] rounded-full bg-gradient-to-r from-[#3870F8] via-[#F2C946] to-[#48D1CA] inline-block">
            <button className="bg-white text-customBlue h-[35px] w-[100px] text-[14px] font-semibold flex items-center justify-center rounded-full hover:bg-gray-50 transition">
              QikSell
            </button>
          </div>



        </div>
      </div>

      <div className="w-[100%] bg-white mx-auto flex items-center justify-center flex-col gap-3   pt-5">
             <div className="flex w-[85%] items-center justify-between ">
        <LocationSelector />
        <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
