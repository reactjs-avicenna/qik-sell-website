import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import laptop from "../Images/laptop.png"
import PostAdModal from "../Modal/PostAdModal";
const PostAd = () => {
  const [images, setImages] = useState(Array(10).fill(null));
  const [showPhone, setShowPhone] = useState(true);
 const [open, setOpen] = useState(true);
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updated = [...images];
      updated[index] = URL.createObjectURL(file);
      setImages(updated);
    }
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated[index] = null;
    setImages(updated);
  };

  return (
    <div className="w-full flex justify-center py-10 ">
      <div className="w-[100%]  bg-[#F7F7F7] shadow-md rounded-xl p-6">

        {/* PAGE TITLE */}
        <h1 className="text-xl font-semibold text-center mb-8">Post Your Ad</h1>

        {/* CATEGORY SECTION */}
        <div className="flex justify-between items-center p-4 bg-[#FAFAFA] border rounded-lg mb-6">
          <div>
            <p className="font-semibold flex items-center gap-2">
              <img
                src={laptop}
                alt="cat"
                className="h-12 w-12 rounded-lg "
              />
              Electronics
            </p>
            <p className="text-sm text-gray-500">Computers & Accessories / Laptops</p>
          </div>

          <button     onClick={() => setOpen(true)} className="text-blue-600 font-medium">Change</button>
        </div>

        {/* UPLOAD IMAGES SECTION */}
        <p className="font-semibold mb-2">Upload Images</p>

        <div className="grid grid-cols-5 gap-3 mb-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-full h-20 bg-[#F2F4FF] rounded-lg border flex items-center justify-center relative"
            >
              {!img ? (
                <label className="cursor-pointer w-full h-full flex items-center justify-center">
                  <FiPlus size={24} className="text-gray-600" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, idx)}
                  />
                </label>
              ) : (
                <>
                  <img
                    src={img}
                    alt="upload"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 bg-white p-1 rounded-full shadow"
                  >
                    <AiOutlineClose size={14} />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* FORM FIELDS */}
        <div className="space-y-5">

          {/* TYPE */}
          <div>
            <p className="font-medium mb-1">Type*</p>
            <input
              type="text"
              placeholder="Select Type"
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* BRAND */}
          <div>
            <p className="font-medium mb-1">Brand*</p>
            <input
              type="text"
              placeholder="Select Brand"
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* OS */}
          <div>
            <p className="font-medium mb-1">OS*</p>
            <input
              type="text"
              placeholder="Select Operating System"
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* CONDITION */}
          <div>
            <p className="font-medium mb-1">Condition*</p>
            <div className="flex gap-3">
              <button className="px-5 py-2 rounded-lg border bg-[#E8EEFF] font-medium">
                New
              </button>
              <button className="px-5 py-2 rounded-lg border font-medium">
                Used
              </button>
            </div>
          </div>

          {/* AD TITLE */}
          <div>
            <p className="font-medium mb-1">Ad Title*</p>
            <input
              type="text"
              placeholder="Write Ad Title"
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
            <p className="text-xs mt-1 text-gray-500">Mention key features (e.g. Brand, Model, etc.)</p>
          </div>

          {/* DESCRIPTION */}
          <div>
            <p className="font-medium mb-1">Description*</p>
            <textarea
              placeholder="Describe the item you are selling..."
              className="w-full border rounded-lg px-3 py-2 h-28 outline-none"
            />
            <p className="text-xs mt-1 text-gray-500">Include condition, features, and reason for selling</p>
          </div>

          {/* LOCATION */}
          <div>
            <p className="font-medium mb-1">Location*</p>
            <input
              type="text"
              placeholder="Select Location"
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* PRICE */}
          <div>
            <p className="font-medium mb-1">Price*</p>
            <input
              type="number"
              placeholder="Write Price"
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* NAME */}
          <div>
            <p className="font-medium mb-1">Name*</p>
            <input
              type="text"
              placeholder="Robert James"
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* PHONE NUMBER */}
          <div>
            <p className="font-medium mb-1">Phone Number*</p>
            <input
              type="text"
              placeholder="+92 Enter Phone Number"
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* TOGGLE: Show number in ads */}
          <div className="flex justify-between items-center mt-4">
            <p className="font-medium">Show My Number in Ads</p>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={showPhone}
                onChange={() => setShowPhone(!showPhone)}
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 rounded-full peer peer-checked:bg-blue-600 relative transition-all">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
              </div>
            </label>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-5 mt-10">
          <button className="px-8 py-2 bg-gray-200 rounded-full font-medium">
            Cancel
          </button>
          <button className="px-8 py-2 bg-customBlue text-white rounded-full font-medium">
            Post Now
          </button>
        </div>
   <PostAdModal open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default PostAd;
