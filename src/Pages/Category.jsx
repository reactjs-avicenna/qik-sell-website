import React, { useState } from 'react'
import Header from '../Componenets/Header/Header'
import laptop from "../Images/laptop.png"
import Categories from '../Componenets/Categories';
import ProductSection from '../Componenets/ProductSection';
import TopFooter from '../Componenets/TopFooter';
import Footer from '../Componenets/Footer';
import ProductCard from '../Componenets/ProductCard';
import SidebarCategories from '../Componenets/SidebarCategories';
import TopBar from '../Componenets/TopBar';
export default function Category() {
      const [viewMode, setViewMode] = useState("grid");
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
      {/* Categories Section */}
      <Categories />

 <div className="flex justify-center w-full mt-4">
        <div className="flex w-[100%] ">

          {/* LEFT SIDEBAR */}
                 {/* LEFT SIDEBAR */}
          <div className="w-[22%] bg-[#FAFBFB] p-4 border border-[#D2D2D2]  shadow-sm h-max">
            <SidebarCategories />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-[78%]">
            
            {/* NEW TOP BAR (Same as Screenshot) */}
            <TopBar viewMode={viewMode} setViewMode={setViewMode} />

            {/* PRODUCT GRID / LIST */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 ml-4">
                {products.map((p, i) => (
                  <ProductCard key={i} product={p} view="grid" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-6 ml-4">
                {products.map((p, i) => (
                  <ProductCard key={i} product={p} view="list" />
                ))}
              </div>
            )}

      </div>
            </div>
                  </div>

      {/* Top Footer Banner */}
      <TopFooter />
      </div>
</div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
