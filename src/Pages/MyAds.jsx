import React from "react";
import Header from "../Componenets/Header/Header";
import Categories from "../Componenets/Categories";
import TopFooter from "../Componenets/TopFooter";
import Footer from "../Componenets/Footer";
import HeroSection from "../Componenets/HeroSection";
import laptop from "../Images/laptop.png"
import ProductDetail from "../Componenets/ProductDetail";
import ProductSection from "../Componenets/ProductSection";
import CategoriesWithoutImage from "../Componenets/CategoriesWithoutImage";
import UserProfileCard from "../Componenets/UserProfileCard";
import { Divider } from "@mui/material";
import AdListingsCard from "../Componenets/AdListingsCard";
import AdListingsPage from "../Componenets/AdListingsPage";
const MyAds = () => {

     const products = [
    {
      image: laptop,
      price: "120,800",
      title: "Apple IMAC all models 2015...",
      location: "Lahore, Pakistan",
      activeDate: "30 Sept to 30 Oct",
      views: 399,
      chats: 81,
      calls: 12
    },
    {
      image: laptop,
      price: "120,800",
      title: "Apple IMAC all models 2015...",
      location: "Lahore, Pakistan",
      activeDate: "30 Sept to 30 Oct",
      views: 399,
      chats: 81,
      calls: 12
    }
  ];

    return (
        <div className=" min-h-screen flex flex-col">
            {/* Header Section */}
            <Header />

            <div className="flex  flex-col w-[100%] justify-center items-center">
                <div className="flex  flex-col w-[85%] justify-center items-center">
                    <CategoriesWithoutImage />
       
                 <AdListingsPage products={products} />

                    <TopFooter />
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MyAds;
