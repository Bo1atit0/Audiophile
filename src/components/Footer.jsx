import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark1">
      <section className="lg:flex hidden mx-auto items-center justify-around py-15 text-light3 px-10">
        {/* text */}
        <div className="flex flex-col gap-10 w-[40%]">
          <h1 className="text-xl font-extrabold text-white">audiophile</h1>
          <p className="text-xs ">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <p className="text-xs">Copyright 2025. All Rights Reserved</p>
        </div>

        {/* links */}
        <div className="flex flex-col gap-30">
          <div className="flex gap-10 text-xs">
            <Link className="hover:text-darkbutton transition-colors">
              HOME
            </Link>
            <Link className="hover:text-darkbutton transition-colors">
              HEADPHONES
            </Link>
            <Link className="hover:text-darkbutton transition-colors">
              SPEAKER
            </Link>
            <Link className="hover:text-darkbutton transition-colors">
              EARPHONES
            </Link>
          </div>
          <div className="flex mb-3 justify-end gap-6">
            <Link className="text-xl hover:text-darkbutton transition-colors">
              <FaFacebookSquare />
            </Link>
            <Link className="text-xl hover:text-darkbutton transition-colors">
              <FaTwitter />
            </Link>
            <Link className="text-xl hover:text-darkbutton transition-colors">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>

      {/* Tablet footer */}
      <section className="lg:hidden md:flex flex-col md:items-start items-center text-center justify-center md:gap-10  mx-auto py-10 text-light3 px-10 ">
        <div className="mb-10">
          <h1 className="text-2xl font-extrabold text-white">audiophile</h1>
        </div>

        {/* links */}

        <div className="flex flex-col  md:flex-row gap-10 text-lg mb-10">
          <Link className="hover:text-darkbutton transition-colors duration-500">
            HOME
          </Link>
          <Link className="hover:text-darkbutton transition-colors duration-500">
            HEADPHONES
          </Link>
          <Link className="hover:text-darkbutton transition-colors duration-500">
            SPEAKER
          </Link>
          <Link className="hover:text-darkbutton transition-colors duration-500">
            EARPHONES
          </Link>
        </div>

        {/* text */}
        <div className="mb-15">
          <p className=" ">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
        </div>

        <div className="flex md:flex-row flex-col md:justify-between items-center justify-center md:gap-0 gap-8 w-full">
          {/* copyright */}
          <div className="copyright">
            <p className="">Copyright 2025. All Rights Reserved</p>
          </div>

          {/* Links */}

          <div className="flex gap-4">
            <Link className="text-2xl hover:text-darkbutton transition-colors duration-500">
              <FaFacebookSquare />
            </Link>
            <Link className="text-2xl hover:text-darkbutton transition-colors duration-500">
              <FaTwitter />
            </Link>
            <Link className="text-2xl hover:text-darkbutton transition-colors duration-500">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
