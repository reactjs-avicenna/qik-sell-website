import React, { useEffect, useState } from "react";
import { Modal, Box } from "@mui/material";
import {
  IoClose,
  IoMail,
  IoCall,
  IoLockClosed,
  IoEye,
  IoEyeOff
} from "react-icons/io5";

export default function ForgotPasswordModal({ open, onClose, type = "email" ,onSignup}) {
  const [step, setStep] = useState(1);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };
useEffect(()=>{
setStep(1)
},[open])
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
          Forgot Password
        </h2>

        {/* Step 1: Enter Email / Phone */}
        {step === 1 && (
          <>
            <div className="bg-gray-100 w-full flex items-center gap-2 rounded-full px-4 py-3 mb-4">
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
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-lg mb-4"
            >
              Send Code
            </button>
          </>
        )}

        {/* Step 2: Enter 4-digit Verification Code */}
        {step === 2 && (
          <>
            <p className="text-center text-gray-500 mb-4">
              Enter the 4-digit code sent to your {type === "email" ? "email" : "phone"}.
            </p>
            <input
              type="text"
              maxLength={4}
              className="w-full text-center bg-gray-100 rounded-full py-3 mb-4 outline-none text-xl tracking-widest"
              placeholder="----"
            />
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-lg mb-4"
            >
              Next
            </button>
          </>
        )}

        {/* Step 3: Enter New Password / Confirm Password */}
        {step === 3 && (
          <>
            {/* New Password */}
            <div className="bg-gray-100 w-full flex items-center gap-2 rounded-full px-4 py-3 mb-3 relative">
              <IoLockClosed className="text-gray-500 text-xl" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="New Password"
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

            <button
              onClick={onClose}
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-lg mb-4"
            >
              Reset Password
            </button>
          </>
        )}
   <p className="text-center text-sm">
          Already have an account?{" "}
          <span onClick={()=> onSignup()}  className="text-blue-600 underline cursor-pointer font-semibold">
            Log In
          </span>
        </p>
      </Box>
    </Modal>
  );
}
