import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiMapPin, FiClock, FiEye, FiMessageSquare, FiPhone, FiEdit, FiZap } from "react-icons/fi";

export default function AdListingsCard({
  image,
  price,
  title,
  location,
  activeDate,
  views,
  chats,
  calls
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white flex items-start gap-4 relative">

      {/* Product Image */}
      <div className="min-w-[200px] h-[160px] overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-1">
        <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-md font-medium">
          Active
        </span>

        <h2 className="text-xl font-semibold">Rs {price}</h2>
        <p className="text-gray-800 font-medium truncate">{title}</p>

        {/* Meta */}
        <div className="text-gray-500 text-sm space-y-1 mt-1">

          {/* Location */}
          <p className="flex items-center gap-1">
            <FiMapPin size={14} className="text-blue-500" />
            {location}
          </p>

          {/* Active Date */}
          <p className="flex items-center gap-1">
            <FiClock size={14} className="text-blue-500" />
            Active From {activeDate}
          </p>

          {/* Stats */}
          <div className="flex gap-6 text-xs mt-2">
            <span className="flex items-center gap-1">
              <FiEye size={14} /> {views} Views
            </span>
            <span className="flex items-center gap-1">
              <FiMessageSquare size={14} /> {chats} Chats
            </span>
            <span className="flex items-center gap-1">
              <FiPhone size={14} /> {calls} Phone Calls
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full justify-end mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-1.5 rounded-md flex items-center gap-2 text-sm">
            <FiEdit size={16} /> Edit
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-1.5 rounded-md flex items-center gap-2 text-sm">
            <FiZap size={16} /> Sell Faster
          </button>
        </div>
      </div>

      {/* 3-Dots Menu */}
      <div className="relative">
        <button
          className="p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <BsThreeDotsVertical size={20} />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-7 bg-white border rounded-md shadow-md w-32 text-sm z-10">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Deactivate
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Mark as sold
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
