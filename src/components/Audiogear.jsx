const Audiogear = () => {
  return (
    <div className="max-w-6xl flex lg:flex-row flex-col-reverse gap-5 justify-around items-center py-10 mx-auto ">
      {/* text */}
      <div className="flex flex-col items-center justify-center text-center gap-5 w-full lg:w-[50%] px-10">
        <h2 className="lg:text-5xl lg:w-full md:text-4xl md:w-[60%] text-2xl w-full font-bold">
          BRINGING YOU THE <span className="text-darkbutton">BEST</span> AUDIO
          GEAR
        </h2>
        <p className=" font-light text-gray-600 lg:w-full md:w-[70%]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, speakers, and audio accessories. We have a
          large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make Audiophile the best
          place to buy your portable audio equipment.
        </p>
      </div>

      {/* image */}
      <div className="lg:w-[50%] h-full w-[90%] rounded-lg  flex items-center justify-center">
        <img
          src={"assets/Headphone_Boy.svg"}
          alt="A guy wearing a headphone"
          className="hidden lg:block lg:w-full rounded-xl"
        />
        <img
          src={"assets/tabletHeadphone_Boy.svg"}
          alt="A guy wearing a headphone"
          className="lg:hidden hidden md:block md:w-[90%] w-[80vw] md:h-full rounded-xl"
        />
        <img
          src={"assets/mobileHeadphone_Boy.svg"}
          alt="A guy wearing a headphone"
          className="lg:hidden md:hidden block w-[90%] h-full rounded-xl "
        />
      </div>
    </div>
  );
};

export default Audiogear;
