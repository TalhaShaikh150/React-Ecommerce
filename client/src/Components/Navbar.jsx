import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";
import CardSidebar from "./CardSidebar";

const Navbar = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector((state) => state.cart.count);
  const isOpen = useSelector((state) => state.cart.isOpen);

  const navLinkClass = ({ isActive }) =>
    `pb-1 border-b-2 transition-all ${
      isActive
        ? "border-black text-black"
        : "border-transparent text-gray-600 hover:border-black hover:text-black"
    }`;

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </div>

      {/* Main Logo Area */}
      <div className="pt-6 pb-4 flex justify-center relative">
        <a
          href="#"
          className="text-4xl font-serif font-medium tracking-tight text-black"
        >
          SHOP.CO
        </a>

        {/* Absolute positioned icons */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-4">
          <button className="p-2 hover:bg-gray-50 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-full relative">
            <svg
              onClick={() => {
                dispatch(toggleCart());
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {cartCount == 0 ? (
              <></>
            ) : (
              <span className="absolute top-0 right-1 flex justify-center items-center font-medium w-5 h-5 bg-gray-700 text-white rounded-full">
                <p> {cartCount}</p>
              </span>
            )}
          </button>
        </div>
      </div>

      {isOpen && <CardSidebar />}
      {/* Bottom NavLinks Area */}
      <div className="pb-6">
        <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-[0.15em]">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
