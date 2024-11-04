import React, { useState } from "react";
import "./IncrementDecrementBtn.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const IncrementDecrementBtn = ({ minValue = 0, maxValue = 100 }) => {
    const [count, setCount] = useState(minValue);
    // Function to handle incrementing the counter
    const handleIncrementCounter = () => {
        if (count < maxValue) {
            setCount((prevState) => prevState + 1);
        }
    };
    // Function to handle decrementing the counter
    const handleDecrementCounter = () => {
        if (count > minValue) {
            setCount((prevState) => prevState - 1);
        }
    };
    return (
        <div className="btn-group">
            <button className="increment-btn" onClick={handleIncrementCounter}>
                <FaPlus /> {/* Replaced with FaPlus icon */}
            </button>

            <p>{count}</p>

            <button className="decrement-btn" onClick={handleDecrementCounter}>
                <FaMinus /> {/* Replaced with FaMinus icon */}
            </button>
        </div>
    );

};
export default IncrementDecrementBtn;