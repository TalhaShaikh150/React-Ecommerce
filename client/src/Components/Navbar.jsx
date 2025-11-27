import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";
import CardSidebar from "./CardSidebar";
import { ShoppingBag, Search } from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);
  const isOpen = useSelector((state) => state.cart.isOpen);

  // --- STYLING LOGIC ---
  const navLinkClass = ({ isActive }) =>
    `text-sm font-bold uppercase tracking-[0.10em] pb-1 border-b-2 transition-all duration-300 ease-in-out ${
      isActive
        ? "border-black text-black" // Active State
        : "border-transparent text-gray-500 hover:text-black hover:border-black" // Inactive + Hover State
    }`;

  return (
    <nav className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Line Container: h-20 (80px height) */}
        <div className="flex items-center justify-between h-20">
          {/* 1. LOGO */}
          <div className="flex-shrink-0 cursor-pointer">
            <NavLink
              to="/"
              className="text-2xl font-serif font-black tracking-tight text-black"
            >
              SHOP.CO
            </NavLink>
          </div>

          {/* 2. CENTER NAVIGATION */}
          {/* 'hidden md:flex' hides this on mobile, shows on medium screens up */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>
            {/* You can add more links here easily */}
            {/* <NavLink to="/about" className={navLinkClass}>About</NavLink> */}
          </div>

          {/* 3. RIGHT ICONS */}
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-600 hover:bg-gray-100 hover:text-black rounded-full transition-colors duration-200">
              <Search size={20} />
            </button>

            <button
              className="p-2 text-gray-600 hover:bg-gray-100 hover:text-black rounded-full relative transition-colors duration-200"
              onClick={() => dispatch(toggleCart())}
            >
              <ShoppingBag size={20} />

              {/* Cart Counter Badge */}
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex justify-center items-center text-[10px] font-bold w-4 h-4 bg-black text-white rounded-full animate-bounce-short">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && <CardSidebar />}
    </nav>
  );
};

export default Navbar;
