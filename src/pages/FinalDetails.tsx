import React, { useState } from 'react';
import './FinalDetails.css'; // Make sure the path is correct

const FinalDetails = () => {
    const [isGift, setIsGift] = useState(false);
    const customer = {
        name: "Samantha Akkeni",
        address: "A-1209, Cardinal, Hiranandani Estate, Thane, 400607",
        date: "10/10/2024"
    };

    const products = [
        { name: 'Luxurious Elixir', price: 250 },
        { name: 'The golden legacy', price: 150 },
        { name: 'Auram aura', price: 200 },
        { name: 'Delivery fees', price: 30 }
    ];

    const total = products.reduce((acc, product) => acc + product.price, 0);

    return (
        <div className="order-summary">
            <h2 className="summary-title">ORDER SUMMARY</h2>
            <div className="order-header">
                <div className="customer-details">
                    Ordered by: {customer.name}<br />
                    {customer.address}
                </div>
                <div className="date">
                    Date: {customer.date}
                </div>
            </div>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <span>{product.name}</span>
                        <span>${product.price}</span>
                    </div>
                ))}
                <div className="total">
                    <span>Total</span>
                    <span>${total}</span>
                </div>
            </div>
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="gift"
                    checked={isGift}
                    onChange={() => setIsGift(!isGift)}
                    className="checkbox"
                />
                <label htmlFor="gift">Make it a gift</label>
            </div>
            <button className="button">
                Proceed to Payment
            </button>
        </div>
    );
}

export default FinalDetails;
