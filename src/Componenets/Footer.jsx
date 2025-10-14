import React from "react";
import logo from "../Images/white_logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaCog } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#247CFF] w-full flex flex-col justify-center items-center text-white mt-8 ">
            <div className="w-[85%] flex justify-between items-center mt-10">
                {/* Left: Logo and Description */}
                <div className="w-[50%]">
                    <img src={logo} alt="QikSell Logo" className="h-8 mb-3" />
                    <p className="text-sm opacity-80 leading-relaxed">
                        my text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                {/* Right: Newsletter Form */}
                <div className="text-left">
                    <h3 className="text-base font-semibold mb-2">Our Newsletter</h3>
                    <div className="flex items-center justify-end gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md text-black w-60 outline-none"
                        />
                        <button className="bg-white text-[#247CFF] px-5 py-2 rounded-md font-semibold">
                            SEND
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex justify-between items-center w-[85%] ">
                <div className=" flex flex-wrap justify-start gap-6 mt-10 text-sm">
                    <a href="#">About us</a>
                    <a href="#">Services</a>
                    <a href="#">Blogs</a>
                    <a href="#">All Categories</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="flex items-center gap-4 mt-3 md:mt-0">
                    <div className="flex justify-center items-center w-8 h-8 rounded-full border border-white">
                        <FaFacebookF />
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 rounded-full border border-white">
                    <FaLinkedinIn />
                </div>
                <div className="flex justify-center items-center w-8 h-8 rounded-full border border-white">
                    <FaTwitter />
                </div>
                 </div>
        </div>
      {/* Footer Bottom: Social + Legal */ }
    <div className="w-[85%] mx-auto  border-t border-white/20 pt-4 pb-4 mt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
        <p>© Powered by Avicenna Enterprise Solutions.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
        </div>
    </div>
      
    </footer >
  );
};

export default Footer;
