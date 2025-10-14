import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  return (
    <section className="w-[100%]  py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <a href="#" className="text-customBlue underline text-sm">View More</a>
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
