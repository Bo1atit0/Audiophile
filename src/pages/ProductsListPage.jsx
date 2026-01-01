import Audiogear from "../components/Audiogear";
import Heading from "../components/Heading";
import Items from "../components/Items";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
// import { useEffect, useState } from "react";

const ProductsListPage = () => {
  const { category } = useParams();
  const allProducts = useQuery(api.products.getProducts);
  console.log(allProducts);

  if (allProducts === undefined) {
    return (
      <div className=" text-center py-20 h-[60vh] flex items-center justify-center">
        <p className="font-bold text-3xl text-red-700">Loading...</p>
      </div>
    );
  }
  const product = allProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  if (product.length === 0) {
    window.location.href = "/";
  }

  return (
    <section>
      {/* heading */}
      <section>
        <Heading title={category.toUpperCase()} />
      </section>

      {/* products */}
      <section className="lg:py-20 md:my-20 mb-20 space-y-10">
        {product.map((item) => (
          <Items
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            reverse={item.id % 2 === 0}
            category={item.category}
            slug={item.slug}
          />
        ))}
      </section>
      <section>
        <Products />
      </section>
      <section>
        <Audiogear />
      </section>
    </section>
  );
};

export default ProductsListPage;
