import Button from "../components/Button";
import Hero from "../components/Hero ";
import Products from "../components/Products";
import Zx9 from "../assets/ZX9 SPEAKER.svg";
import Zx7 from "../assets/ZX7_SPEAKER.svg";
import YX1 from "../assets/YX1_Earphones.svg";
import Audiogear from "../components/Audiogear";
import Swirl1 from "../assets/swirl1.svg";
import Swirl2 from "../assets/swirl2.svg";
import Swirl3 from "../assets/swirl3.svg";
import MobileZx7 from "../assets/mobileZX7_Speaker.svg";

const Home = () => {
  return (
    <main className="">
      {/* hero */}
      <section>
        <Hero />
      </section>

      {/* Products */}
      <section className="md:pt-[7%] pt-[40%]">
        <Products />
      </section>

      {/* Product2 */}
      <section className="w-full lg:max-w-6xl lg:px-5 md:max-w-3xl md:px-8 max-w-xl px-6 mx-auto ">
        <div className=" flex flex-col items-center justify-center gap-5">
          {/* speaker 1*/}
          <div
            className="flex lg:justify-around lg:flex-row flex-col bg-darkbutton relative
          items-center lg:pt-10 lg:pb-0 py-7 lg:gap-0 gap-8 overflow-hidden w-full rounded-xl"
          >
            {/* swirl bg images */}
            {/* <div> */}
            <img
              src={Swirl2}
              alt=""
              className="lg:hidden absolute md:w-[60%] w-full h-full md:bottom-6 bottom-18 opacity-50"
            />
            <img
              src={Swirl3}
              alt=""
              className="lg:hidden absolute md:w-[70%] w-[80%] h-full md:bottom-8 bottom-20 opacity-50"
            />
            <img
              src={Swirl1}
              alt=""
              className="lg:hidden absolute bottom-0 w-full object-cover h-full opacity-50"
            />
            {/* </div> */}

            {/* image */}
            <div className="flex items-center justify-center">
              <img
                src={Zx9}
                alt="ZX9 SPEAKER"
                className="-mb-4 lg:w-full w-[65%]"
              />
            </div>
            {/* text */}
            <div className="text-light2 lg:w-[45%] w-[90%] text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
              <h2 className="text-4xl font-bold">ZX9 SPEAKER</h2>
              <p className="text-sm w-[70%]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound
              </p>
              <Button
                color="bg-dark1"
                textColor={"text-light2"}
                hoverColor={"bg-dark2"}
              >
                SEE PRODUCT
              </Button>
            </div>
          </div>

          {/* Speaker 2 */}
          <div className="relative">
            {/* text */}
            <div className="absolute top-[30%] left-[10%] flex flex-col items-center justify-center gap-4">
              <div className="">
                <h2 className="text-3xl font-bold">ZX7 SPEAKER</h2>
              </div>
              <Button color="bg-transparent" textColor={"text-dark1"}>
                SEE PRODUCT
              </Button>
            </div>
            <img
              src={Zx7}
              alt="ZX7 SPEAKER"
              className="lg:block md:block hidden rounded-xl h-80 w-full"
            />
            <img
              src={MobileZx7}
              alt="Mobile Zx7"
              className="lg:hidden md:hidden h-80 rounded-xl w-screen object-cover"
            />
          </div>

          {/* earphones */}
          <div className="flex md:flex-row flex-col items-center justify-center w-full gap-4 h-400px">
            <img
              src={YX1}
              alt="YX1 EARPHONES"
              className="md:w-[50%] w-full md:h-80 h-60 rounded-xl"
            />
            {/* text */}
            <div
              className="flex flex-col items-start  justify-center 
            gap-4 bg-light3 md:h-80 h-60 w-full p-10 rounded-xl "
            >
              <h2 className="text-3xl font-bold">YX1 EARPHONES</h2>

              <Button color="bg-transparent" textColor={"text-dark1"}>
                SEE PRODUCT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Audiogear */}
      <section>
        <Audiogear />
      </section>
      {/* Footer */}
      <footer></footer>
    </main>
  );
};

export default Home;
