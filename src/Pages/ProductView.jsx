import React, { useEffect, useState } from "react";
import Header from "../Componenets/Header/Header";
import Categories from "../Componenets/Categories";
import TopFooter from "../Componenets/TopFooter";
import Footer from "../Componenets/Footer";
import HeroSection from "../Componenets/HeroSection";
import laptop from "../Images/laptop.png"
import ProductDetail from "../Componenets/ProductDetail";
import ProductSection from "../Componenets/ProductSection";
import CategoriesWithoutImage from "../Componenets/CategoriesWithoutImage";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
const ProductView = () => {
  const apiBaseUrl = import.meta.env.VITE_APP_API_URL;
  let token = "709|waX19uvJMDmrXsPzfWr3na3rOEaBpDGakvhtmkm14f653f48";
  const [productDetails, setProductDetails] = useState({});
  const [screenLoader, setScreenLoader] = useState(false);
  const { id } = useParams();
  const handleGetListing = async () => {
    setScreenLoader(true);
    try {
      const response = await axios.get(
        `${apiBaseUrl}post/getPostById/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response?.data?.status === true) {
        const p = response?.data?.data?.PostResponse;
console.log(p)
        const mapped = {
          id: p.id,
          title: p.title,
          price: p.price,
          description: p.description,

          // Convert images object → array of strings
          images: p.images?.map(img => img.image) || [],

          mainImage: p.images?.[0]?.image || "",

          // Seller Info
          sellerName: p.user?.name,
          sellerAvatar: p.user?.image,
          memberSince: p.user?.created_at,
          totalAds: p.user?.activePosts,

          // Extra Details Mapping
          details: {
            Brand: p.brand,
            Condition: p.condition,
            Category: p.categoryName,
            "Sub Category": p.subCategoryName,
            Location: p.address,
          }
        };

        setProductDetails(mapped);
      }

    } catch (error) {
      console.error("Error fetching listing:", error);
    } finally {
      setScreenLoader(false);
    }
  };
 const [relventsProducts, setRelventsProducts] = useState([]);

  const handleGetRelvents = async () => {
    setScreenLoader(true);
    try {
      const response = await axios.get(
        `${apiBaseUrl}post/getRelatedPost/${id}`,
    
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response?.data?.status === true) {
        setRelventsProducts(response?.data?.data?.listings);
      }
    } catch (error) {
      console.error("Error fetching listing:", error);
    } finally {
      setScreenLoader(false);
    }
  };

  
  useEffect(() => {
    handleGetListing();
    handleGetRelvents();
  }, []);

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
            {screenLoader ? (
            <div className="flex w-full min-h-[60vh] justify-center items-center">
              <ScaleLoader color="#3870F8" />
            </div>
          ) : (
            <>
          <ProductDetail product={productDetails} />
          </>
          )
}
{relventsProducts.length > 0 &&
          <ProductSection title="Related Ads" products={relventsProducts} />
}
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
