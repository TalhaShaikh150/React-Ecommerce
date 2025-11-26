import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";
import CardSidebar from "./CardSidebar";
import { ShoppingBag, Search } from "lucide-react";
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
            <Search />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-full relative">
            <ShoppingBag
              onClick={() => {
                dispatch(toggleCart());
              }}
            />

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
