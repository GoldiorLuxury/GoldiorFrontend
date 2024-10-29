import { useNavigate } from "react-router-dom";

function ProductCard({
    price,
    imageUrl,
    quantity,
    name,
  }: {
    price?: string;
    quantity?: string;
    imageUrl?: string;
    name?: string;
  }) {


    const navigate = useNavigate();

    return (
      <button onClick={() => navigate("/product/60606060")} className="bg-gray-200 rounded-lg p-4 shadow-md h-[500px] w-30 flex flex-col items-center px-14">
        <div className="overflow-hidden rounded-lg mb-4">
          <img src={imageUrl} alt={name} className="w-full h-full object-contain" />
        </div>
  
        <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>
  
        <div className="flex justify-between w-full text-lg font-semibold mb-2">
          <span>Price: {price}</span>
          <span>Quantity: {quantity}</span>
        </div>
      </button>
    );
  }
  
  export default ProductCard;