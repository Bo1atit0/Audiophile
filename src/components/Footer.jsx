import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark1">
      <section className=" mx-auto flex items-center justify-around py-15 text-light3 px-10">
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
    </footer>
  );
};

export default Footer;
