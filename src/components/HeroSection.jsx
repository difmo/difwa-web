import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-red-900 text-white h-screen flex  items-center justify-center px-8">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Download the Latest Version of the App from
        </h1>
        <button className="mt-4 px-6 py-2 border-2 border-white rounded-md text-white hover:bg-white hover:text-gray-900 transition-all">
          Discover More
        </button>
      </div>
      //dkndoivhdvd
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="relative w-60 h-[500px] bg-black rounded-3xl overflow-hidden shadow-lg">
          <img
            src="img/Phone.png" // Update this path to your image
            alt="Difwa App"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
