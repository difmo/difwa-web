function Difwa() {
  return (
    <div  className="difwa">
      {/* Left Section - Text */}
      <div className="text-3xl md:text-6xl w-full md:w-1/3 font-semibold text-white text-center md:text-left">
        Download the Latest Version of the App from
      </div>

      {/* Middle Section - Button */}
      <div className="w-full md:w-1/3 flex justify-center my-6 md:my-0">
        <button className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Discover More
        </button>
      </div>

      {/* Right Section - Mobile Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="img/Phone.png"
          alt="Car Clean Plus App Preview"
          className="h-auto max-w-xs md:max-w-md object-cover"
        />
      </div>
    </div>
  );
}

export default Difwa;
