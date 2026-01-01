import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="flex md:flex-row flex-col justify-around items-center lg:mx-20 md:mx-10 lg:gap-10 gap-15 md:gap-8 lg:pt-8 md:pt-10 pt-20 ">
      <ProductCard
        image={"assets/Home_Product_Headphones.svg"}
        productName="HEADPHONES"
        link="/headphones"
      />
      <ProductCard
        image={"assets/Home_Product_speaker.svg"}
        productName="SPEAKER"
        link="/speakers"
      />
      <ProductCard
        image={"assets/Home_Product_earpods.svg"}
        productName="EARPODS"
        link="/earpods"
      />
    </section>
  );
};

export default Products;
