import React, { useState, useEffect, useRef } from "react";
import LocationSelector from "./LocationSelector";
import SearchBar from "./SearchBar";
import logo from "../../Images/QikSell 1.png";
import profile from "../../Images/userProfile.jpg";
import car from "../../Images/car.png";
import property from "../../Images/property.png";
import { useNavigate } from "react-router-dom";

// ⭐ FILLED ICONS
import { AiFillBell, AiFillMessage, AiFillHeart, AiFillSetting } from "react-icons/ai";
import { FiLogOut, FiChevronDown } from "react-icons/fi";
import { BsMegaphoneFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import QikSellLoginModal from "../../Modal/Auth/QikSellLoginModal";
import SiginModel from "../../Modal/Auth/SiginModel";
import LoginFormModal from "../../Modal/Auth/LoginFormModal";
import SignUpFormModal from "../../Modal/Auth/SignUpFormModal";
import ForgotPasswordModal from "../../Modal/Auth/ForgotPasswordModal";

const userData = {
  name: "Robert James",
  avatar: profile,
};
const dummyNotifications = [
  {
    id: 1,
    status: "live",
    text: "Your Ad Is Live!",
    time: "27 Mins Ago",
    img: car
  },
  {
    id: 2,
    status: "review",
    text: "Your Ad Is Under Review!",
    time: "27 Mins Ago",
    img: car
  },
  {
    id: 3,
    status: "deleted",
    text: "Your Ad Is Deleted!",
    time: "27 Mins Ago",
    img: car
  },
  {
    id: 4,
    status: "live",
    text: "Your Ad Is Live!",
    time: "27 Mins Ago",
    img: car
  }
];

const Header = ({ searchView = true }) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
 const [formOpen, setFormOpen] = useState(false);
 const [formOpen1, setFormOpen1] = useState(false);
 const [forgotformOpen, setForgotformOpen] = useState(false);
  const [formType, setFormType] = useState("email");

  function openForm(type) {
    setLoginOpen(false)
    setFormType(type);
    setFormOpen(true); // open child modal
  }
   function openForm1(type) {
    setSignupOpen(false)
    setFormType(type);
    setFormOpen1(true); // open child modal
  }
  const menuRef = useRef();

  useEffect(() => {
    let id = 10;
    if (id) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
        setOpenNoti(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#EFF3FF] flex justify-center items-center flex-col border-gray-200">

      {/* TOP HEADER */}
      <div className="flex h-[100px] w-[85%] items-center justify-between">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-3 font-semibold text-[12px]">
          <img
            onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
            src={logo}
            alt="Logo"
            className="h-14 cursor-pointer"
          />

          <div onClick={() => {
            navigate("/category");
            window.scrollTo(0, 0);
          }} className="flex items-center gap-3 cursor-pointer">
            <img src={car} alt="" className="h-8" />
            <p>Motors</p>
          </div>

          <div onClick={() => {
            navigate("/category");
            window.scrollTo(0, 0);
          }} className="flex items-center gap-3 cursor-pointer">
            <img src={property} alt="" className="h-10" />
            <p>Property</p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 relative" ref={menuRef}>

          {isLoggedIn ? (
            <>
              {/* 🔔 Notification */}
              <AiFillBell onClick={() => {
                setOpenMenu(false);
                setOpenNoti(!openNoti);
              }} size={25} className="cursor-pointer text-gray-700" />

              {/* 💬 Message */}
              <AiFillMessage onClick={() => {
                navigate("/chat");
                window.scrollTo(0, 0);
              }} size={25} className="cursor-pointer text-gray-700" />

              {/* PROFILE BUTTON */}
              <div
                className="flex items-center gap-2 bg-customBlue text-white px-4 py-2 rounded-full cursor-pointer"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <img
                  src={userData.avatar}
                  alt="user"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span>{userData.name.split(" ")[0]}</span>
                <FiChevronDown size={18} />
              </div>

              {/* DROPDOWN MENU */}
              {openMenu && (
                <div className="absolute right-0 top-14 bg-white w-72 rounded-xl shadow-lg p-4 z-50">

                  {/* Profile Info */}
                  <div className="flex items-center gap-3 p-2 border-b">
                    <img
                      src={userData.avatar}
                      className="h-12 w-12 rounded-full object-cover"
                      alt="profile"
                    />
                    <div>
                      <p className="font-semibold">{userData.name}</p>
                      <button onClick={() => {
                        navigate("/userProfile");
                        window.scrollTo(0, 0);
                      }} className="text-blue-500 text-sm">View Profile</button>
                    </div>
                  </div>

                  {/* OFFER BOX */}
                  <div className="bg-blue-100 p-3 rounded-md mt-3 cursor-pointer">
                    <p className="font-semibold text-blue-700">Buy Discounted Packages</p>
                    <p className="text-xs">More credits, more savings. Grab discounted packages today!</p>
                  </div>

                  {/* MENU LIST */}
                  <div className="mt-3 flex flex-col gap-3">

                    <div onClick={() => {
                      navigate("/myAds");
                      window.scrollTo(0, 0);
                    }} className="flex items-center gap-2 cursor-pointer">
                      <BsMegaphoneFill /> <span>My Ads</span>
                    </div>

                    <div onClick={() => {
                      navigate("/favorites");
                      window.scrollTo(0, 0);
                    }} className="flex items-center gap-2 cursor-pointer">
                      <AiFillHeart /> <span>Favorites</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                      <AiFillSetting /> <span>Settings</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                      <MdHelp /> <span>Help</span>
                    </div>

                    <div
                      className="flex items-center gap-2 cursor-pointer text-red-500"
                      onClick={() => {
                        localStorage.removeItem("userId");
                        setIsLoggedIn(false);
                      }}
                    >
                      <FiLogOut /> <span>Logout</span>
                    </div>

                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* LOGIN BUTTON */}
              <button
                className="bg-customBlue text-white h-[42px] w-[100px] text-[14px] font-semibold flex items-center justify-center rounded-full hover:bg-blue-700 transition"
                onClick={() => setLoginOpen(true)}
              >
                Log In
              </button>
            </>
          )}

          {/* QikSell BUTTON */}
          <div onClick={() => {
            navigate("/postAds");
            window.scrollTo(0, 0);
          }} className="p-[4px] rounded-full bg-gradient-to-r from-[#3870F8] via-[#F2C946] to-[#48D1CA] inline-block">
            <button className="bg-white text-customBlue h-[35px] w-[100px] text-[14px] font-semibold flex items-center justify-center rounded-full hover:bg-gray-50 transition">
              QikSell
            </button>
          </div>

        </div>
      </div>
      {searchView &&
        <div className="w-full bg-white flex items-center justify-center flex-col gap-3 pt-5">
          <div className="flex w-[85%] items-center justify-between">
            <LocationSelector />
            <SearchBar />
          </div>
        </div>
      }
      {/* NOTIFICATION DROPDOWN - placed directly under bell icon */}
      {openNoti && (
        <div className="absolute right-[120px] top-16 bg-white w-80 rounded-xl shadow-lg p-4 z-50">

          {/* Header */}
          <div className="w-full bg-[#D7E2FF] py-3 rounded-md flex justify-center mb-3">
            <p className="font-semibold text-lg">Notifications</p>
          </div>

          {/* Notifications List */}
          <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">

            {dummyNotifications.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-gray-100 p-3 rounded-md items-start"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt="notif"
                  className="h-12 w-12 rounded-full object-cover"
                />

                {/* Texts */}
                <div className="flex flex-col">
                  <p
                    className={`font-semibold ${item.status === "live"
                      ? "text-green-600"
                      : item.status === "review"
                        ? "text-blue-600"
                        : "text-red-600"
                      }`}
                  >
                    {item.text}
                  </p>
                  <span className="text-xs text-black/60">{item.time}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      )}

     <QikSellLoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSignup={() => {
          setLoginOpen(false);
          setSignupOpen(true);
        }}
        openForm={openForm}
      />

      {/* Signup Modal */}
      <SiginModel
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        onLogin={() => {
          setSignupOpen(false);
          setLoginOpen(true);
        }}
        openForm={openForm1}
      />
           <LoginFormModal
        open={formOpen}
        type={formType}
        onClose={() => setFormOpen(false)}
           onSignup={() => {
          setFormOpen(false);
          setSignupOpen(true);
        }}
    onForgot={() => {
          setFormOpen(false);
          setSignupOpen(false);
          setForgotformOpen(true)
        }}
      />
         <SignUpFormModal
        open={formOpen1}
        type={formType}
        onClose={() => setFormOpen1(false)}
          onSignup={() => {
          setFormOpen1(false);
          setLoginOpen(true);
        }}
      />
      <ForgotPasswordModal
        open={forgotformOpen}
        onClose={() => setForgotformOpen(false)} 
         onSignup={() => {
          setForgotformOpen(false);
          setLoginOpen(true);
        }}
      />
    </header>
  );
};

export default Header;
