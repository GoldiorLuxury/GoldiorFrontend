import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../ui/general/Navbar";

const FinalDetails = () => {
  const { state } = useLocation(); // Get the passed state
  const { userDetails, cartItems } = state || {};

  // Calculate total dynamically from cart items
  const total = cartItems
    ? cartItems.reduce((acc: any, product: { totalPrice: any; }) => acc + product.totalPrice, 0)
    : 0;

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-40 my-5 p-5 bg-white shadow-md rounded-lg font-serif">
        <h2 className="text-center text-5xl font-medium mb-5">ORDER SUMMARY</h2>
        {userDetails ? (
          <>
            <div className="flex justify-between mb-5">
              <div className="text-lg font-medium">
                Ordered by: {userDetails.name}
                <br />
                {`${userDetails.addressLine1}, ${userDetails.addressLine2}, ${userDetails.city}, ${userDetails.state}, ${userDetails.pinCode}`}
              </div>
              <div className="text-lg font-medium">
                Date: {new Date().toLocaleDateString()}
              </div>
            </div>
            <div className="border-t border-b border-gray-300 py-5">
              {cartItems?.map((product: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; totalPrice: number; }, index: React.Key | null | undefined) => (
                <div key={index} className="flex justify-between text-lg py-2">
                  <span>{product.name}</span>
                  <span>${product.totalPrice.toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between text-lg font-bold py-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-xl">No order details found.</p>
        )}
        <button className="w-full mt-5 py-3 text-lg font-semibold text-white bg-[#da6110] rounded-full">
          Proceed to Payment
        </button>
      </div>
    </>
  );
};

export default FinalDetails;
