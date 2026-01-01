import NumberInput from "./NumberInput";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const Detail = () => {
  // const markII = useQuery(api.products.getProductsbyName, {
  //   name: "XX99 MARK II HEADPHONES",
  // });
  if (markII === undefined) {
    return (
      <div className=" text-center py-20 h-[60vh] flex items-center justify-center">
        <p className="font-bold text-3xl text-red-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-20 ">
      <div className="w-[25%] bg-light3 p-10 rounded-lg flex items-center justify-center">
        <img src={markII.image} alt="XX99MARKII" className="w-[80%]" />
      </div>

      <div className="w-[30%] flex flex-col gap-2 items-start justify-center">
        <h1>NEW PRODUCT</h1>
        <h2>{markII.name}</h2>
        <p>{markII.description}</p>

        <h3>{markII.price}</h3>
        <div>
          <NumberInput />
        </div>
      </div>
    </div>
  );
};

export default Detail;
