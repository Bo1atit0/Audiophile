import { useDispatch, useSelector } from "react-redux";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from "../store/cartSlice";
import Button from "./Button";
import { Link } from "react-router-dom";

const CartItems = ({ total }) => {
  const dispatch = useDispatch();

  // from redux store
  const cartItems = useSelector((state) => state.cart.items);

  // fetch products from convex
  const products = useQuery(api.products.getProducts);

  // isCartEmpty
  const isCartEmpty = cartItems.length === 0;

  const cartProducts = cartItems.map((cartItem) => {
    const product = products?.find((p) => p._id === cartItem.productId);
    return { ...product, quantity: cartItem.quantity };
  });

  const totalPrice = cartProducts?.reduce((sum, item) => {
    console.log("item", item);
    return sum + item.quantity * item.price;
  }, 0);
  const formattedTotalPrice = totalPrice.toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
  });

  const handleIncrement = (productId) => {
    // dispatch action to increment quantity
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    // dispatch action to decrement quantity
    dispatch(decrementQuantity(productId));
  };

  const handleRemove = (productId) => {
    // dispatch action to remove item from cart
    dispatch(removeItemFromCart(productId));
  };

  const handleRemoveAll = () => {
    // dispatch action to clear cart
    dispatch(clearCart());
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className=" tracking-wider font-bold text-lg">CART ({total})</h2>
          <p
            className={
              isCartEmpty
                ? `text-gray-400`
                : `text-red-500 hover:text-red-700 cursor-pointer`
            }
            onClick={() => handleRemoveAll()}
          >
            Remove all
          </p>
        </div>
      </div>

      {/* cart items */}
      {isCartEmpty ? (
        <p className="px-2 font-medium text-red-700 z-20">
          Your cart is empty.
        </p>
      ) : (
        <div className=" flex flex-col px-2 py-4 ">
          {products &&
            cartProducts.map((item) => (
              // <section key={item._id}>
              <div className=" flex w-full mb-4" key={item._id}>
                {/* image */}
                <div className="w-[20%] bg-gray-200 p-4 flex items-center justify-center">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="w-full flex  items-center justify-center text-center gap-4">
                  {/* details */}
                  <div className="w-[60%] flex flex-col">
                    <h3 className=" font-bold ">{item.name}</h3>
                    <p className="font-medium text-lg">
                      {item.price.toLocaleString("en-us", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                  </div>

                  {/* quantity */}
                  <div>
                    <div className=" bg-gray-100 flex items-center ">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="px-3 py-2 text-lg font-bold bg-gray-200 cursor-pointer"
                      >
                        <p className="hover:text-darkbutton transition-colors duration-500">
                          -
                        </p>
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="no-arrows py-2 w-12 outline-none text-center text-lg font-medium bg-gray-200"
                      />
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="px-3 py-2 text-lg font-bold bg-gray-200 cursor-pointer"
                      >
                        <p className="hover:text-darkbutton transition-colors duration-500">
                          +
                        </p>
                      </button>
                    </div>
                    <p
                      className="text-red-500 hover:text-red-700 cursor-pointer text-sm"
                      onClick={() => handleRemove(item._id)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
              // </section>
            ))}
        </div>
      )}
      <div className="flex justify-between px-4 py-2 border-t border-gray-400 mt-3 mb-5">
        <h4 className="font-semibold text-gray-500">TOTAL</h4>
        <p className="font-bold text-lg">{formattedTotalPrice}</p>
      </div>

      {isCartEmpty ? (
        ""
      ) : (
        <div className="flex items-center justify-center w-full">
          <Link to="/checkoutPage">
            <Button
              children="CHECKOUT"
              color={"bg-darkbutton"}
              textColor={"text-light2"}
              hoverColor={"hover:bg-lightbutton"}
              size="lg"
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default CartItems;
