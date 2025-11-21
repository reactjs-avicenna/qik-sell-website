import React from "react";
import { FaMapMarkerAlt, FaPhone, FaAd, FaPhoneAlt } from "react-icons/fa";

const UserProfileCard = ({ user }) => {
  return (
    <div className="flex items-center justify-center  pb-8 bg-white border-b w-full ">
      {/* User Image */}
      <div className="flex gap-6 items-center ">
      <div className="flex-shrink-0">
        <img
          src={user.image}
          alt={user.name}
          className="w-32 h-32 rounded-full border-2 border-blue-500 object-cover"
        />
      </div>

      {/* User Info */}
      <div className="flex-1 justify-start  ">
        <div className="flex  justify-start flex-col   ">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <div className="flex items-center w-[230px] justify-center border rounded-md gap-4 mt-2 mb-2">
          <button className="text-blue-500 text-[12px]   px-2 py-1 rounded ">
            Report User
          </button>
          <p className="text-gray-200 w-[5px] ">|</p>
          <button className="text-red-500 text-[12px]   px-2 py-1 rounded ">
            Block User
          </button>
          </div>
        </div>

        <p className="text-gray-500 mb-3">
          {user.description}
        </p>

        {/* User Details */}
        <div className="flex items-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>Location: {user.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaPhoneAlt  className="text-blue-500" />
            <span>Phone: {user.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaAd className="text-blue-500" />
            <span>Published Ads: {user.ads}</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
