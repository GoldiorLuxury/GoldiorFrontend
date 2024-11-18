import { useNavigate } from "react-router-dom";
import "./productcard.css";

function ProductCard({
  price,
  imageUrl,
  quantity,
  name,
  id,
  discountPercentage,
}: {
  price?: string;
  quantity?: string;
  imageUrl?: string;
  name?: string;
  id: string;
  discountPercentage: number;
}) {
  const navigate = useNavigate();

  return (
    // <button
    //   onClick={() => navigate("/product/" + id)}
    //   className="bg-gray-200 rounded-lg p-4 shadow-md h-full w-30 flex flex-col items-center px-14 product-card"
    // >
    //   <div className="overflow-hidden rounded-lg mb-4">
    //     <img
    //       src={imageUrl}
    //       alt={name}
    //       className="w-full h-full object-contain product-image"
    //     />
    //   </div>

    //   <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>

    //   <div className="flex justify-between w-full text-lg font-semibold mb-2">
    //     <span>
    //       Price: ${Math.round(Number(price) * (1 - discountPercentage / 100))}
    //     </span>

    //     <span>Quantity: {quantity}</span>
    //   </div>
    // </button>

    <button
      onClick={() => navigate("/product/" + id)}
      className="bg-white p-6 rounded-md shadow-md hover:shadow-xl hover:scale-105 duration-300 ease-in-out w-full sm:w-80 md:w-96 lg:w-[440px] max-w-full flex flex-col items-center relative product-card group"
    >
      <div className="overflow-hidden rounded-md mb-4 w-full h-64 sm:h-72 md:h-80 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-auto h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      <h2 className="text-2xl font-semibold text-center mb-2 text-gray-700">
        {name}
      </h2>

      <div className="flex justify-between w-full text-lg font-medium text-gray-700 mb-3 px-4">
        <span>
          $
          {Math.round(Number(price) * (1 - discountPercentage / 100)).toFixed(
            2
          )}
        </span>
        <span className="text-gray-600">Qty: {quantity}</span>
      </div>

      {discountPercentage > 0 && (
        <div className="absolute top-4 right-4 px-2 py-1 bg-red-500 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-90">
          {discountPercentage}% OFF
        </div>
      )}
    </button>
  );
}

export default ProductCard;
