import { ChevronRight, OctagonAlert } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import laptop from "../Images/laptop.png"
export default function ProductDetail({ product }) {
    let navigate = useNavigate();

    // ⭐ Set selected main image
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        // When API product loaded → set default main image
        if (product?.images?.length > 0) {
            setSelectedImage(product.images[0].image || product.images[0]);
        }
    }, [product]);

    return (
        <div className="p-4 max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="text-blue-600 text-sm mb-4">
                {product.breadcrumb?.map((bc, i) => (
                    <span key={i}>
                        {bc} {i < product.breadcrumb.length - 1 && " / "}
                    </span>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Left side: Images */}
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                    
                    {/* Small Thumbnails */}
                    <div className="flex flex-row md:flex-col gap-2">
                        {product.images?.map((imgObj, i) => {
                            const img = imgObj.image || imgObj;

                            return (
                                <img
                                    key={i}
                                    src={img }
                                    onClick={() => setSelectedImage(img)}   // ⭐ Change main image
                                    alt={product.title}
                                    className="w-20 h-20 object-cover border rounded cursor-pointer hover:scale-105 transition"
                                />
                            );
                        })}
                    </div>

                    {/* Big Image */}
                    <div className="flex flex-col flex-1 gap-4">
                        <img
                            src={selectedImage || laptop}   // ⭐ Updated dynamically
                            alt={product.title}
                            className="w-full h-auto object-cover border rounded"
                        />

                        {/* Product Description */}
                        <div>
                            <h2 className="font-semibold mb-2">Product Description</h2>
                            <p className="text-sm whitespace-pre-line">{product.description}</p>
                        </div>

                        {/* Safety Section */}
                        {product.safety && (
                            <div className="mt-4">
                                <h2 className="font-semibold mb-2">Your Safety Matters To Us:</h2>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    {product.safety.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right side: Details */}
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                        <span>ID: {product.id}</span>
                        <div className="flex items-center gap-2">
                            <OctagonAlert className=" text-blue-600" />
                            <a href="#" className="text-blue-600 hover:underline">
                                Report Ad
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border p-2 rounded-md">
                        <div className="flex">
                            <img
                                onClick={() => {
                                    navigate("/userProfile")
                                    window.scrollTo(0, 0)
                                }}
                                src={product.sellerAvatar || laptop}
                                alt={product.sellerName}
                                className="w-10 h-10 cursor-pointer rounded-full mr-3 object-cover"
                            />
                            <div>
                                <p
                                    onClick={() => {
                                        navigate("/userProfile")
                                        window.scrollTo(0, 0)
                                    }}
                                    className="text-sm cursor-pointer font-semibold"
                                >
                                    {product.sellerName}
                                </p>
                                <p className="text-xs text-gray-500">
                                    Member Since: {product.memberSince} | Total Ads: {product.totalAds}
                                </p>
                            </div>
                        </div>
                        <ChevronRight />
                    </div>

                    <h1 className="text-xl font-bold mb-3">{product.title}</h1>
                    <p className="text-lg font-semibold mb-4">RS: {product.price}</p>

                    <div className="flex flex-wrap gap-2 mb-4 text-[10px]">
                        {product.details &&
                            Object.entries(product.details).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="flex w-[48%] border rounded overflow-hidden text-[10px]"
                                >
                                    <div className="bg-blue-50 font-medium px-3 py-2 w-1/2 border-r">
                                        {key}
                                    </div>
                                    <div className="bg-gray-100 px-3 py-2 w-1/2">
                                        {value}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="flex gap-2 mb-6 w-full">
                        <button className="flex-1 bg-blue-600 min-w-[60%] text-white py-2 rounded text-sm hover:bg-blue-700">
                            Show Phone Number
                        </button>
                        <button
                            onClick={() => {
                                navigate("/chat")
                                window.scrollTo(0, 0)
                            }}
                            className="flex-1 bg-blue-600 min-w-[40%] text-white py-2 rounded text-sm hover:bg-blue-700"
                        >
                            Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
