import React from "react";

const LoaderEditorial = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-between py-12 text-white">
      {/* Top Text */}
      <div className="text-xs font-bold uppercase tracking-[0.2em]">
        Please Wait
      </div>

      {/* Center Animated Text */}
      <div className="flex text-center overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-serif font-medium animate-[translate-y_1s_ease-in-out_infinite_alternate]">
          SHOP.
        </h1>
        <h1 className="text-6xl md:text-8xl font-serif font-medium italic text-gray-500 animate-[translate-y_1s_ease-in-out_0.5s_infinite_alternate]">
          CO
        </h1>
      </div>

      {/* Bottom Progress Bar */}
      <div className="w-64 h-0.5 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-white w-full animate-[translateX_2s_ease-in-out_infinite]"></div>
      </div>

      {/* Custom Animation Keyframes */}
      <style>{`
        @keyframes translateX {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        @keyframes translate-y {
          0% { transform: translateY(5px); }
          100% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default LoaderEditorial;
