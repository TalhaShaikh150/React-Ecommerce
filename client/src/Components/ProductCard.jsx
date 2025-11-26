import React from "react";
import CartButton from "./CartButton";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="group flex flex-col w-full max-w-sm">
        {/* --- IMAGE CARD --- */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 mb-4 cursor-pointer">
          <img
            // API: Use the first image from the array
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Wishlist Icon */}
          <button className="absolute top-3 right-3 p-2 rounded-full bg-white/0 hover:bg-white transition-colors group-hover:opacity-100 opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>

          <CartButton product={product} />
        </div>
        {/* --- PRODUCT INFO --- */}
        <div className="flex flex-col gap-1 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:underline underline-offset-4 decoration-1 line-clamp-1">
              {product.title}
            </h3>
            <span className="text-sm font-medium text-gray-900">
              ${product.price}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
              {product.category.name}
            </p>

            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
