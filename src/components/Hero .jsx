import { Link } from "react-router-dom";
import MarkII from "../assets/XX99 MARK II HEADPHONES.svg";
import Button from "../components/Button";

const Hero = () => {
  return (
    <>
      {/* hero */}
      <section className="relative flex md:flex-row justify-around items-center md:py-10 bg-dark1 text-light2">
        {/* text */}
        <div
          className=" absolute lg:static flex flex-col items-center lg:items-start
           justify-center lg:w-[25%] lg:text-left lg:gap-4 
        top-1/2 lg:top-auto left-1/2 lg:left-auto transform -translate-x-1/2 -translate-y-1/2 text-center lg:translate-x-0  
        transform-none lg:translate-y-0 z-10 w-[70%] md:w-[50%] md:gap-4 gap-2"
        >
          <p className="text-lg tracking-wider ">NEW PRODUCT</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-wider">
            XX99 MARK II HEADPHONES
          </h1>
          <p className=" ">
            Experience natural, lifelike audio and exceptional build quality
            made for passionate music enthusiast.
          </p>

          <Link className="">
            <Button
              color={"bg-darkbutton"}
              textColor={"text-light2"}
              hoverColor={"bg-lightbutton"}
            >
              SEE PRODUCTS
            </Button>
          </Link>
        </div>
        <div className="lg:hidden bg-black/70 absolute inset-0 z-0"></div>

        {/* image */}
        <div>
          <img
            src={MarkII}
            alt="XX99 MARK II HEADPHONES"
            className="w-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
