import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../Images/image 1066.png"
import img2 from "../Images/image 1065.png"
import img3 from "../Images/image 1062.png"
import img4 from "../Images/image 1064.png"
import { GoArrowUpRight } from "react-icons/go";

const slides = [
  {
    id: 1,
    label: "NEW LOWER PRICES",
    title: "AFFORDABLE ELECTRONICS FOR EVERY HOME",
    description: "Make your living smarter, sleeker, and more spectacular",
    button: "SHOP NOW",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    label: "Exclusive",
    title: "SKIN CARE COLLECTION",
    description: "Shop Collection",
    button: "SHOP NOW",
    image:
     img1,
  },
    {
    id: 2,
    label: "Exclusive",
    title: "SKIN CARE COLLECTION",
    description: "Shop Collection",
    button: "SHOP NOW",
    image:
     img1,
  },
    {
    id: 2,
    label: "Exclusive",
    title: "SKIN CARE COLLECTION",
    description: "Shop Collection",
    button: "SHOP NOW",
    image:
     img1,
  },
    {
    id: 2,
    label: "Exclusive",
    title: "SKIN CARE COLLECTION",
    description: "Shop Collection",
    button: "SHOP NOW",
    image:
     img1,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
    <div className="flex flex-col w-[100%] items-center justify-center ">
    <div className="flex h-[60vh] w-[85%] font-sans mt-10 overflow-hidden">
      {/* LEFT SECTION (Slider) */}
      <div className="w-1/2 relative">
    {slides.map((slide, index) => (
  <div
    key={slide.id}
    className={`absolute inset-0 transition-opacity duration-700 ${
      current === index ? "opacity-100 z-10" : "opacity-0 z-0"
    }`}
  >
    <img
      src={slide.image}
      alt={slide.title}
      className="w-full h-full object-cover"
    />

    {/* Content Positioned at Bottom-Left */}
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start px-10 pb-5 text-white">
      <p className="text-[10px] uppercase mb-1">{slide.label}</p>
      <h1 className="text-lg font-bold leading-tight mb-1">
        {slide.title}
      </h1>
      <p className="mb-2 text-[10px] max-w-md">{slide.description}</p>

      {slide.button && (
        <button className="bg-white text-black text-[14px] px-5 py-2  mt-1 flex items-center gap-2 w-fit hover:bg-gray-200 transition">
          {slide.button} <span className="text-xl"><GoArrowUpRight /></span>
        </button>
      )}
    </div>
  </div>
))}


        {/* Dots */}
      {/* Controls Bottom-Right */}
<div className="absolute bottom-6 right-6 flex items-center gap-4 z-20">

  {/* Prev Button */}
  <button
    onClick={prevSlide}
    className="text-white text-sm hover:opacity-70 transition"
  >
    <FaChevronLeft />
  </button>

  {/* Dots */}
  <div className="flex items-center gap-2">
    {slides.map((_, idx) => (
      <div
        key={idx}
        onClick={() => setCurrent(idx)}
        className={`cursor-pointer transition-all duration-300 flex items-center justify-center
          ${current === idx 
            ? "w-4 h-1 bg-white rounded-full"  // ACTIVE → DASH
            : "w-1 h-1 bg-gray-400 rounded-full"} // INACTIVE → DOT
        `}
      />
    ))}
  </div>

  {/* Next Button */}
  <button
    onClick={nextSlide}
    className="text-white text-sm hover:opacity-70 transition"
  >
    <FaChevronRight />
  </button>

</div>


      
      </div>

      {/* RIGHT SECTION (flex row) */}
     <div className="w-1/2 flex h-full">
          {/* First Section: Full height image */}
          <div className="w-1/2 relative">
            <img src={img2} alt="Full Image" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end px-6 pb-5 text-white text-left">
              <p className="text-[10px] uppercase ">Exclusive</p>
              <h2 className="text-lg font-bold ">Skin Care Collection</h2>
              <a href="#" className=" text-[10px] flex items-center gap-1">
                Shop Collection <GoArrowUpRight />
              </a>
            </div>
          </div>

          {/* Second Section: Two stacked images */}
      <div className="w-1/2 flex flex-col">
  {/* Top box */}
  <div className="relative h-1/2">
    <img src={img3} alt="Furniture" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/30 flex flex-col justify-start items-start px-6 pt-6 text-white text-left">
      <p className="text-[10px] uppercase ">Price Just ₹18,000</p>
      <h3 className="text-lg font-bold ">Unique Furnitures</h3>
      <a href="#" className="  flex text-[10px] items-center gap-1">
        Discover More  <GoArrowUpRight />
      </a>
    </div>
  </div>

  {/* Bottom box */}
  <div className="relative h-1/2">
    <img src={img4} alt="Spring Sale" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/30 flex flex-col justify-start items-start px-6 pt-6 text-white text-left">
      <p className="text-[10px] uppercase ">Holidays</p>
      <h3 className="text-lg font-bold ">Spring Sale</h3>
      <a href="#" className=" text-[10px] flex  items-center gap-1">
        Discover More  <GoArrowUpRight />
      </a>
    </div>
  </div>
</div>

        </div>
    </div>
    </div>
    </>
  );
}
