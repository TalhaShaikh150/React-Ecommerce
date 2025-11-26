import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../features/cart/cartSlice";
const CartProduct = ({ cartProduct }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      {/* Image */}

      <div className="w-24 h-32 bg-gray-100  overflow-hidden relative">
        <img
          src={cartProduct.image}
          alt={cartProduct.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              {cartProduct.title}
            </h3>
          </div>
          <p className="text-md font-bold text-gray-900 mt-1">
            ${(cartProduct.price * cartProduct.quantity).toFixed(2)}
          </p>
        </div>

        {/* Qty & Remove */}
        <div className="flex justify-between items-end">
          <div className="flex items-center border border-gray-300">
            <button
              className="px-3 py-1 text-xs hover:bg-gray-100"
              onClick={() => {
                dispatch(decreaseQuantity(cartProduct.id));
              }}
            >
              -
            </button>
            <span className="text-xs font-bold px-2">
              {cartProduct.quantity}
            </span>
            <button
              className="px-3 py-1 text-xs hover:bg-gray-100"
              onClick={() => {
                dispatch(increaseQuantity(cartProduct.id));
              }}
            >
              +
            </button>
          </div>
          <button
            className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black underline underline-offset-2"
            onClick={() => {
              dispatch(removeProduct(cartProduct.id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
