import Navbar from "../ui/general/Navbar.tsx";
import perfume from '../assets/old-fashion-perfume-black-gold.png';
import StarRating from "../ui/general/StarRating.tsx";
import {useState, useEffect} from "react";
import QuantityAdjuster from "../ui/cart/QuantityAdjuster.tsx";
import RoundButton from "../ui/general/RoundButton.tsx";
import {FaRegHeart} from "react-icons/fa";
import Notes from "../Types/Notes.ts";
import Reviews from "../ui/single-item/Reviews.tsx";

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
    const notes: Notes[] = [
        {
            name: "Top Note",
            ingredients: ["name 1", "name 2"],
            imgUrl: "https://imgs.search.brave.com/4ljGV4iWStrnzzeyKueF75WO56v218j_BbY818NiHko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzM2NDg5L3Bob3Rv/L2NpdHJ1cy1mcmVz/aC1mcnVpdHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNx/SzFLdkQ0SlRfbDZX/bVYwX2REUUpuQ1pH/NDRkRXpqZlM0M1Yt/V3JCSjQ9"
        },
        {
            name: "Top Note",
            ingredients: ["name 1", "name 2"],
            imgUrl: "https://imgs.search.brave.com/4ljGV4iWStrnzzeyKueF75WO56v218j_BbY818NiHko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzM2NDg5L3Bob3Rv/L2NpdHJ1cy1mcmVz/aC1mcnVpdHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNx/SzFLdkQ0SlRfbDZX/bVYwX2REUUpuQ1pH/NDRkRXpqZlM0M1Yt/V3JCSjQ9"
        },
        {
            name: "Top Note",
            ingredients: ["name 1", "name 2"],
            imgUrl: "https://imgs.search.brave.com/4ljGV4iWStrnzzeyKueF75WO56v218j_BbY818NiHko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzM2NDg5L3Bob3Rv/L2NpdHJ1cy1mcmVz/aC1mcnVpdHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNx/SzFLdkQ0SlRfbDZX/bVYwX2REUUpuQ1pH/NDRkRXpqZlM0M1Yt/V3JCSjQ9"
        }
        ]

        const reviews = [
            {
              username: "john_doe",
              rating: 4.5,
              name: "Pancake Delight",
              createdAt: "2024-10-16T08:30:00.000Z",
              imgUrl: "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
              userimg: "https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png",
              text: "These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness.These pancakes were fluffy and delicious! Just the right amount of sweetness."
            },
            {
              username: "jane_smith",
              rating: 3.8,
              name: "Fresh Garden Salad",
              createdAt: "2024-10-15T10:45:00.000Z",
              imgUrl: "https://tse4.mm.bing.net/th?id=OIP.8fq3jak1X1JCueBuZ5Y45AHaEK&pid=Api&P=0&h=180",
              userimg: "https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png",
              text: "The salad was fresh, but the dressing was too tangy for my liking."
            },
            {
              username: "alice_wonder",
              rating: 4.9,
              name: "Chocolate Lava Cake",
              createdAt: "2024-10-14T17:20:00.000Z",
              userimg: "https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png",
              text: "Absolutely divine! The molten chocolate inside was perfection."
            },
            {
              username: "mike_tiger",
              rating: 2.5,
              name: "Spicy Tacos",
              createdAt: "2024-10-13T14:05:00.000Z",
              imgUrl: "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
              userimg: "https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png",
              text: "The tacos were too spicy for me, and the tortillas were a bit soggy."
            },
            {
              username: "lucas_k",
              rating: 3.0,
              name: "Classic Margherita Pizza",
              createdAt: "2024-10-12T20:15:00.000Z",
              userimg: "https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png",
              text: "Best pizza I’ve ever had! The crust was perfect, and the cheese was just right."
            },
            {
                username: "lucas_k",
                rating: 1.0,
                name: "Classic Margherita Pizza",
                createdAt: "2024-10-12T20:15:00.000Z",
                userimg: "https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png",
                text: "Best pizza I’ve ever had! The crust was perfect, and the cheese was just right."
              }
          ];
          
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
        <div>
        <div
            className={'h-[95vh] sm:h-[55vh] md:h-[55vh] lg:h-[60vh] w-full px-0 sm:px-16 md:px-20 lg:px-28 justify-center items-center flex sm:flex-row flex-col'}>
            {/*perfume image*/}
            <div className={'img-containerh-[55%] sm:h-full w-full sm:w-[35%] flex  justify-end'}>
                <img
                    src={perfume}
                    alt="Perfume"
                    className="h-auto w-full max-w-[300px] max-h-[450px] sm:max-w-[250px] sm:max-h-[350px] md:max-w-[300px] md:max-h-[400px] lg:max-w-[350px] lg:max-h-[450px] xl:max-w-[400px] xl:max-h-[500px] object-cover mx-auto mt-[-10%]"
                />

            </div>
            {/*perfume info*/}
            <div className={' h-full w-full sm:w-[65%] p-3 space-y-3 '}>
                <div className={'flex items-center gap-5'}>
                    <span style={{fontFamily: 'Playfair'}} className={'text-4xl font-semibold text-gray-800'}>Luxurious elixir</span>
                    <button><FaRegHeart size={25} color="var(--theme-brown)" /></button>
                </div>
                <div className="flex gap-2 items-center">
                    <StarRating rating={3.4} size="normal" fillColor="var(--rating-yellow)"/> <span style={{fontFamily: 'Playfair'}} className={'text-lg'}>{3.4}/5</span>
                </div>
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

                
            </div>
        </div>
        {/* product info  */}
        <div className="w-full px-2 sm:px-16 md:px-20 lg:px-28 gap-10 flex-col mt-14 md:mt-8">
        <h2 style={{fontFamily: 'Playfair'}} className="text-xl text-gray-900 font-semibold text-center">Product Detail</h2>
        <div className="w-full flex items-center justify-center my-2"><p className="w-[60vw] h-[0.15rem] bg-gray-400"></p></div>
            <p style={{fontFamily: 'Playfair'}} className="mt-2 ">
            Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences and imbued with the allure of precious golden hues. From the first spritz to the lingering dry-down, Luxurious Elixir promises an intoxicating experience that embodies the essence of lavish indulgence.
            </p>
        </div>
        <div className="w-full px-2 sm:px-16 md:px-20 lg:px-28 gap-10 flex-col mt-7">
        <h2 style={{fontFamily: 'Playfair'}} className="text-xl text-gray-900 font-semibold text-center">The Golden Overture</h2>
        <div className="w-full flex items-center justify-center my-2"><p className="w-[60vw] h-[0.15rem] bg-gray-400"></p></div>
            <p style={{fontFamily: 'Playfair'}} className="mt-2 ">
            Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an enchanting symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences and imbued with the allure of precious golden hues. From the first spritz to the lingering dry-down, Luxurious Elixir promises an intoxicating experience that embodies the essence of lavish indulgence.
            </p>
        </div>

        {/* key notes  */}
            <KeyNotes notes={notes} />
            {/* reviews  */}
            <Reviews reviews={reviews} />
        </div>
        
    )
}



function KeyNotes({notes}: {notes: Notes[]}){
    return(
        <div className="w-full px-2 sm:px-16 md:px-20 lg:px-28 gap-10 flex-col mt-0 md:mt-8">
            <h2 style={{fontFamily: 'Playfair'}} className="text-xl text-gray-900 font-semibold text-center">Key Notes</h2>
            <div className="w-full flex items-center justify-center my-2"><p className="w-[60vw] h-[0.15rem] bg-gray-400"></p></div>
            <div className="flex items-center justify-evenly">
            {
                notes.map((item: Notes) => {
                    return <div className=" w-[25%] md:w-[33%]" >
                        <div className="flex flex-col justify-center items-center border-solid">
                            <p style={{fontFamily: 'Playfair'}} className="text-center font-semibold text-base md:text-lg">{item.name}</p>
                            <p style={{fontFamily: 'Playfair'}} className="text-center text-base md:text-lg">{item.ingredients.join(', ')}</p>
                            <img className="rounded-full h-28 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44" src={item.imgUrl} alt="image" />
                        </div>
                    </div>
                })
            }
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