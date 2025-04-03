import { useState, useEffect } from "react";
import Navbar from "../ui/general/Navbar";
import Footer from "../ui/general/Footer";
import EarlyAccessForm from "../ui/components/EarlyAccessForm"; // Import the form component
import Almerah from "../assets/Almerah.jpg";
import highinlove from "../assets/high in love.jpg";
import aaldaynight from "../assets/all day night.jpg";
import high from "../assets/awal.jpg";
import awal from "../assets/high.jpg";
import love from "../assets/love.jpg";
import gift from "../assets/gift .jpg";

const products = [
    { name: "Purple Chiffon", description: "Dynamic Citrus blends with fresh spices and Saffron.", imgUrl: Almerah },
    { name: "God Father", description: "Citrus Aromatic fragrance.", imgUrl: highinlove },
    { name: "Filthy Rich", description: "Woody Aromatic fragrance.", imgUrl: aaldaynight },
    { name: "Ruby", description: "Floral fragrance for women.", imgUrl: high },
    { name: "Legendary", description: "Woody and Spicy fragrance.", imgUrl: Almerah },
    { name: "Exotic", description: "A Floral Fruity fragrance for women.", imgUrl: awal },
    { name: "Bitcoin", description: "A fragrance for both women and men.", imgUrl: love },
    { name: "Musk Ice", description: "A Woody Floral Musk fragrance.", imgUrl: gift },
];

export default function ComingSoon() {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="px-8 xs:px-4 sm:px-8 lg:px-12 xl:px-32 py-16 pt-[8rem]">
                <p className="text-[2.5rem] my-4 font-medium text-center font-serif text-slate-700">
                    Coming Soon
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="relative bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all"
                            onClick={() => setSelectedProduct(product.name)}
                        >
                            <img
                                src={product.imgUrl}
                                alt={product.name}
                                className="w-full h-64 object-cover rounded-lg blur-md"
                            />
                            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                                Coming Soon
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-lg font-semibold">{product.name}</p>
                                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProduct && (
                <EarlyAccessForm productName={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
            <Footer />
        </div>
    );
}

