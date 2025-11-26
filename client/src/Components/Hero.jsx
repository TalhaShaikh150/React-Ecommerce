import React from "react";
import hero from "../../public/hero.jpg";
const Hero = () => {
  return (
    <div className="relative bg-[#F9F9F9] w-full min-h-[90vh] flex flex-col justify-between overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center py-12 lg:py-0 relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-black"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                New Collection
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl lg:text-8xl font-serif text-black leading-[1] mb-6 tracking-tight">
              Modern <br />
              <span className="italic font-light text-gray-400">Essence.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed font-light">
              Discover the new standard of luxury. Impeccable tailoring meets
              modern silhouette. Designed in Milan for the bold.
            </p>

            {/* BUTTONS - Prominent and Visible */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group relative px-10 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest overflow-hidden hover:bg-gray-900 transition-all shadow-lg">
                <span className="relative z-10 group-hover:ml-2 transition-all duration-300">
                  Shop Women
                </span>
              </button>

              <button className="group px-10 py-4 bg-transparent border border-gray-300 text-black text-sm font-bold uppercase tracking-widest hover:border-black hover:bg-white transition-all">
                Shop Men
              </button>
            </div>
          </div>

          {/* RIGHT: Clean Image Composition (Span 7) */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[650px] w-full flex items-center justify-center lg:justify-end">
            {/* Decorative Gray Block behind image */}
            <div className="absolute right-0 top-10 w-[80%] h-[90%] bg-gray-200 -z-10"></div>

            {/* Main Image */}
            <div className="relative w-[90%] lg:w-[500px] h-full shadow-2xl group overflow-hidden">
              <img
                src={hero}
                alt="Minimal Fashion"
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />

              {/* Simple Floating Tag */}
              <div className="absolute bottom-0 left-0 bg-white px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-black">
                  Look 01 / The Coat
                </p>
                <p className="text-xs text-gray-500 mt-1">$450.00</p>
              </div>
            </div>

            {/* Floating "New" Badge */}
            <div className="absolute top-12 right-12 lg:-right-6 bg-black text-white w-20 h-20 rounded-full flex items-center justify-center z-20 animate-spin-slow">
              <svg viewBox="0 0 100 100" width="80" height="80">
                <path
                  id="curve"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text fontSize="13" fontWeight="bold" letterSpacing="2">
                  <textPath xlinkHref="#curve" fill="white">
                    NEW ARRIVAL • NEW ARRIVAL •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. BOTTOM STRIP (Clean Ticker) --- */}
      <div className="w-full bg-white border-t border-gray-200 overflow-hidden py-3 z-10">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-xs font-bold uppercase tracking-[0.3em] mx-8 text-black">
                Spring Collection
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] mx-8 text-gray-400">
                Free Shipping Over $200
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
