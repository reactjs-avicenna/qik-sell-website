import React, { useState } from "react";
import { Modal, Box } from "@mui/material";

// React Icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { IoCall, IoClose } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import SiginModel from "./SiginModel";
import LoginFormModal from "./LoginFormModal";

export default function QikSellLoginModal({ open, onClose,onSignup,openForm }) {
  
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/2 left-1/2 w-[360px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Logo */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600">QikSell</h1>
          <p className="text-sm text-gray-500 -mt-1">Snap List Sell</p>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold mb-6">
          Login Into Your QIKSELL Account!
        </h2>

        {/* Google Button */}
        <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center mb-3 gap-2">
          <FcGoogle className="text-xl" />
          Login with Google
        </button>

        {/* Facebook Button */}
        <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center mb-3 gap-2">
          <FaFacebookF className="text-xl text-blue-500 bg-white rounded-full p-1" />
          Login with Facebook
        </button>

        {/* Divider */}
        <div className="flex items-center my-2">
          <div className="flex-grow border-t"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Email Button */}
        <button   onClick={() => openForm("email")} className="w-full bg-blue-500 text-white py-3 rounded-full mb-3 flex items-center justify-center gap-2">
          <IoMdMail className="text-lg" />
          Login with Email
        </button>

        {/* Phone Button */}
        <button   onClick={() => openForm("phone")} className="w-full bg-blue-500 text-white py-3 rounded-full mb-3 flex items-center justify-center gap-2">
          <IoCall className="text-lg" />
          Login with Phone
        </button>

        {/* Bottom link */}
        <p className="text-center text-sm flex items-center justify-center mt-3">
          New To QikSell? {" "}
          <p onClick={() => onSignup()} className="text-blue-600 ml-1 cursor-pointer underline font-semibold">
            Create An Account
          </p>
        </p>
  
      </Box>
    </Modal>
  );
}
