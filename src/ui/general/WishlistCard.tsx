import { RxCross2 } from "react-icons/rx";
import perfume from "../../assets/landing-page-perfume.png";
import { handleRemoveFromLocalStorage } from "../../data/wishlist/useRemoveFavItem";

function WishlistCard({
  id,
  favorites,
  setFavourites,
  price,
  discountPercentage,
  imageUrl,
  quantity,
  name,
}: {
  id: string;
  favorites: any;
  setFavourites: any,
  price?: string;
  discountPercentage: string,
  quantity?: string;
  imageUrl?: string;
  name?: string;
}) {
  const handleRemove = () => {
    handleRemoveFromLocalStorage(id); 
    const favs = favorites?.filter((item: any) => id !== item._id)
    setFavourites(favs);
  };
  
  return (
    <div className="relative flex items-center p-2 bg-white border-y-2 border-gray-200">
      {/* Close Icon */}
      <RxCross2
        size={18}
        className="absolute top-2 right-2 cursor-pointer text-gray-600"
        onClick={()=> handleRemove()}
      />

      {/* Product Image */}
      <div className="w-1/4 p-2">
        <img
          src={imageUrl}
          alt="Unable to load image"
          className="w-full h-[120px] object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 px-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        {/* <p className="text-gray-600 text-sm">Quantity: {quantity}</p> */}
        <button className="bg-[#A0522D] text-white px-4 py-2 mt-2 rounded-md text-sm">
          Add to cart
        </button>
      </div>

      {/* Price */}
      {/* <div className="flex flex-col items-end justify-between h-full">
        <span className="text-lg font-semibold text-gray-800">${Math.round(
                  Number(price) *
                  (1 - Number(discountPercentage) / 100)
                )}</span>
      </div> */}
    </div>
  );
}

export default WishlistCard;
