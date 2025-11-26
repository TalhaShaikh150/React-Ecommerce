import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import LoaderEditorial from "../Components/Loader";
import { useSelector } from "react-redux";


const Shop = () => {

  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      const fetchApi = await fetch("https://fakestoreapi.com/products");
      const productData = await fetchApi.json();
      setProduct(productData);
      if (productData) {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <LoaderEditorial />;
  }

  return (
    <div className="bg-white min-h-screen w-full text-black font-sans">
      <Navbar />
      {/* --- HEADER BANNER --- */}
      <div className="bg-gray-50 py-16 px-4 text-center border-b border-gray-100">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">All Products</h1>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          Spring Summer 2024 Collection
        </p>
      </div>

      {/* --- TOOLBAR --- */}
      <div className="top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex justify-between items-center">
          {/* Left: Count */}
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            {products.length} Items
          </span>

          {/* Right: View Options */}
          <div className="flex items-center gap-6">
            {/* View Toggles (Visual only) */}
            <div className="hidden sm:flex items-center gap-2 border-r border-gray-200 pr-6">
              <button className="p-1 hover:text-gray-500">
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                </div>
              </button>
              <button className="p-1 text-gray-300 hover:text-black">
                <div className="w-4 h-4 grid grid-cols-3 gap-0.5">
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                </div>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-xs font-bold uppercase tracking-widest">
                Sort By
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:rotate-180 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* --- FULL WIDTH PRODUCT GRID --- */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-16">
          {products.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
