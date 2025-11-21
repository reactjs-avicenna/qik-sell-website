import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductSection = ({ title, products, view, pagination = false ,viewAll = true }) => {
  let navigate = useNavigate();

  const adsPerPage = 12; // adjust if needed
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(products.length / adsPerPage);
  const startIndex = (page - 1) * adsPerPage;
  const endIndex = Math.min(startIndex + adsPerPage, products.length);

  const currentAds = pagination ? products.slice(startIndex, endIndex) : products;

  const getPageNumbers = () => {
    let pages = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (page >= totalPages - 2) {
        pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, "...", page - 1, page, page + 1, "...", totalPages];
      }
    }

    return pages;
  };

  return (
    <section className={`w-full  ${viewAll ? "py-4" : ""}`}>

      {/* TITLE + VIEW MORE */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {(!pagination && viewAll) &&
        <p
          onClick={() => {
            navigate("/category");
            window.scrollTo(0, 0);
          }}
          className="text-customBlue cursor-pointer underline text-sm"
        >
          View More
        </p>
}
      </div>

      {/* 🌟 SHOWING TEXT (CENTERED) */}
      {pagination && (
        <div className="text-center font-semibold text-gray-700 mb-3">
          Showing {startIndex + 1} – {endIndex} out of {products.length} Ads
        </div>
      )}

      {/* GRID / LIST VIEW */}
      <div
        className={
          view === "list"
            ? "flex flex-col gap-6"
            : "grid grid-cols-2 sm:grid-cols-4 gap-6"
        }
      >
        {currentAds.map((p, idx) => (
          <ProductCard key={idx} product={p} view={view} />
        ))}
      </div>

      {/* PAGINATION */}
      {pagination && totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-5">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="p-2 disabled:opacity-30 rounded-full border bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {getPageNumbers().map((num, i) => (
            <button
              key={i}
              disabled={num === "..."}
              onClick={() => num !== "..." && setPage(num)}
              className={`w-8 h-8 flex items-center justify-center rounded-full border
                ${
                  page === num
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }
                ${num === "..." ? "cursor-default opacity-60" : ""}
              `}
            >
              {num}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="p-2 disabled:opacity-30 rounded-full border bg-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
