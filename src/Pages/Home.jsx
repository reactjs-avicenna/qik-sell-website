import React, { useEffect, useState } from "react";
import Header from "../Componenets/Header/Header";
import Categories from "../Componenets/Categories";
import ProductSection from "../Componenets/ProductSection";
import TopFooter from "../Componenets/TopFooter";
import Footer from "../Componenets/Footer";
import HeroSection from "../Componenets/HeroSection";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
const Home = () => {
  const apiBaseUrl = import.meta.env.VITE_APP_API_URL;
  let token = "709|waX19uvJMDmrXsPzfWr3na3rOEaBpDGakvhtmkm14f653f48";

  const [products, setProducts] = useState([]);
  const [screenLoader, setScreenLoader] = useState(false);

  const handleGetListing = async () => {
    setScreenLoader(true);
    try {
      const response = await axios.post(
        `${apiBaseUrl}post/getAll`,
        { per_page: 200, page: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response?.data?.status === true) {
        setProducts(response?.data?.data?.listings);
      }
    } catch (error) {
      console.error("Error fetching listing:", error);
    } finally {
      setScreenLoader(false);
    }
  };

  useEffect(() => {
    handleGetListing();
  }, []);

  // ⭐ Get all unique categories dynamically
  const categories = [...new Set(products.map((item) => item.categoryName))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />

      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col w-[85%] justify-center items-center">
          <Categories />

        {screenLoader ? (
            <div className="flex w-full min-h-[60vh] justify-center items-center">
              <ScaleLoader color="#3870F8" />
            </div>
          ) : (
            <>
          {categories.map((cat, index) => (
            <ProductSection
              key={index}
              title={cat}
              products={products
                .filter((item) => item?.categoryName === cat)
                .slice(0, 4)}   // ⭐ LIMIT TO 4 PRODUCTS
            
            />
          ))}
          </>
          )}

          <TopFooter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
