import Navbar from "../ui/general/Navbar.tsx";
import perfume from '../assets/old-fashion-perfume-black-gold.png';
import StarRating from "../ui/general/StarRating.tsx";
import {useState, useEffect} from "react";
import QuantityAdjuster from "../ui/cart/QuantityAdjuster.tsx";
import RoundButton from "../ui/general/RoundButton.tsx";
import {FaRegHeart} from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Notes from "../Types/Notes.ts";
import Reviews from "../ui/single-item/Reviews.tsx";
import { useParams } from "react-router-dom";
import useGetProductById from "../data/products/useGetProductById.ts";
import Spinner from "../ui/general/Spinner.tsx";
import useGetReviewForProduct from "../data/reviews/useGetReviewForProduct.ts";
import { handleSaveToLocalStorage } from "../data/wishlist/useSetFavItems.ts";

import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseQuantity,
  getCart,
  increaseQuantity
} from "../Features/cart/cartSlice.ts";
import { getWishlist } from "../data/wishlist/getWishlist.ts";

  interface CartItem {
    id: string;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    imgUrl: string;
  }


export default function SingleProduct(){
    const perfumeCapacities = [50, 100, 150];
    const {productId} = useParams();

    const {product, isGettingProduct} = useGetProductById(productId);
    const {reviews, isGettingReviews} = useGetReviewForProduct(productId);       

    const totalRating = reviews?.reduce(
      (sum: number, review: any) => sum + review?.rating,
      0
    );
    const averageRating = Number((totalRating / reviews?.length).toFixed(1));
    console.log("reviews: ", reviews)

    const [selectedQuantity, setSelectedQuantity] = useState<number>(perfumeCapacities[0]);
    return (
        <>
{isGettingProduct || isGettingReviews || !product ? <Spinner /> :             
        (<><Navbar />
            <ProductInfo averageRating={averageRating} reviews={reviews} product={product?.product} selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity}  />
            </>
        )}
        </>
    )
}

