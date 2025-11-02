import Button from "../components/Button";
import Hero from "../components/Hero ";
import Products from "../components/Products";
import Zx9 from "../assets/ZX9 SPEAKER.svg";
import Zx7 from "../assets/ZX7_SPEAKER.svg";
import YX1 from "../assets/YX1_Earphones.svg";
import Audiogear from "../components/Audiogear";

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
      <section className="w-full">
        <div className="max-w-5xl container mx-auto flex flex-col items-center justify-center gap-5 w-full">
          {/* speaker 1*/}
          <div className="flex justify-around bg-darkbutton items-center md:px-15 md:pt-10 overflow-hidden w-full rounded-xl     ">
            <div className="">
              <img src={Zx9} alt="ZX9 SPEAKER" className="-mb-4 " />
            </div>
            {/* text */}
            <div className="text-light2 space-y-4 w-[45%] ">
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
            <div className="absolute top-[30%] left-[10%] flex flex-col items-center justify-center gap-4">
              {/* text */}
              <div className="">
                <h2 className="text-3xl font-bold">ZX7 SPEAKER</h2>
              </div>
              <Button color="bg-transparent" textColor={"text-dark1"}>
                SEE PRODUCT
              </Button>
            </div>
            <img src={Zx7} alt="ZX7 SPEAKER" className="rounded-xl" />
          </div>

          {/* earphones */}
          <div className="flex items-center w-full gap-4 ">
            <img src={YX1} alt="YX1 EARPHONES" className="w-[45%] rounded-xl" />
            {/* text */}
            <div className="flex flex-col items-center justify-center gap-4 bg-light3 h-[40vh] w-[50%] rounded-xl">
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
