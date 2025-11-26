import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import LoaderEditorial from "../Components/Loader";
import shop from "../../public/shop.jpg";
const Shop = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchApi = await fetch("http://localhost:3000/api/products");
        const productData = await fetchApi.json();
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <LoaderEditorial />;
  }

  return (
    <div className="bg-white min-h-screen w-full text-black font-sans selection:bg-black selection:text-white">
      <Navbar />

      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center bg-black">
        <img
          src={shop}
          alt="Collection Header"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 animate-[zoom-slow_20s_infinite_alternate]"
        />

        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
            Fall / Winter 2025
          </p>
          <h1 className="text-5xl md:text-8xl font-serif font-medium tracking-tight mb-6 animate-fade-in-up delay-100">
            The Archive.
          </h1>
          <p className="max-w-lg mx-auto text-sm md:text-base text-gray-200 font-light leading-relaxed animate-fade-in-up delay-200">
            Explore our curated selection of essentials. Designed for the modern
            individual, crafted for longevity.
          </p>
        </div>
      </div>

      <div className="bg-black text-white py-3 overflow-hidden border-b border-gray-800">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-xs font-bold uppercase tracking-[0.3em] mx-8">
                New Arrivals
              </span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] mx-8 text-gray-400">
                Free Shipping
              </span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <button className="flex items-center gap-3 group hover:opacity-70 transition-opacity">
            <div className="flex flex-col gap-1">
              <span className="w-4 h-0.5 bg-black group-hover:w-6 transition-all"></span>
              <span className="w-4 h-0.5 bg-black"></span>
              <span className="w-4 h-0.5 bg-black group-hover:w-2 transition-all"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">
              Filter
            </span>
          </button>

          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden md:block">
            {products.length} Products Found
          </span>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-xs font-bold uppercase tracking-widest group-hover:text-gray-500 transition-colors">
                Sort By
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            {/* View Toggles */}
            <div className="hidden sm:flex items-center gap-3 border-l border-gray-300 pl-6">
              <button className="opacity-40 hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                </div>
              </button>
              <button className="opacity-100">
                <div className="w-4 h-4 grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-black"></div>
                  ))}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
          {products.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))}
        </div>
      </div>

      <div className="py-24 border-t border-gray-100 flex flex-col items-center">
        <p className="text-xs font-mono text-gray-400 mb-4">
          You've viewed {products.length} of {products.length} items
        </p>
        <div className="w-48 h-0.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
          <div className="w-full h-full bg-black"></div>
        </div>
        <button className="px-10 py-4 border border-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
          Back to Top
        </button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes zoom-slow {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default Shop;
