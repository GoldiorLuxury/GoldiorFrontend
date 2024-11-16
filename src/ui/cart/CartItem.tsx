import { MdDelete } from "react-icons/md";
import QuantityAdjuster from "./QuantityAdjuster";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../Features/cart/cartSlice";

export default function CartItem({product}: {product: any}){
    const dispatch = useDispatch();
    return(
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 mb-4 w-full">
                                <div className="flex flex-row items-start">
                                    <img src={product?.image} alt={product?.name} className="h-24 w-24 md:h-40 md:w-40 flex-none bg-cover rounded-t lg:rounded-t-none " />
                                    <div className="flex flex-col ml-20 flex-grow">
                                        <div className="text-left">
                                            <p className="text-xl font-semibold whitespace-nowrap">{product?.name}</p>
                                            <p className="text-sm whitespace-nowrap">Quantity: {product?.quantity}ml</p>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xl font-bold mt-14">${product?.totalPrice}</p>
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-col items-center">
                                        <button onClick={() => dispatch(deleteItem(product.id))}><MdDelete size={25} color="var(--theme-brown)" /></button>
                                        <div className="mt-16">
                                            <QuantityAdjuster id={product?.id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}