import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";
import CartProduct from "./CartProduct";

const CardSidebar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, cartProduct) => {
    return total + cartProduct.price * cartProduct.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-[999] transition-all duration-500">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"></div>

      {/* 2. SIDEBAR CONTAINER */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 flex flex-col">
        {/* --- HEADER --- */}
        <div className="px-6 py-6 border-b border-gray-100 flex justify-between items-center bg-white">
          <h2 className="text-sm font-bold uppercase tracking-widest">
            Cart ({cartCount})
          </h2>
          <button
            onClick={() => dispatch(toggleCart())}
            className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors"
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {!cartCount && (
          <div className="h-full flex flex-col items-center justify-center space-y-6 p-8">
            {/* 1. Elegant Icon Container */}
            <div className="w-20 h-20 border border-gray-200 rounded-full flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
                Your Bag is Empty
              </p>
              <h3 className="text-2xl font-serif font-medium text-black">
                Looking for inspiration?
              </h3>
            </div>

            <button
              onClick={() => dispatch(toggleCart())}
              className="mt-4 px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Item 2 */}
          {cartItems.map((cartProduct) => (
            <CartProduct cartProduct={cartProduct} key={cartProduct.id} />
          ))}
        </div>

        <div className="border-t border-gray-100 p-6 bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Subtotal
            </span>
            <span className="text-sm font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <p className="text-[10px] text-gray-400 mb-4 text-center">
            Shipping and taxes calculated at checkout.
          </p>
          <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSidebar;
