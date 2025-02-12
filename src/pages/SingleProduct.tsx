/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../ui/general/Navbar.tsx";
// import perfume from '../assets/old-fashion-perfume-black-gold.png';
import { useState, useEffect } from "react";
import QuantityAdjuster from "../ui/cart/QuantityAdjuster.tsx";
import RoundButton from "../ui/general/RoundButton.tsx";
import { FcLike } from "react-icons/fc";
import { PiHeart, PiShootingStarThin } from "react-icons/pi";
import Notes from "../Types/Notes.ts";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiSolidStar } from "react-icons/bi";
import Reviews from "../ui/single-item/Reviews.tsx";
import { useParams } from "react-router-dom";
import useGetProductById from "../data/products/useGetProductById.ts";
import Spinner from "../ui/general/Spinner.tsx";
import useGetReviewForProduct from "../data/reviews/useGetReviewForProduct.ts";
import { handleSaveToLocalStorage } from "../data/wishlist/useSetFavItems.ts";

import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  // decreaseQuantity,
  getCart,
  // increaseQuantity
} from "../Features/cart/cartSlice.ts";
import { getWishlist } from "../data/wishlist/getWishlist.ts";
import { handleRemoveFromLocalStorage } from "../data/wishlist/useRemoveFavItem.ts";
// import { useWatch } from "react-hook-form";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  imgUrl: string;
}


export default function SingleProduct() {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [perfumeCapacities, setPerfumeCapacities] = useState<any[]>([]);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(
    perfumeCapacities[0]?.quantity || 50
  );
  const { productId } = useParams();

  const [isOpenReviewModal, setIsOpenReviewModal] = useState(false);

  const { product, isGettingProduct } = useGetProductById(productId);
  const {
    reviews,
    isGettingReviews,
    refetch: refetchReviews,
  } = useGetReviewForProduct(productId);

  useEffect(() => {
    if (isOpenReviewModal == false) {
      refetchReviews();
    }
  }, [isOpenReviewModal, refetchReviews]);

  useEffect(() => {
    if (product && product.capacityInML) {
      setPerfumeCapacities(product.capacityInML); // Set the perfumeCapacities when product data is available
      setSelectedQuantity(product.product.capacityInML[0]?.quantity || 0); // Initialize selectedQuantity with the first item
    }
    console.log(
      "produicts: ",
      product,
      "selected: ",
      product?.product?.capacityInML[0].quantity
    );
  }, [product, productId]);

  const totalRating = reviews?.reduce(
    (sum: number, review: any) => sum + review?.rating,
    0
  );
  const averageRating = Number((totalRating / reviews?.length).toFixed(1));
  console.log("reviews: ", reviews);

  return (
    <>
      {isGettingProduct || isGettingReviews || !product ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <ProductInfo
            isOpenReviewModal={isOpenReviewModal}
            setIsOpenReviewModal={setIsOpenReviewModal}
            averageRating={averageRating}
            reviews={reviews}
            product={product?.product}
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
          />
        </>
      )}
    </>
  );
}

