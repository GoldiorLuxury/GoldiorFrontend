import React, { useState } from "react";
import Navbar from "../ui/general/Navbar";

const FinalDetails = () => {
  const [isGift, setIsGift] = useState(false);
  const customer = {
    name: "Samantha Akkeni",
    address: "A-1209, Cardinal, Hiranandani Estate, Thane, 400607",
    date: "10/10/2024",
  };

  const products = [
    { name: "Luxurious Elixir", price: 250 },
    { name: "The golden legacy", price: 150 },
    { name: "Auram aura", price: 200 },
    { name: "Delivery fees", price: 30 },
  ];

  const total = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto my-5 p-5 bg-white shadow-md rounded-lg font-serif">
        <h2 className="text-center text-5xl font-medium mb-5">ORDER SUMMARY</h2>
        <div className="flex justify-between mb-5">
          <div className="text-lg font-medium">
            Ordered by: {customer.name}
            <br />
            {customer.address}
          </div>
          <div className="text-lg font-medium">Date: {customer.date}</div>
        </div>
        <div className="border-t border-b border-gray-300 py-5">
          {products.map((product, index) => (
            <div key={index} className="flex justify-between text-lg py-2">
              <span>{product.name}</span>
              <span>${product.price}</span>
            </div>
          ))}
          <div className="flex justify-between text-lg font-bold py-2">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="gift"
            checked={isGift}
            onChange={() => setIsGift(!isGift)}
            className="mr-2"
          />
          <label htmlFor="gift" className="text-lg">
            Make it a gift
          </label>
        </div>
        <button className="w-full mt-5 py-3 text-lg font-semibold text-white bg-[#da6110] rounded-full">
          Proceed to Payment
        </button>
      </div>
    </>
  );
};

export default FinalDetails;
