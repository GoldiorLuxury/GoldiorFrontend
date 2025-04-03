import { MdDelete } from "react-icons/md";
import QuantityAdjuster from "./QuantityAdjuster";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../Features/cart/cartSlice";

export default function CartItem({ product }: { product: any }) {
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className="border-2 rounded-xl p-4 md:p-6 lg:p-8 mb-4 xl:w-[80%]"
    >
      <div className="flex flex-col md:flex-row items-start xs:flex-row">
        {/* Product Image */}
        <div className="bg-gray-200 rounded-xl p-4 flex-shrink-0 w-full md:w-auto xs:w-fit">
          <img
            src={product?.imgUrl}
            alt={product?.name}
            className="h-24 w-24 sm:h-32 sm:w-32 xs:w-14 xs:h-14 md:h-32 md:w-32 lg:h-28 lg:w-28 object-cover rounded-lg mix-blend-multiply"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col md:ml-10 xs:ml-3 lg:ml-5 mt-4 md:mt-0 flex-grow">
          {/* Product Name and Delete Button */}
          <div className="flex justify-between items-center">
            <p className="text-base sm:text-lg xs:text-sm lg:text-xl font-semibold text-slate-700">
              {product?.name}
            </p>
            <button
              onClick={() => dispatch(deleteItem(product.id))}
              className="bg-red-100 w-[2rem] h-[2rem] rounded-md flex justify-center items-center hover:bg-red-200"
            >
              <MdDelete size={20} className="text-red-400" />
            </button>
          </div>

          {/* Product Quantity */}
          <p className="text-sm sm:text-base text-slate-700 xs:text-xs mt-1">
            Quantity: {product?.quantity}ML
          </p>

          {/* Price and Quantity Adjuster */}
          <div className="flex flex-col md:flex-row xs:flex-row xs:p-1 justify-between items-center gap-4 mt-6">
            {/* Price Button */}
            <button
              className="p-2 sm:p-3 xs:w-fit w-full md:w-full lg:w-full lg:p-1 xl:w-[60%] border-2 border-green-500 rounded-md"
            >
              <span className="text-green-500 text-sm sm:text-base lg:text-lg">
                Rs.{Math.round(product?.unitPrice)}
              </span>
            </button>

            {/* Quantity Adjuster */}
            <div className="w-full md:w-auto sm:w-fit">
              <QuantityAdjuster id={product?.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
