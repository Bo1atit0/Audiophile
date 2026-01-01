import { useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import AddToCart from "../components/AddToCart";

const ProductsDetailsPage = () => {
  const category = useParams();

  const productDetails = useQuery(api.products.getProductsbyCategory, {
    category: category.category,
  });

  const singleProduct = productDetails?.find(
    (item) => item.slug === category.slug
  );

  if (singleProduct === undefined) {
    return (
      <div className=" text-center py-20 h-[60vh] flex items-center justify-center">
        <p className="font-bold text-3xl text-red-700">Loading...</p>
      </div>
    );
  }
  return (
    <section className="flex items-center justify-center gap-20 py-20">
      <div className="w-[25%] bg-light3 p-10 rounded-lg flex items-center justify-center">
        <img
          src={singleProduct.image}
          alt={singleProduct.name}
          className="w-[80%]"
        />
      </div>

      <div className="w-[30%] flex flex-col gap-2 items-start justify-center">
        <h1>NEW PRODUCT</h1>
        <h2>{singleProduct.name}</h2>
        <p>{singleProduct.description}</p>

        <h3>{singleProduct.price}</h3>
        <div>
          <AddToCart product={singleProduct} />
        </div>
      </div>
    </section>
  );
};

export default ProductsDetailsPage;