function ProductInfo({
  isOpenReviewModal,
  setIsOpenReviewModal,
  averageRating,
  reviews,
  product,
  selectedQuantity = 50,
  setSelectedQuantity,
}: {
  isOpenReviewModal: boolean;
  setIsOpenReviewModal: any;
  averageRating: number;
  reviews: any;
  product: any;
  selectedQuantity: number;
  setSelectedQuantity: any;
}) {
  const [size, setSize] = useState("sm");
  const [selectedCapacity, setSelectedCapacity] = useState(null);
  const [actualPrice, setActualPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const cart = useSelector(getCart);
  const favorites = getWishlist();

  console.log(selectedCapacity);

  const [productExistsInWishList, setProductExistsInWishList] = useState(
    favorites.some((item: any) => item._id === product?._id)
  );

  const currentItemId = product?._id;

  const [inCart, setInCart] = useState(false);
  console.log(inCart)

  useEffect(() => {
    setProductExistsInWishList(
      favorites.some((item: any) => item._id === product?._id)
    );
  }, [product]);

  useEffect(() => {
    const x = product?.capacityInML?.find(
      (capacity: any) => capacity.quantity === selectedQuantity
    );

    setSelectedCapacity(x);
    setActualPrice(x?.price);
    setSalePrice(
      x?.price - (x?.price * (product?.discountPercentage || 0)) / 100
    );
  }, [selectedQuantity, product?.capacityInML, product?.discountPercentage]);

  useEffect(() => {
    const itemInCart = cart.some((item: CartItem) => item.id === currentItemId);
    setInCart(itemInCart);
  }, [cart, currentItemId]);
  const dispatch = useDispatch();

  function handleAddToCart(id: string, name: string, price: number) {
    const newItem = {
      price: null,
      id,
      name,
      quantity: 1,
      unitPrice: price,
      imgUrl: product?.imgUrl,
      totalPrice: price * 1,
      discountPercentage: product?.discountPercentage,
    };
    dispatch(addItem(newItem));
    setInCart(true);
  }

  const checkScreenWidth = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setSize("xl"); // Extra large screens (≥ 1280px)
    } else if (width >= 1024) {
      setSize("large"); // Large screens (≥ 1024px)
    } else if (width >= 768) {
      setSize("medium"); // Medium screens (≥ 768px)
    } else {
      setSize("small"); // Small screens (below 768px)
    }
  };
  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const handleToggleWishlist = () => {
    if (productExistsInWishList) {
      handleRemoveFromLocalStorage(product?._id);
      setProductExistsInWishList(false);
    } else {
      handleSaveToLocalStorage(product);
      setProductExistsInWishList(true);
    }
  };

  return (
    <div>
      <div
        className="w-full px-4 sm:px-8 md:px-[2rem] lg:px-[3rem] xl:px-32 lg:gap-10 gap-10 items-start flex sm:flex-col xs:flex-col md:flex-row lg:flex-row xl:flex-row sm:gap-5 xl:gap-10 pt-[10rem]"
      >
        {/* Perfume Image */}
        <div className="w-fit h-auto rounded-3xl bg-gray-200 p-8 sm:p-6 border-[1.5px]">
          <div className="flex justify-between items-center mb-4">
            {/* "New in" Badge */}
            <div className="bg-white p-2 rounded-full flex items-center">
              <PiShootingStarThin className="text-slate-600" />
              <span className="text-xs text-slate-600 ml-1">New in</span>
            </div>
            {/* Wishlist Toggle */}
            <div className="bg-white p-2 rounded-full ml-auto cursor-pointer">
              {!productExistsInWishList ? (
                <PiHeart
                  className="text-2xl text-stone-500"
                  onClick={handleToggleWishlist}
                />
              ) : (
                <FcLike
                  className="text-2xl"
                  onClick={handleToggleWishlist}
                />
              )}
            </div>
          </div>
          <img
            src={product?.imgUrl}
            alt="Perfume"
            className="h-auto w-fit max-w-[250px] max-h-[350px] sm:max-w-[350px] sm:max-h-[350px] md:max-w-[250px] md:max-h-[400px] lg:max-w-[350px] lg:max-h-[300px] xl:max-w-[350px] xl:max-h-[400px] object-cover mx-auto mix-blend-multiply"
          />
        </div>

        {/* Perfume Info */}
        <div className="flex flex-col h-full w-full sm:w-[65%] p-3 xs:p-0 gap-4 mt-3">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <span className="xl:text-2xl sm:text-xl md:text-base lg:text-lg font-semibold text-gray-800">
              {product?.name}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:gap-0 xl:gap-6 xs:gap-0 sm:gap-0 md:gap-0 ">
            <button
              className="xs:px-2 xs:py-1 sm:px-1 sm:py-1 xl:py-1 xl:px-3 border-2 border-green-500 rounded-md"
            >
              <span className="text-green-500 xl:text-base sm:text-xs xs:text-xs md:text-xs lg:text-base">
                ${Math.round(salePrice)}
                {product?.discountPercentage > 0 && (
                  <span className="xl:text-base text-gray-500 line-through ml-2 xs:text-xs sm:text-xs md:text-xs lg:text-sm">
                    ${actualPrice}
                  </span>
                )}
              </span>
            </button>

            <TfiLayoutLineSolid className="rotate-90 text-2xl sm:text-3xl text-slate-300" />

            <div className="flex items-center cursor-pointer">
              <BiSolidStar className="xl:text-2xl sm:text-lg text-amber-400" />
              <span className="xl:text-base ml-1 sm:text-xs text-slate-500 xs:text-xs lg:text-base">
                {averageRating
                  ? `${averageRating}`
                  : "Be the first one to review!"}
              </span>
            </div>

            <TfiLayoutLineSolid className="rotate-90 text-2xl sm:text-3xl text-slate-300" />

            <div className="bg-gray-200 px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center">
              <PiShootingStarThin className="text-slate-600 xl:text-base xs:text-xs sm:text-xs" />
              <span className="xl:text-base text-slate-600 ml-1 xs:text-xs sm:text-xs lg:text-base">New in</span>
            </div>
          </div>

          <p className="text-[0.95rem] text-slate-500 capitalize">{product?.description}</p>
          <div>
            <div className="text-base text-slate-900 font-semibold">Select Size</div>
            <div className="flex flex-wrap gap-3">
              {product?.capacityInML?.map((item: any) => (
                <SizePics
                  key={item}
                  capacity={item}
                  selectedQuantity={selectedQuantity}
                  setSelectedQuantity={setSelectedQuantity}
                  imgUrl={product?.imgUrl}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap space-x-2 mt-5 w-full xs:text-sm xl:text-base">
            <QuantityAdjuster id={product?._id} />
            <RoundButton
              onClick={() =>
                handleAddToCart(product?._id, product?.name, salePrice)
              }
              text="Add to cart"
              size={size}
            />
          </div>
        </div>
      </div>

      {/* product info  */}
      <div className="w-full px-4 sm:px-12 md:px-16 lg:px-24 xl:px-32 mt-12 flex flex-col gap-6">
        {/* Title Section */}
        <p className="mt-1 text-[2.5rem] font-medium text-center font-serif text-slate-700 leading-[4.25rem]">Product Detail</p>
        {/* Description Section */}
        <div className="py-1">
          <ul className="list-disc space-y-4 text-slate-500 text-sm sm:text-base leading-relaxed">
            {product?.description2
              .split(".")
              .filter(Boolean)
              ?.map((sentence: string, index: number) => (
                <li key={index}>{sentence.trim()}.</li>
              ))}
          </ul>
        </div>
      </div>

      <div className="w-full px-2 sm:px-16 md:px-20 lg:px-28 gap-10 flex-col mt-7">
        {/* <h2
          style={{ fontFamily: "Playfair" }}
          className="text-xl text-gray-900 font-semibold text-center"
        >
          {product?.description2heading}
        </h2>
        <div className="w-full flex items-center justify-center my-2">
          <p className="w-[60vw] h-[0.15rem] bg-gray-400"></p>
        </div>
        <p style={{ fontFamily: "Playfair" }} className="mt-2 text-center ">
          {product?.description2}
        </p> */}
      </div>
      {/* key notes  */}
      <KeyNotes notes={product?.keynotes} />
      {/* reviews  */}
      <Reviews
        averageRating={averageRating}
        reviews={reviews}
        isOpenReviewModal={isOpenReviewModal}
        setIsOpenReviewModal={setIsOpenReviewModal}
      />
    </div>
  );
}


function KeyNotes({ notes }: { notes: Notes[] }) {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-8 flex flex-col gap-8">
      {/* Title Section */}
      <p className="mt-1 text-[2rem] sm:text-[2.5rem] text-center font-medium font-serif text-slate-700 leading-[3rem] sm:leading-[4rem]">
        Key Notes
      </p>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 gap-8">
        {notes?.map((item: Notes, index) => (
          <div key={index} className="flex flex-col items-center border-solid">
            <img
              className="rounded-full object-cover h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72"
              src={item?.image}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}



function SizePics({ capacity, selectedQuantity, setSelectedQuantity, imgUrl }: {
  capacity: any,
  selectedQuantity: number,
  setSelectedQuantity: any,
  imgUrl: string
}) {
  return (
    <button onClick={() => setSelectedQuantity(capacity?.quantity)}
      className={`mt-4 flex w-24 p-4 flex-col items-center justify-center rounded-lg  ${selectedQuantity === capacity?.quantity && 'bg-gray-200 border border-gray-300'}`}>
      <img
        src={imgUrl}
        alt="Perfume"
        className="mix-blend-multiply h-auto w-full max-w-[60px] max-h-[90px] sm:max-w-[50px] sm:max-h-[70px] md:max-w-[45px] md:max-h-[45px] lg:max-w-[70px] lg:max-h-[90px] xl:max-w-[80px] xl:max-h-[100px] object-cover mx-auto mt-[-10%]"
      />
      <span className="text-sm">{capacity?.quantity} ml</span>
    </button>

  )
}