import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, view }) => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/productView"),
          window.scrollTo(0, 0);
      }}
      className={`border rounded-lg p-3 bg-white hover:shadow-md transition 
      ${view === "list" ? "flex gap-4 items-center" : ""}`}
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className={`object-cover rounded 
        ${view === "list" ? "w-32 h-24" : "w-full h-40"}`}
      />

      {/* Info */}
      <div className="mt-3 space-y-1 flex-1">
        <div className="flex justify-between">
          <p className="text-black font-bold text-[15px]">Rs {product.price}</p>
          <FavoriteBorderIcon className="text-gray-600 cursor-pointer" />
        </div>

        <p className="text-gray-800 text-[12px] font-semibold line-clamp-1">
          {product.title}
        </p>

        <div className="flex items-center text-gray-500 text-xs gap-1">
          <FaLocationDot className="text-blue-600" /> {product.location}
        </div>

        <p className="text-gray-400 text-[11px]">{product.time}</p>
      </div>
    </div>
  );
};

export default ProductCard;
