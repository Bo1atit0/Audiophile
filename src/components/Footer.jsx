import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Button from "./Button";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import ProductsData from "../data/ProductsData";

const Footer = () => {
  //Delete after populating DB
  const addProducts = useMutation(api.products.addProducts);

  const handlePopulateDB = async () => {
    try {
      await addProducts({ products: ProductsData });
      alert("Products table populated successfully.");
    } catch (error) {
      alert("Error populating products table");
      console.error("Error:", error);
    }
  };

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/headphones", label: "HEADPHONES" },
    { href: "/speakers", label: "SPEAKERS" },
    { href: "/earpods", label: "EARPHONES" },
  ];

  const socialLinks = [
    { href: "#", icon: <FaFacebookSquare /> },
    { href: "#", icon: <FaTwitter /> },
    { href: "#", icon: <FaInstagram /> },
  ];
  return (
    <footer className="bg-dark1 ">
      <button onClick={handlePopulateDB} className="bg-red-500 py-2 px-8">
        DB
      </button>

      <section className="lg:flex justify-around hidden mx-auto  py-15 text-light3 px-10">
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
        <div className="flex flex-col items-center justify-between">
          <div className="flex gap-10 h-8 items-center">
            {navItems.map((item, index) => (
              <div key={index} className="flex  text-xs">
                <Link
                  to={item.href}
                  className="hover:text-darkbutton transition-colors text-light3"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((items, index) => (
              <Link
                key={index}
                to={items.href}
                className="text-2xl hover:text-darkbutton transition-colors duration-500"
              >
                {items.icon}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tablet footer */}
      <section className="lg:hidden md:flex flex-col md:items-start items-center text-center justify-center md:gap-10  mx-auto py-10 text-light3 px-10 ">
        <div className="mb-10">
          <h1 className="text-2xl font-extrabold text-white">audiophile</h1>
        </div>

        {/* links */}
        <div className="flex flex-col md:flex-row md:gap-5 gap-8 mb-10 md:mb-5">
          {navItems.map((item, index) => (
            <div key={index} className="">
              <Link
                to={item.href}
                className="hover:text-darkbutton transition-colors duration-500"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        {/* text */}
        <div className="mb-15 text-center md:text-start">
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
            {socialLinks.map((items, index) => (
              <Link
                key={index}
                to={items.href}
                className="text-2xl hover:text-darkbutton transition-colors duration-500"
              >
                {items.icon}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
