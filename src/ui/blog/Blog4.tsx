import React from 'react';
import aboutBG from '../../assets/about-bg.png'; // Replace this with the actual path to your uploaded image
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';


const Blog1: React.FC = () => {
    return (
        <>
            < Navbar />
            <div className="min-h-screen bg-white text-black mt-24 font-sans">
                <div className="max-w-5xl mx-auto py-10 px-6 md:px-12 lg:px-24">

                    {/* Heading */}
                    <header className="text-center mb-8">
                        <p className="text-sm text-black-400 mb-3">October 26, 2024</p>
                        <h1 className="text-4xl font-semibold">
                            Discover the Different Types of Perfumes: A Guide to Finding Your Signature Scent
                        </h1>
                    </header>

                    {/* Large Image */}
                    <div className="w-full mb-10">
                        <img src={aboutBG} alt="Perfume Collection" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    {/* Content */}
                    <article className="space-y-6 text-lg leading-relaxed text-black-300">
                        <p>
                            Perfumes come in various types, each with distinct fragrance concentrations that affect their longevity and intensity. Here’s a quick guide to help you understand the main categories.
                        </p>

                        <h2 className="text-2xl font-semibold text-black">A Guide to Finding Your Signature Scent</h2>

                        <ul className="list-disc list-inside space-y-4 pl-4">
                            <li><strong>Parfum (Pure Perfume):</strong> The most concentrated form, containing 20-30% fragrance oil, offers a rich scent that can last 8-12 hours. Ideal for special occasions.</li>
                            <li><strong>Eau de Parfum (EDP):</strong> With 15-20% fragrance concentration, EDPs are strong yet wearable daily scents that linger for 4-6 hours.</li>
                            <li><strong>Eau de Toilette (EDT):</strong> Lighter than EDP, EDT has a 5-15% oil concentration, providing a subtle scent lasting 2-4 hours, perfect for everyday use.</li>
                            <li><strong>Eau de Cologne (EDC):</strong> Containing around 2-4% oil, colognes offer a refreshing, light fragrance for a brief 1-2 hours.</li>
                            <li><strong>Eau Fraîche:</strong> The least concentrated with 1-3% fragrance oil, giving a soft, airy scent for around 1 hour.</li>
                        </ul>

                        <p className="text-xl font-semibold text-black mt-8">
                            Each type offers a unique experience, so choose based on your preferences and needs. Let Goldior Luxury be your guide to discovering the perfect fragrance fit!
                        </p>
                    </article>
                </div>
            </div>
            < Footer />
        </>
    );
};

export default Blog1;
