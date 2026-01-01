import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  console.log("totalItems", totalItems);
  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/headphones", label: "HEADPHONES" },
    { href: "/speakers", label: "SPEAKERS" },
    { href: "/earpods", label: "EARPHONES" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* navbar */}
      <nav className="fixed top-0 left-0 z-20 bg-dark1/80 backdrop-blur-sm w-full ">
        <div className=" w-[90%] flex justify-between items-center lg:max-w-5xl container mx-auto text-light2 py-5 border-b border-light3">
          {/* Hamburger icon*/}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isCartOpen) {
                setIsCartOpen(false);
              }
            }}
            className="lg:hidden z-10"
          >
            <RxHamburgerMenu className="text-light1 text-3xl" />
          </button>

          {/* logo */}
          <div>
            <h1 className="text-xl font-extrabold">audiophile</h1>
          </div>

          {/* navitems */}
          <div className="hidden lg:flex justify-center items-center gap-5 text-sm">
            {navItems.map((item, index) => (
              <Link
                className="hover:text-darkbutton transition-all "
                key={index}
                to={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* shopping cart */}
          <button
            onClick={() => {
              setIsCartOpen(!isCartOpen);
              if (isMenuOpen) {
                setIsMenuOpen(false);
              }
            }}
            className="cursor-pointer relative"
          >
            <TiShoppingCart size="25" />
            <span className="bg-red-500 rounded-full py-1 px-3 font-bold text-white absolute top-4 right-2">
              {totalItems}
            </span>
          </button>
        </div>
        {isCartOpen && (
          <div
            className=" md:w-[30%] w-[90%]  max-h-[400px] px-2 py-2 bg-light3 absolute top-22
          md:right-15 lg:right-30 md:left-auto md:translate-x-0 left-1/2 -translate-x-1/2  overflow-y-auto z-30
          shadow-sm shadow-white rounded-sm"
          >
            {/* cart items */}
            <CartItems total={totalItems} />
          </div>
          // </div>
        )}

        {/* mobile menu*/}
        {/* navitems */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col justify-center items-center gap-5 text-lg font-bold py-8 bg-light2  z-30 text-dark1">
            {navItems.map((item, index) => (
              <Link
                className="hover:text-darkbutton transition-all"
                key={index}
                to={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* blur overlay */}
      {(isMenuOpen || isCartOpen) && (
        <div
          onClick={() => {
            (setIsCartOpen(false), setIsMenuOpen(false));
          }}
          className="bg-black/40 fixed inset-0 backdrop-blur-sm z-10"
        ></div>
      )}
    </>
  );
};

export default Navbar;
