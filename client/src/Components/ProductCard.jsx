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
