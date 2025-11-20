import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductSection = ({ title, products }) => {
  let navigate = useNavigate();
  return (
    <section className="w-[100%]  py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p onClick={() => {
          navigate("/category"),
          window.scrollTo(0, 0);
        }} className="text-customBlue cursor-pointer underline text-sm">View More</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((p, idx) => (
          <ProductCard key={idx} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
