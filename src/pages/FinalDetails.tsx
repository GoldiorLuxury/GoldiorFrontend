import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../ui/general/Navbar";

const FinalDetails = () => {
  const { state } = useLocation(); // Get the passed state
  const { userDetails, cartItems } = state || {};
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const total = cartItems
    ? cartItems.reduce((acc: any, product: { totalPrice: any }) => acc + product.totalPrice, 0)
    : 0;

  const handleProceed = () => {
    setShowModal(true);
  };

  const handleExplore = () => {
    setShowModal(false);
    navigate("/Our-Luxury-Collection");
  };

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
              {cartItems?.map(
                (
                  product: { name: React.ReactNode; totalPrice: number },
                  index: React.Key
                ) => (
                  <div key={index} className="flex justify-between text-lg py-2">
                    <span>{product.name}</span>
                    <span>Rs.{product.totalPrice.toFixed(2)}</span>
                  </div>
                )
              )}
              <div className="flex justify-between text-lg font-bold py-2">
                <span>Total</span>
                <span>Rs.{total.toFixed(2)}</span>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-xl">No order details found.</p>
        )}
        <button
          onClick={handleProceed}
          className="w-full mt-5 py-3 text-lg font-semibold text-white bg-[#da6110] rounded-full"
        >
          Proceed to Payment
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg p-8 max-w-md w-full shadow-lg text-center">

            {/* Close Button (X Icon) */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            <h3 className="text-2xl font-semibold mb-4">We're Sorry!</h3>
            <p className="mb-4 text-gray-700">
              We can't process your order at the moment. Please reach out to us at{" "}
              <strong>+91 8818-8818-25</strong> for help.
            </p>
            <button
              onClick={handleExplore}
              className="mt-4 px-6 py-2 bg-[#da6110] text-white rounded-full font-medium hover:bg-orange-600 transition"
            >
              Explore More Products
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default FinalDetails;
