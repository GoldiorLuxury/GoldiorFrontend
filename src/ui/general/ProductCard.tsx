import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCart } from '../../Features/cart/cartSlice';
import { RiHandbagLine } from 'react-icons/ri';

function ProductCard({
  price,
  imageUrl,
  quantity,
  name,
  id,
  discountPercentage,
  brand = "Brand",
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(getCart); // This assumes getCart returns the entire cart array
  const [inCart, setInCart] = useState(false);

  // Calculate the discounted price
  const discountedPrice = (Number(price) * (1 - discountPercentage / 100)).toFixed(2);

  // Check if item is in cart
  useEffect(() => {
    const itemInCart = cart.find(item => item.id === id);
    setInCart(!!itemInCart);
  }, [cart, id]);

  // Function to add item to the cart
  function handleAddToCart() {
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice: parseFloat(discountedPrice),
      imgUrl: imageUrl,
      totalPrice: parseFloat(discountedPrice),
      discountPercentage,
    };
    dispatch(addItem(newItem));
    setInCart(true);
  }

  return (
    <div
      className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={() => navigate("/product/" + id)}
    >
      <img
        src={imageUrl || "https://via.placeholder.com/320x360"}
        alt={name}
        className="h-80 w-80 object-cover rounded-t-xl"
      />
      <div className="px-4 py-3">
        <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">${discountedPrice}</p>
          {discountPercentage > 0 && (
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">${price}</p>
            </del>
          )}
          <div className="ml-auto">
            {inCart ? (
              <span className="text-red-500">In Cart</span>
            ) : (
              <RiHandbagLine
                size={23}
                className="hover:text-[var(--theme-brown)] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation when clicking on the cart icon
                  handleAddToCart();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
