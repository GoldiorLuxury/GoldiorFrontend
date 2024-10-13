import Navbar from "../ui/general/Navbar.tsx";
import perfume from '../assets/old-fashion-perfume-black-gold.png';
import StarRating from "../ui/general/StarRating.tsx";
import {useState, useEffect} from "react";
import QuantityAdjuster from "../ui/cart/QuantityAdjuster.tsx";
import RoundButton from "../ui/general/RoundButton.tsx";
import {FaRegHeart} from "react-icons/fa";

export default function Home(){
    const perfumeCapacities = [50, 100, 150];
    const [selectedQuantity, setSelectedQuantity] = useState<number>(perfumeCapacities[0]);
    return (
        <>
            <Navbar />
            <ProductInfo selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} perfumeCapacities={perfumeCapacities} />
        </>
    )
}

function ProductInfo({selectedQuantity, setSelectedQuantity, perfumeCapacities}: {selectedQuantity: number, setSelectedQuantity: any, perfumeCapacities: number[]}) {
    const [size, setSize] = useState('sm'); // Default to small

    // Function to check screen width and set button size
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
        checkScreenWidth(); // Check when component mounts
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <div
            className={'h-[150vh] sm:h-[55vh] md:h-[55vh] lg:h-[60vh] bg-red-300 w-full px-0 sm:px-16 md:px-20 lg:px-28 justify-center items-center flex sm:flex-row flex-col'}>
            {/*perfume image*/}
            <div className={'img-container bg-blue-200 h-[55%] sm:h-full w-full sm:w-[35%] flex  justify-end'}>
                <img
                    src={perfume}
                    alt="Perfume"
                    className="h-auto w-full max-w-[300px] max-h-[450px] sm:max-w-[250px] sm:max-h-[350px] md:max-w-[300px] md:max-h-[400px] lg:max-w-[350px] lg:max-h-[450px] xl:max-w-[400px] xl:max-h-[500px] object-cover mx-auto mt-[-10%]"
                />

            </div>
            {/*perfume info*/}
            <div className={'bg-green-200 h-full w-full sm:w-[65%] p-3 space-y-3 '}>
                <div className={'flex items-center gap-5'}>
                    <span style={{fontFamily: 'Playfair'}} className={'text-4xl font-semibold text-gray-800'}>Luxurious elixir</span>
                    <button><FaRegHeart size={25} color="var(--theme-brown)" /></button>
                </div>
                <StarRating rating={3.4}/>
                <span style={{fontFamily: 'Playfair'}}
                      className={'price font-semibold text-3xl text-gray-800'}>$260</span>
                <p style={{fontFamily: 'Playfair'}} className={'description text-gray-800'}>Step into a world of
                    unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an enchanting
                    symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the
                    finest essences and imbued with the allure of precious golden hues.</p>

                {/*perfume sizes */}
                <div>
                    <span style={{fontFamily: 'Playfair'}} className={'text-gray-800 font-semibold'}>Choose size:</span>
                    <div className={'flex items-center justify-start'}>
                        {perfumeCapacities.map(item => <SizePics capacity={item} selectedQuantity={selectedQuantity}
                                                                 setSelectedQuantity={setSelectedQuantity}/>)}
                    </div>
                </div>
                {/*actions*/}
                <div className={'flex flex-row items-center justify-start gap-6 md:gap-20 px-6'}>
                    <QuantityAdjuster />
                    <RoundButton text="Add to cart" size={size} />
                </div>

                {/*key notes*/}

                <div>
                    
                </div>
            </div>
        </div>
    )
}

function SizePics({capacity, selectedQuantity, setSelectedQuantity}: {
    capacity: number,
    selectedQuantity: number,
    setSelectedQuantity: any
}) {
    return (
        <button onClick={() => setSelectedQuantity(capacity)}
                className={`flex w-24 flex-col items-center justify-center rounded-sm  ${selectedQuantity === capacity && 'bg-gray-300'}`}>
            <img
                src={perfume}
                alt="Perfume"
                className="h-auto w-full max-w-[60px] max-h-[90px] sm:max-w-[50px] sm:max-h-[70px] md:max-w-[60px] md:max-h-[80px] lg:max-w-[70px] lg:max-h-[90px] xl:max-w-[80px] xl:max-h-[100px] object-cover mx-auto mt-[-10%]"
            />
            <span style={{fontFamily: 'Playfair'}}>{capacity} ml</span>
        </button>

    )
}