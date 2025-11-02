import HeadphoneBoy from "../assets/Headphone_Boy.svg";

const Audiogear = () => {
  return (
    <div className="max-w-6xl flex justify-around items-center py-10 mx-auto">
      {/* text */}
      <div className="space-y-10 w-[40%] ">
        <h2 className="text-5xl font-bold">
          BRINGING YOU THE <span className="text-darkbutton">BEST</span> AUDIO
          GEAR
        </h2>
        <p className=" font-light text-gray-600">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, speakers, and audio accessories. We have a
          large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make Audiophile the best
          place to buy your portable audio equipment.
        </p>
      </div>

      {/* image */}
      <div className="w-[50%] rounded-lg  flex items-center justify-center">
        <img
          src={HeadphoneBoy}
          alt="A guy wearing a headphone"
          className="w-[90%] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Audiogear;
