import Headphones from "../assets/Home_Product_Headphones.svg";
import Speaker from "../assets/Home_Product_speaker.svg";
import Earpods from "../assets/Home_Product_earpods.svg";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="flex md:flex-row flex-col justify-around items-center lg:mx-20 md:mx-10 lg:gap-10 gap-15 md:gap-8 md:pt-18 pt-0 ">
      <ProductCard image={Headphones} productName="HEADPHONES" />
      <ProductCard image={Speaker} productName="SPEAKER" />
      <ProductCard image={Earpods} productName="EARPODS" />
    </section>
  );
};

export default Products;
