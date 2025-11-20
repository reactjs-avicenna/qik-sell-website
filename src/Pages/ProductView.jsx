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
const ProductView = () => {

 const product = {
  breadcrumb: ["Home", "Electronics", "Laptops"],
  images: [
    laptop,
    laptop,
  laptop,
  ],
  mainImage: laptop,
  id: "102423959",
  sellerAvatar: laptop,
  sellerName: "Robert James",
  memberSince: "2021",
  totalAds: 21,
  title: "MACBOOK PRO M1 2020 13 INCH TOUCHBAR 16GB RAM 256GB SSD",
  price: "210,000",
  details: {
    Model: "2021",
    Condition: "Used",
    Type: "Macbook - Laptops",
    Location: "Lahore, Pakistan",
    "OS / Windows": "MAC - OS",
  },
  description: `QUANTITY AVAILABLE: 01
MACBOOK PRO M1 2020 13 INCH TOUCHBAR 16GB RAM 256GB SSD 100 HEALTH 24 CYCLE USED 2 WEEK CHECK WARRANTY FOR SATISFACTION FOR MORE DETAIL CALL ME OR
VISIT ME AT SAME NO 0343/907/8192
SHOP ADDRESS
JEFF HEIGHT PLAZA NEAR HAFEEZ CENTER 1ST FLOOR SHOP NO M20 GULBERG 3 LAHORE`,
  safety: [
    "Only Meet In Public / Crowded Places Such As Metro Stations And Malls.",
    "Never Go Alone To Meet A Buyer / Seller, Always Take Someone With You.",
    "Check And Inspect The Product Properly Before Purchasing It.",
    "Never Pay / Transfer Any Money In Advance Before Inspecting The Product.",
  ],
};
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
  ];

  return (
    <div className=" min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

 <div className="flex  flex-col w-[100%] justify-center items-center">
     <div className="flex  flex-col w-[85%] justify-center items-center">
             <CategoriesWithoutImage />
        <ProductDetail product={product} />
             <ProductSection title="Related Ads" products={products} />
      {/* Categories Section */}
 
      <TopFooter />
      </div>
</div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductView;
