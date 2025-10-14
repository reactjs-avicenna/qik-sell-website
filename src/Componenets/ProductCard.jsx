import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FaLocationDot } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-3 shadow-sm hover:shadow-md transition bg-white">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-50 object-cover border border-customBlue rounded-md"
      />

      {/* Product Info */}
      <div className="mt-3 space-y-1">
        {/* Price + Heart */}
        <div className="flex items-center justify-between">
          <p className="text-black font-semibold text-[15px]">
            Rs {product.price}
          </p>
          <FavoriteBorderIcon className="text-customBlue cursor-pointer 0 transition" />
        </div>

        {/* Title */}
        <h3 className="text-gray-900 font-semibold text-[13px] line-clamp-1">
          {product.title}
        </h3>

        {/* Location + Time */}
        <div className="flex items-center  gap-1 text-xs text-gray-500">
          <FaLocationDot  fontSize="small" className="text-customBlue" />
          <span>{product.location}</span>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span>{product.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
