import { useRef, useState } from "react";
import { Modal, Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const categories = [
  { name: "Electronics", img: "https://source.unsplash.com/100x100/?electronics" },
  { name: "Fashion", img: "https://source.unsplash.com/100x100/?fashion" },
  { name: "Furniture", img: "https://source.unsplash.com/100x100/?furniture" },
  { name: "Personal Care", img: "https://source.unsplash.com/100x100/?skincare" },
  { name: "Health", img: "https://source.unsplash.com/100x100/?health" },
  { name: "Toys", img: "https://source.unsplash.com/100x100/?toys" },
  { name: "Automotive", img: "https://source.unsplash.com/100x100/?car" },
  { name: "Books", img: "https://source.unsplash.com/100x100/?books" },
];

const subCategories = [
  "Computers & Accessories",
  "Mobile Phones",
  "Television",
  "Video - Audio",
  "AC & Coolers",
  "Refrigerators & Freezers",
  "Games & Entertainment",
  "Books",
];

const types = ["Laptops", "Desktops", "Workstations", "Printers", "Web Cameras"];

export default function PostAdModal({ open, onClose }) {
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedSub, setSelectedSub] = useState("Computers & Accessories");
  const [selectedType, setSelectedType] = useState("Laptops");

  const subRef = useRef(null);
  const typeRef = useRef(null);

  const scrollLeft = (ref) => ref.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = (ref) => ref.current.scrollBy({ left: 200, behavior: "smooth" });

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="bg-white w-[900px] max-h-[90vh] overflow-y-auto rounded-xl p-8 mx-auto mt-10 shadow-lg">

        <h1 className="text-center text-2xl font-semibold mb-8">Post Your Ad</h1>

        {/* CATEGORY */}
        <h2 className="font-semibold mb-3">Choose Category</h2>
        <div className="grid grid-cols-4 gap-6 mb-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setSelectedCat(cat.name)}
              className={`cursor-pointer flex flex-col items-center p-3 rounded-xl border 
              ${selectedCat === cat.name ? "border-blue-500 shadow-md" : "border-gray-200"}`}
            >
              <img src={cat.img} className="w-16 h-16 rounded-md object-cover" alt="" />
              <p className="mt-2 text-sm">{cat.name}</p>
            </div>
          ))}
        </div>

        {/* -------------------- SUB CATEGORY -------------------- */}
        <h2 className="font-semibold mb-3">Sub Category</h2>

        <div className="relative w-full mb-6">
          <div className="bg-gray-100 rounded-2xl py-4 px-12 relative flex items-center">

            {/* Left Arrow */}
            <button
              onClick={() => scrollLeft(subRef)}
              className="absolute left-4 text-gray-600 hover:text-black"
            >
              <ChevronLeft />
            </button>

            {/* Scroll Row */}
            <div
              ref={subRef}
              className="flex gap-10 overflow-x-auto scrollbar-hide whitespace-nowrap w-full px-6"
            >
              {subCategories.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedSub(item)}
                  className={`text-sm px-3 py-2 rounded-lg transition 
                  ${selectedSub === item ? "bg-blue-100 text-blue-700" : "text-gray-700"}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollRight(subRef)}
              className="absolute right-4 text-gray-600 hover:text-black"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* -------------------- TYPE -------------------- */}
        <h2 className="font-semibold mb-3">Type</h2>

        <div className="relative w-full mb-6">
          <div className="bg-gray-100 rounded-2xl py-4 px-12 relative flex items-center">

            {/* Left Arrow */}
            <button
              onClick={() => scrollLeft(typeRef)}
              className="absolute left-4 text-gray-600 hover:text-black"
            >
              <ChevronLeft />
            </button>

            {/* Scroll Row */}
            <div
              ref={typeRef}
              className="flex gap-10 overflow-x-auto scrollbar-hide whitespace-nowrap w-full px-6"
            >
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`text-sm px-3 py-2 rounded-lg transition 
                  ${selectedType === t ? "bg-blue-100 text-blue-700" : "text-gray-700"}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollRight(typeRef)}
              className="absolute right-4 text-gray-600 hover:text-black"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* BREADCRUMB */}
        <p className="text-blue-600 text-sm mb-6">
          Electronics / {selectedSub} / {selectedType}
        </p>

        {/* NEXT BUTTON */}
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
            Next
          </button>
        </div>
      </Box>
    </Modal>
  );
}
