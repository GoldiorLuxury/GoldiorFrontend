import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteItem, getCurrentQuantityById, increaseQuantity } from "../../Features/cart/cartSlice";
// import { useState } from "react";

export default function QuantityAdjuster({
  id
}: {
  id: string;
}) {
    // const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const quantity: number = useSelector(getCurrentQuantityById(id))

    function onClickMinus(){
        if (quantity <= 1) {
            dispatch(deleteItem(id));
            // setInCart(false);
        }
        dispatch(decreaseQuantity(id))
        // setQuantity(quantity => quantity - 1);
        
    }
     function onClickPlus() {
       dispatch(increaseQuantity(id));
      //  setQuantity((quantity) => quantity + 1);
     }
    
  return (
    <div
      style={{ fontFamily: "Playfair" }}
      className={"text-xl flex justify-center items-center gap-8"}
    >
      <button onClick={onClickMinus}>
        <span className={"text-2xl md:text-3xl text-gray-800"}>
          <FaMinus />
        </span>
      </button>
      <span className={"text-xl md:text-2xl font-semibold text-gray-800"}>
        {quantity}
      </span>
      <button onClick={onClickPlus}>
        <span className={"text-xl md:text-2xl font-semibold text-gray-800"}>
          <FaPlus />
        </span>
      </button>
    </div>
  );
}