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
const Favorites = () => {

    const products = [
        {
            title: "Apple iMac all models 2015",
            price: "120,800",
            image: laptop,
            location: "NAMED CITY, PUNE",
            time: "2 hours ago",
        },
        {
            title: "Apple iMac all models 2015",
            price: "120,800",
            image: laptop,
            location: "NAMED CITY, PUNE",
            time: "2 hours ago",
        },
        {
            title: "Apple iMac all models 2015",
            price: "120,800",
            image: laptop,
            location: "NAMED CITY, PUNE",
            time: "2 hours ago",
        },
        {
            title: "Apple iMac all models 2015",
            price: "120,800",
            image: laptop,
            location: "NAMED CITY, PUNE",
            time: "2 hours ago",
        },
        {
            title: "Apple iMac all models 2015",
            price: "120,800",
            image: laptop,
            location: "NAMED CITY, PUNE",
            time: "2 hours ago",
        },
    
    ];

    return (
        <div className=" min-h-screen flex flex-col">
            {/* Header Section */}
            <Header />

            <div className="flex  flex-col w-[100%] justify-center items-center">
                <div className="flex  flex-col w-[85%] justify-center items-center">
                    <CategoriesWithoutImage />
                
                    <ProductSection title="" pagination={false} products={products} viewAll={false} />

                    <TopFooter />
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Favorites;
