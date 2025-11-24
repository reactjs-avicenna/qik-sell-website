import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import {
  IoClose,
  IoMail,
  IoCall,
  IoLockClosed,
  IoPerson,
  IoEye,
  IoEyeOff
} from "react-icons/io5";

export default function SignUpFormModal({ open, onClose, type = "email",onSignup }) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/2 left-1/2 w-[380px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <IoClose size={24} />
        </button>

        {/* Logo */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600">QikSell</h1>
          <p className="text-sm text-gray-500 -mt-1">Snap List Sell</p>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6 text-blue-600">
          Sign Up
        </h2>

        {/* Name */}
        <div className="bg-gray-100 w-full flex items-center gap-2 rounded-full px-4 py-3 mb-3">
          <IoPerson className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Full Name"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Username */}
        <div className="bg-gray-100 w-full flex items-center gap-2 rounded-full px-4 py-3 mb-3">
          <IoPerson className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Email or Phone */}
        <div className="bg-gray-100 w-full flex items-center gap-2 rounded-full px-4 py-3 mb-3">
          {type === "email" ? (
            <IoMail className="text-gray-500 text-xl" />
          ) : (
            <IoCall className="text-gray-500 text-xl" />
          )}
          <input
            type={type === "email" ? "email" : "tel"}
            placeholder={type === "email" ? "Email" : "Phone"}
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Password */}
        <div className="bg-gray-100 w-full flex items-center gap-2 rounded-full px-4 py-3 mb-3 relative">
          <IoLockClosed className="text-gray-500 text-xl" />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent outline-none w-full"
          />
          <span
            className="absolute right-5 cursor-pointer text-gray-600"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <IoEyeOff size={20} /> : <IoEye size={20} />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="bg-gray-100 w-full flex items-center gap-2 rounded-full px-4 py-3 mb-4 relative">
          <IoLockClosed className="text-gray-500 text-xl" />
          <input
            type={showConfirmPass ? "text" : "password"}
            placeholder="Confirm Password"
            className="bg-transparent outline-none w-full"
          />
          <span
            className="absolute right-5 cursor-pointer text-gray-600"
            onClick={() => setShowConfirmPass(!showConfirmPass)}
          >
            {showConfirmPass ? <IoEyeOff size={20} /> : <IoEye size={20} />}
          </span>
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-lg mb-4">
          Sign Up
        </button>

        {/* Login link */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span onClick={()=> onSignup()}  className="text-blue-60 underline 0 cursor-pointer font-semibold">
            Log In
          </span>
        </p>
      </Box>
    </Modal>
  );
}
