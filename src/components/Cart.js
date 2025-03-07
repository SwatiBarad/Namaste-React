import { useDispatch, useSelector } from "react-redux";
import { WithoutBtnItemList } from "./ItemList";
import { clearCart, removeItem } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //clear cart
    dispatch(clearCart());
  };
  const handleRemoveItem = () => {
    //remove last item from list
    dispatch(removeItem());
  };
  return (
    <div className=" w-8/12 font-bold m-auto">
      <h1 className="text-center text-3xl my-6 text-green-700 ">
        CART <i className="fa-solid fa-cart-shopping text-2xl "></i>
      </h1>
      <WithoutBtnItemList items={cartItems} />
      <div className="text-center">
        {cartItems.length === 0 && (
          <h1 className="text-xl my-4 font-bold ">
            Your Cart Is Empty <br /> Please Add Some Items
          </h1>
        )}
        {cartItems.length >= 2 && (
          <h1 className="text-xl my-4 font-bold">
            Total Amout : &nbsp; ₹
            {cartItems
              .reduce((total, item) => {
                return (total += item?.card.info.price / 100);
              }, 0)
              .toFixed(2)}
          </h1>
        )}

        <button
          onClick={handleClearCart}
          className=" bg-green-600 text-white border-2 rounded-2xl w-56 text-xl h-12 cursor-pointer"
        >
          Clear Cart 🧹
        </button>
        <button
          onClick={handleRemoveItem}
          className=" bg-green-600 text-white border-2 rounded-2xl w-56 text-xl h-12 cursor-pointer"
        >
          Remove Last Item
        </button>
      </div>
    </div>
  );
};
export default Cart;
