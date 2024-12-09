import Navbar from "../ui/general/Navbar";
// import Image1 from "../assets/old-fashion-black-perfume.png";
import { useNavigate, NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import {
  getCart,
  getTotalCartPrice,
} from "../Features/cart/cartSlice.ts";
import CartItem from "../ui/cart/CartItem.tsx";
import wishimg from "../assets/8.jpg" // Assume you have an empty cart image

const CartPage = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalCost = useSelector(getTotalCartPrice);
  console.log("Cart data in component:", cart);
  console.log("Total cost in component:", totalCost);
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
        {cart.length > 0 ? (
          <div className={`flex w-full flex-col lg:flex-row`}>
            <div className="flex flex-col items-center justify-center p-4 w-full lg:w-1/2">
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <div className="flex items-center justify-center bg-transparent w-full md:w-1/2">
              <div className="border-l p-6 rounded-lg shadow-md max-w-md m-auto">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <ul>
                  {cart.map((product) => (
                    <li key={product.id} className="flex justify-between py-1">
                      <span className="flex-1 text-left pr-40">
                        {product.name}
                      </span>
                      <span>
                        ${product.totalPrice ? product.totalPrice.toFixed(2) : '0.00'}
                      </span>
                    </li>
                  ))}
                  <li className="border-t pt-3 mt-3 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      ${totalCost ? totalCost.toFixed(2) : '0.00'}
                    </span>
                  </li>
                </ul>
                <button
                  onClick={handleCheckoutClick}
                  className="mt-4 w-full bg-[#ab572d] hover:bg-[#db6e37] text-white font-semibold py-2 px-4 rounded transition-colors duration-200 ease-in-out"
                >
                  Go to Checkout →
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <img
              src={wishimg} // Use a relevant empty cart image
              alt="Empty Cart"
              className="w-100 h-1/2"
            />
            <p className="text-5xl text-black font-extrabold font-[Inria-Serif]">Your Cart is Empty!</p>
            <NavLink to="/shop" className="mt-10 bg-[var(--theme-brown)] text-white text-xl font-medium px-8 py-3 rounded-lg hover:bg-[var(--buttonHover)]">
              Shop Now
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
