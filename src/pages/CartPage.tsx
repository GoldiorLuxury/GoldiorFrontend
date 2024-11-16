import Navbar from "../ui/general/Navbar";
import Image1 from "../assets/old-fashion-black-perfume.png";
import { MdDelete } from "react-icons/md";
import IncrementDecrementBtn from "../ui/components/IncrementDecrementBtn.tsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  deleteItem,
  getCart,
  getCurrentQuantityById,
  getTotalCartPrice,
  getTotalCartQuantity,
  addItem,
  increaseQuantity,
} from "../Features/cart/cartSlice.ts";
import CartItem from "../ui/cart/CartItem.tsx";

const products = [
  { id: 1, name: "Luxurious Elixir", price: 250, quantity: 100, image: Image1 },
  {
    id: 2,
    name: "The Golden Legacy",
    price: 160,
    quantity: 250,
    image: Image1,
  },
  { id: 3, name: "Auram Aura", price: 200, quantity: 50, image: Image1 },
];

const CartPage = () => {
  // Calculate the total cost of the products
  const totalCost = useSelector(getTotalCartPrice);

  const navigate = useNavigate();

  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  console.log("cart page: ", cart);

  const handleCheckoutClick = () => {
    navigate("/personal-details"); // Adjust this path as needed for your Personal Details route
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center p-4 ml-8">
        <span className="text-[#ab572d] font-serif text-[40px] font-bold leading-[47.9px] text-left">
          YOUR CART
        </span>
      </div>
      <div className="flex justify-center w-full">
        <div className={`flex w-full flex-col lg:flex-row`}>
          {" "}
          {/* Responsive flex direction change */}
          <div className="flex flex-col items-center justify-center p-4 w-full lg:w-1/2">
            {cart.map((product) => (
              <CartItem product={product} />
            ))}
          </div>
          <div className="flex items-center justify-center bg-white-200 w-full md:w-1/2">
            <div className="border-l-indigo-50 p-6 rounded-lg shadow-md max-w-md m-auto">
              {" "}
              {/* Changed max-w-sm to max-w-md for a wider box */}
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <ul>
                {cart.map((product) => (
                  <li key={product.id} className="flex justify-between py-1 ">
                    <span className="flex-1 text-left pr-40">
                      {product.name}
                    </span>{" "}
                    {/* Added padding to the right */}
                    <span>
                      {" "}
                      $
                      {Math.round(
                        product?.totalPrice *
                          (1 - product?.discountPercentage / 100)
                      )}
                    </span>
                  </li>
                ))}
                <li className="border-t pt-3 mt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    ${Math.round(totalCost)}
                  </span>
                </li>
              </ul>
              <button
                onClick={handleCheckoutClick}
                className="mt-4 w-full bg-[#ab572d] hover:bg-[#db6e37] text-white font-semibold py-2 px-4 rounded transition-colors duration-200 ease-in-out flex justify-center items-center"
              >
                Go to Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
