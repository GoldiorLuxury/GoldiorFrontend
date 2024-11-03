import Navbar from '../ui/general/Navbar';
import Image1 from '../assets/old-fashion-black-perfume.png';
import { MdDelete } from "react-icons/md";
import IncrementDecrementBtn from "../ui/components/IncrementDecrementBtn.tsx";
import { useNavigate } from 'react-router-dom';


const products = [
    { id: 1, name: 'Luxurious Elixir', price: 250, quantity: 100, image: Image1 },
    { id: 2, name: 'The Golden Legacy', price: 160, quantity: 250, image: Image1 },
    { id: 3, name: 'Auram Aura', price: 200, quantity: 50, image: Image1 }
];



const CartPage = () => {
    // Calculate the total cost of the products
    const totalCost = products.reduce((acc, product) => acc + product.price, 0);

    const navigate = useNavigate();

    const handleCheckoutClick = () => {
        navigate('/personal-details'); // Adjust this path as needed for your Personal Details route
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center p-4 ml-8">
                <span className="text-[#ab572d] font-serif text-[40px] font-bold leading-[47.9px] text-left">
                    YOUR CART
                </span>
            </div>
            <div className='flex justify-center w-full'>
                <div className={`flex w-full flex-col lg:flex-row`}> {/* Responsive flex direction change */}
                    <div className="flex flex-col items-center justify-center p-4 w-full lg:w-1/2">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md p-4 mb-4 w-full">
                                <div className="flex flex-row items-start">
                                    <img src={product.image} alt={product.name} className="h-24 w-24 md:h-40 md:w-40 flex-none bg-cover rounded-t lg:rounded-t-none " />
                                    <div className="flex flex-col ml-20 flex-grow">
                                        <div className="text-left">
                                            <p className="text-xl font-semibold whitespace-nowrap">{product.name}</p>
                                            <p className="text-sm whitespace-nowrap">Quantity: {product.quantity}ml</p>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xl font-bold mt-14">${product.price}</p>
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-col items-center">
                                        <button><MdDelete size={25} color="var(--theme-brown)" /></button>
                                        <div className="mt-16">
                                            <IncrementDecrementBtn />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center bg-white-200 w-full md:w-1/2">
                        <div className="border-l-indigo-50 p-6 rounded-lg shadow-md max-w-md m-auto"> {/* Changed max-w-sm to max-w-md for a wider box */}
                            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                            <ul>
                                {products.map((product) => (
                                    <li key={product.id} className="flex justify-between py-1 ">
                                        <span className="flex-1 text-left pr-40">{product.name}</span> {/* Added padding to the right */}
                                        <span>${product.price}</span>
                                    </li>
                                ))}
                                <li className="border-t pt-3 mt-3 flex justify-between">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${totalCost}</span>
                                </li>
                            </ul>
                            <button
                                onClick={handleCheckoutClick}
                                className="mt-4 w-full bg-[#ab572d] hover:bg-[#db6e37] text-white font-semibold py-2 px-4 rounded transition-colors duration-200 ease-in-out flex justify-center items-center">
                                Go to Checkout →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
