import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);
  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart({ productId: product._id, quantity: value }));
  };
  return (
    <div>
      <div className=" bg-gray-100 w-fit flex items-center">
        <button
          onClick={handleDecrement}
          className="px-3 py-2 text-lg font-bold bg-gray-200 cursor-pointer"
        >
          <p className="hover:text-darkbutton transition-colors duration-500">
            -
          </p>
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="no-arrows py-2 w-12 outline-none text-center text-lg font-medium bg-gray-200"
        />
        <button
          onClick={handleIncrement}
          className="px-3 py-2 text-lg font-bold bg-gray-200 cursor-pointer"
        >
          <p className="hover:text-darkbutton transition-colors duration-500">
            +
          </p>
        </button>
      </div>

      <Button
        color={"bg-darkbutton"}
        textColor={"text-light2"}
        hoverColor={"hover:bg-lightbutton"}
        onClick={handleAddToCart}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default AddToCart;
