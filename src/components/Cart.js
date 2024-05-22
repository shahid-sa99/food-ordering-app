import { useDispatch, useSelector } from "react-redux";
import RestuarantItemList from "./RestuarantItemList";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <div className="text-2xl font-bold "> Cart </div>
      <div className="w-6/12 m-auto">
        <button
          onClick={clearCartHandler}
          className="m-2 p-2 rounded-lg text-white bg-black "
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && <h1>Cart is empty, Please add elements to cart.</h1>}
        <RestuarantItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
