/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart } from "../../Features/cart/cartSlice";

function ProductCard({
  price,
  imageUrl,
  // quantity,
  name,
  id,
  discountPercentage,
  brand = "Brand",
}: {
  price: any;
  imageUrl: any;
  quantity: any;
  name: any;
  id: any;
  discountPercentage: any;
  brand?: any;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(getCart); // This assumes getCart returns the entire cart array
  const [inCart, setInCart] = useState(false);

  // Calculate the discounted price
  const discountedPrice = (Number(price) * (1 - discountPercentage / 100)).toFixed(2);
  console.log(brand)

  // Check if item is in cart
  useEffect(() => {
    const itemInCart = cart.find((item) => item.id === id);
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
    // @ts-expect-error: The types of `favourites` and `setFavourites` are not compatible.
    dispatch(addItem(newItem));
    setInCart(true);
  }

  return (
    <div className="w-full sm:w-[17rem] md:w-[13rem] lg:w-[18rem] xl:w-[80%] bg-white rounded-3xl duration-500 cursor-pointer border mb-8" onClick={() => navigate("/product/" + id)}>
      <div className="h-auto w-full max-w-full rounded-xl p-4 pt-8 mx-auto">
        <img
          src={imageUrl || "https://via.placeholder.com/320x360"}
          alt={name}
          className="h-auto w-full sm:w-80 md:w-96 lg:w-[80%] xl:w-[80%] lg:mx-auto object-cover rounded-xl mix-blend-multiply"
        />
      </div>

      <div className="px-4 py-3">
        <p className="text-base xs:text-lg sm:text-base md:text-base  xl:text-xl font-bold text-slate-700 truncate block capitalize">{name}</p>
        <p className="mt-1 text-xs sm:text-[0.8rem] md:text-xs lg:text-[0.85rem] xl:text-base xl:w-[70%]  font-medium text-slate-500 w-[70%] sm:w-full">A bold blend of blackcurrant and musk for irresistible allure.</p>
        <div className="flex items-center justify-between mt-6">
          {inCart ? (
            <div className="bg-[#34d399] text-xs sm:text-xs md:text-xs md:px-3 md:py-1 lg:text-sm lg:px-4 lg:py-1 xl:text-base xl:px-5 xl:py-2 text-white px-5 py-2 rounded-lg w-fit duration-500">
              Go to Cart
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              className="bg-[var(--theme-brown)] text-xs sm:text-xs md:text-xs md:px-3 md:py-1 lg:text-sm lg:px-4 lg:py-1 xl:text-base xl:px-5 xl:py-2 text-white px-5 py-2 rounded-lg w-fit hover:bg-[var(--buttonHover)] duration-500"
            >
              Add to Cart
            </button>
          )}
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-xs md:text-xs lg:text-base xl:text-lg font-semibold text-slate-700 cursor-auto my-3">${discountedPrice}</p>
            {discountPercentage > 0 && (
              <del>
                <p className="text-xs sm:text-xs md:text-xs lg:text-base text-gray-600 cursor-auto ml-2">${price}</p>
              </del>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
