import React from "react";
import { Modal, Box } from "@mui/material";

export default function QikSellLoginModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/2 left-1/2 w-[360px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6">
        
        {/* Logo */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600">QikSell</h1>
          <p className="text-sm text-gray-500 -mt-1">Snap List Sell</p>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold mb-6">
          Login Into Your QIKSELL Account!
        </h2>

        {/* Google */}
        <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center mb-3 gap-2">
          <span className="text-lg">G</span>
          Login with Google
        </button>

        {/* Facebook */}
        <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center mb-3 gap-2">
          <span className="text-lg">f</span>
          Login with Facebook
        </button>

        {/* Divider */}
        <div className="flex items-center my-2">
          <div className="flex-grow border-t"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Email */}
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3 flex items-center justify-center gap-2">
          <span>📧</span>
          Login with Email
        </button>

        {/* Phone */}
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3 flex items-center justify-center gap-2">
          <span>📱</span>
          Login with Phone
        </button>

        {/* Bottom link */}
        <p className="text-center text-sm mt-3">
          New To QikSell?{" "}
          <a href="#" className="text-blue-600 font-semibold">
            Create An Account
          </a>
        </p>
      </Box>
    </Modal>
  );
}
