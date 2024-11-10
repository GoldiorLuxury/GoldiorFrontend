import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const IncrementDecrementBtn = ({ minValue = 0, maxValue = 100 }) => {
  const [count, setCount] = useState(minValue);

  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className="flex items-center bg-white border-2 border-[#ab572d] rounded-lg overflow-hidden transition-all duration-300 hover:border hover:border-[#ab572d]">
      <button
        className="w-6 h-6 flex items-center justify-center text-[#4097fe] bg-white cursor-pointer transition-all duration-300 hover:bg-[#f3f9ff]"
        onClick={handleIncrementCounter}
      >
        <FaPlus />
      </button>
      <p className="w-5 text-center font-serif border-x border-[#f5f8fb]">
        {count}
      </p>
      <button
        className="w-6 h-6 flex items-center justify-center text-[#4097fe] bg-white cursor-pointer transition-all duration-300 hover:bg-[#f3f9ff]"
        onClick={handleDecrementCounter}
      >
        <FaMinus />
      </button>
    </div>
  );
};

export default IncrementDecrementBtn;
