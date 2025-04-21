import { MdDelete } from "react-icons/md";
import QuantityAdjuster from "./QuantityAdjuster";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../Features/cart/cartSlice";

export default function CartItem({ product }: { product: any }) {
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className="border-2 rounded-xl p-4 mb-4 w-full max-w-[600px]"
    >
      <div className="flex items-start gap-3 flex-wrap xs:flex-nowrap">
        {/* Product Image */}
        <div className="bg-gray-200 rounded-xl p-2 flex-shrink-0">
          <img
            src={product?.imgUrl}
            alt={product?.name}
            className="h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 object-cover rounded-lg mix-blend-multiply"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm xs:text-sm font-semibold text-slate-700 truncate">
              {product?.name}
            </p>
            <button
              onClick={() => dispatch(deleteItem(product.id))}
              className="bg-red-100 w-7 h-7 xs:w-8 xs:h-8 rounded-md flex justify-center items-center hover:bg-red-200"
            >
              <MdDelete size={16} className="text-red-400" />
            </button>
          </div>

          <p className="text-xs xs:text-sm text-slate-600 mt-1">
            Quantity: {product?.quantity}ML
          </p>

          {/* Price and Quantity */}
          <div className="flex flex-col xs:flex-col justify-between items-center gap-2 mt-4">
            <button className="p-2 border-2 border-green-500 rounded-md w-full xs:w-auto">
              <span className="text-green-500 text-sm xs:text-base">
                Rs.{Math.round(product?.unitPrice)}
              </span>
            </button>

            <div className="w-full xs:w-auto">
              <QuantityAdjuster id={product?.id} />
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
