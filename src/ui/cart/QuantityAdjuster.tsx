import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  getCurrentQuantityById,
} from "../../Features/cart/cartSlice";


export default function QuantityAdjuster({ id }: { id: string }) {
  const dispatch = useDispatch();

  // Pass the `id` to the selector to retrieve the quantity
  const quantity = useSelector((state: { cart: any }) =>
    getCurrentQuantityById(id)(state)
  );

  function onClickMinus() {
    if (quantity <= 1) {
      dispatch(deleteItem(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  }

  function onClickPlus() {
    if (quantity < 10) {
      dispatch(increaseQuantity(id));
    } else {
      alert("You cannot add more than 10 items of this product.");
    }
  }

  return (
    <div
      style={{ fontFamily: "Playfair" }}
      className="text-xl flex justify-center items-center gap-8"
    >
      {/* Minus button */}
      <button onClick={onClickMinus}>
        <span className="text-2xl md:text-3xl text-gray-800">
          <FaMinus />
        </span>
      </button>

      {/* Display the current quantity */}
      <span className="text-xl md:text-2xl font-semibold text-gray-800">
        {quantity}
      </span>

      {/* Plus button */}
      <button onClick={onClickPlus}>
        <span className="text-xl md:text-2xl font-semibold text-gray-800">
          <FaPlus />
        </span>
      </button>
    </div>
  );
}
