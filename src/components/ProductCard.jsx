import HeadPhonesShadow from "../assets/Home_Product_Oval.svg";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ image, productName }) => {
  return (
    <div className="bg-light3 rounded-xl w-[80%] md:w-[280px] h-[180px] flex flex-col items-center justify-end py-8 mb-[10%] relative">
      <img className="w-[40%] absolute bottom-[65%]" src={image} alt="" />
      <img className=" w-[70%]" src={HeadPhonesShadow} alt="" />
      <h2 className="font-bold">{productName}</h2>
      <Link className="flex justify-center items-center gap-0.5 hover:text-darkbutton transition-all">
        <p className="text-sm">SHOP</p>
        <FaAngleRight className="text-darkbutton" />
      </Link>
    </div>
  );
};

export default ProductCard;
