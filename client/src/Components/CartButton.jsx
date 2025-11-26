import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cartIncrement,
} from "../features/cart/cartSlice";

const CartButton = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="absolute bottom-4 right-4 transition-all duration-300 
    opacity-100 translate-y-0 
    lg:opacity-0 lg:translate-y-4 
    lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
      >
        <button
          onClick={(e) => {
            dispatch(cartIncrement());
            dispatch(addToCart(product));
          }}
          className="group/btn flex items-center bg-white text-black border border-gray-200 shadow-lg rounded-full py-3 px-3 
    hover:px-6 hover:bg-black hover:text-white hover:border-black 
    transition-all duration-300 ease-out"
        >
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
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {/* Text reveals on hover (Desktop) or acts as padding (Mobile) */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover/btn:max-w-xs group-hover/btn:ml-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300">
            Add
          </span>
        </button>
      </div>
    </>
  );
};

export default CartButton;
