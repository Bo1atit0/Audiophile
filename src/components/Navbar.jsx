import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { href: "home", label: "HOME" },
    { href: "headphones", label: "HEADPHONES" },
    { href: "speakers", label: "SPEAKERS" },
    { href: "earphones", label: "EARPHONES" },
  ];

  return (
    <>
      {/* navbar */}
      <nav className="w-full bg-dark1">
        <div className="hidden lg:flex justify-between items-center max-w-5xl container mx-auto border-b border-light-3 text-light2 py-4">
          {/* logo */}
          <div>
            <h1 className="text-xl font-extrabold">audiophile</h1>
          </div>

          {/* navitems */}
          <div className="flex justify-center items-center gap-5 text-sm ">
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

          {/* shopping cart */}
          <div>
            <TiShoppingCart size="25" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
