import React from "react";
import Header from "../Componenets/Header/Header";
import Categories from "../Componenets/Categories";
import ProductSection from "../Componenets/ProductSection";
import TopFooter from "../Componenets/TopFooter";
import Footer from "../Componenets/Footer";
import HeroSection from "../Componenets/HeroSection";
import laptop from "../Images/laptop.png"
const Home = () => {
  // Dummy products (replace later with API or Firebase data)
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

      {/* Hero Section (Optional — if you have banner images) */}
    <HeroSection/>
 <div className="flex  flex-col w-[100%] justify-center items-center">
     <div className="flex  flex-col w-[85%] justify-center items-center">
      {/* Categories Section */}
      <Categories />

      {/* Product Sections */}
      <ProductSection title="Electronics" products={products} />
      <ProductSection title="Fashion" products={products} />
      <ProductSection title="Furniture" products={products} />
      <ProductSection title="Personal Care" products={products} />

      {/* Top Footer Banner */}
      <TopFooter />
      </div>
</div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