function ProductInfo({averageRating, reviews, product, selectedQuantity, setSelectedQuantity}: {averageRating: number,reviews: any, product: any, selectedQuantity: number, setSelectedQuantity: any}) {
    const [size, setSize] = useState('sm');
    const cart = useSelector(getCart);

    const currentItemId = product?._id; 

    const [inCart, setInCart] = useState(false);

    const favorites = getWishlist();
    const productExists = favorites.some(item => item._id === product?._id);

    useEffect(() => {
      const itemInCart = cart.some(
        (item: CartItem) => item.id === currentItemId
      );
      setInCart(itemInCart);
    }, [cart, currentItemId]);
      const dispatch = useDispatch();

        function handleAddToCart(id: string, name: string, price: number) {
          const newItem = {
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
            setSize('xl'); // Extra large screens (≥ 1280px)
        } else if (width >= 1024) {
            setSize('large'); // Large screens (≥ 1024px)
        } else if (width >= 768) {
            setSize('medium'); // Medium screens (≥ 768px)
        } else {
            setSize('small'); // Small screens (below 768px)
        }
    };
    useEffect(() => {
        checkScreenWidth(); 
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
      <div>
        <div
          className={
            "h-[95vh] sm:h-[55vh] md:h-[55vh] mt-32 lg:h-[60vh] w-full px-0 sm:px-16 md:px-20 lg:px-28 justify-center items-center flex sm:flex-row flex-col"
          }
        >
          {/*perfume image*/}
          <div
            className={
              "img-containerh-[55%] sm:h-full w-full sm:w-[35%] flex  justify-end"
            }
          >
            <img
              src={product?.imgUrl}
              alt="Perfume"
              className="h-auto w-full max-w-[300px] max-h-[450px] sm:max-w-[250px] sm:max-h-[350px] md:max-w-[300px] md:max-h-[400px] lg:max-w-[350px] lg:max-h-[450px] xl:max-w-[400px] xl:max-h-[500px] object-cover mx-auto mt-[-10%]"
            />
          </div>
          {/*perfume info*/}
          <div className={" h-full w-full sm:w-[65%] p-3 space-y-3 "}>
            <div className={"flex items-center gap-5"}>
              <span
                style={{ fontFamily: "Playfair" }}
                className={"text-4xl font-semibold text-gray-800"}
              >
                {product?.name}
              </span>
              <button onClick={()=> handleSaveToLocalStorage(product)}>
                {!productExists?<FaRegHeart size={25} color="var(--theme-brown)" /> : <FaHeart size={25} color="var(--theme-brown)" /> }
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <StarRating
                rating={averageRating}
                size="normal"
                fillColor="var(--rating-yellow)"
              />{" "}
              <span style={{ fontFamily: "Playfair" }} className={"text-lg"}>
                {averageRating}/5
              </span>
            </div>
            <span
              style={{ fontFamily: "Playfair" }}
              className={"price font-semibold text-3xl text-gray-800"}
            >
              $
              {Math.round(
                product?.price -
                  (product?.price * product?.discountPercentage) / 100
              )}
            </span>
            {product?.discountPercentage > 0 && (
              <span
                style={{ fontFamily: "Playfair" }}
                className={"text-sm text-gray-500 line-through ml-2"}
              >
                ${product?.price}
              </span>
            )}
            <p
              style={{ fontFamily: "Playfair" }}
              className={"description text-gray-800"}
            >
              Step into a world of unparalleled opulence with Luxurious Elixir,
              an exquisite fragrance that weaves an enchanting symphony of gold
              and luxury. This gilded elixir is a celebration of sophistication,
              crafted with the finest essences and imbued with the allure of
              precious golden hues.
            </p>

            {/*perfume sizes */}
            <div>
              <span
                style={{ fontFamily: "Playfair" }}
                className={"text-gray-800 font-semibold"}
              >
                Choose size:
              </span>
              <div className={"flex items-center justify-start"}>
                {product?.capacityInML?.map((item: any) => (
                  <SizePics
                    capacity={item}
                    selectedQuantity={selectedQuantity}
                    setSelectedQuantity={setSelectedQuantity}
                    imgUrl={product?.imgUrl}
                  />
                ))}
              </div>
            </div>
            {/*actions*/}
            <div
              className={
                "flex flex-row items-center justify-start gap-6 md:gap-20 px-6"
              }
            >
              {inCart && <QuantityAdjuster  id={product?._id} />}
              {!inCart && <RoundButton onClick={() => handleAddToCart(product?._id, product?.name, product?.price)} text="Add to cart" size={size} />}
            </div>
          </div>
        </div>
        {/* product info  */}
        <div className="w-full px-2 sm:px-16 md:px-20 lg:px-28 gap-10 flex-col mt-14 md:mt-8">
          <h2
            style={{ fontFamily: "Playfair" }}
            className="text-xl text-gray-900 font-semibold text-center"
          >
            Product Detail
          </h2>
          <div className="w-full flex items-center justify-center my-2">
            <p className="w-[60vw] h-[0.15rem] bg-gray-400"></p>
          </div>
          <p style={{ fontFamily: "Playfair" }} className="mt-2 text-center">
            {product?.description}
          </p>
        </div>
        <div className="w-full px-2 sm:px-16 md:px-20 lg:px-28 gap-10 flex-col mt-7">
          <h2
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
          </p>
        </div>

        {/* key notes  */}
        <KeyNotes notes={product?.keynotes} />
        {/* reviews  */}
        <Reviews averageRating={averageRating} reviews={reviews} />
      </div>
    );
}



function KeyNotes({notes}: {notes: Notes[]}){
    return(
        <div className="w-full px-2 sm:px-16 md:px-20 lg:px-28 gap-10 flex-col mt-0 md:mt-8">
            <h2 style={{fontFamily: 'Playfair'}} className="text-xl text-gray-900 font-semibold text-center">Key Notes</h2>
            <div className="w-full flex items-center justify-center my-2"><p className="w-[60vw] h-[0.15rem] bg-gray-400"></p></div>
            <div className="flex items-center justify-evenly">
            {
                notes?.map((item: Notes) => {
                    return <div className=" w-[25%] md:w-[33%]" >
                        <div className="flex flex-col justify-center items-center border-solid">
                            <p style={{fontFamily: 'Playfair'}} className="text-center font-semibold text-base md:text-lg">{item?.name}</p>
                            {/* <p style={{fontFamily: 'Playfair'}} className="text-center text-base md:text-lg">{item.ingredients.join(', ')}</p> */}
                            <img className="rounded-full  object-cover h-28 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44" src={item?.image} alt="image" />
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}

function SizePics({capacity, selectedQuantity, setSelectedQuantity, imgUrl}: {
    capacity: number,
    selectedQuantity: number,
    setSelectedQuantity: any,
    imgUrl: string
}) {
    return (
        <button onClick={() => setSelectedQuantity(capacity)}
                className={`flex w-24 p-4 flex-col items-center justify-center rounded-sm  ${selectedQuantity === capacity && 'bg-gray-300'}`}>
            <img
                src={imgUrl}
                alt="Perfume"
                className="h-auto w-full max-w-[60px] max-h-[90px] sm:max-w-[50px] sm:max-h-[70px] md:max-w-[60px] md:max-h-[80px] lg:max-w-[70px] lg:max-h-[90px] xl:max-w-[80px] xl:max-h-[100px] object-cover mx-auto mt-[-10%]"
            />
            <span style={{fontFamily: 'Playfair'}}>{capacity} ml</span>
        </button>

    )
}