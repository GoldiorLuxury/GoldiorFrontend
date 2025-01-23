import React from 'react';
import aboutBG from '../../assets/about-bg.png'; // Replace this with the actual path to your uploaded image
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';


const Blog2: React.FC = () => {
    return (
        <>
            < Navbar />
            <div className="min-h-screen bg-transparent text-black mt-24 font-sans">
                <div className="max-w-5xl mx-auto py-10 px-6 md:px-12 lg:px-24">

                    {/* Heading */}
                    <header className="text-center mb-8">
                        <p className="text-base text-black-400 mb-3 text-slate-600 font-semibold">October 12, 2024</p>
                        <h1 className="text-3xl font-semibold text-slate-700">
                            Choosing the Perfect Fragrance for Every Season: A Guide by Goldior Luxury
                        </h1>
                    </header>

                    {/* Large Image */}
                    <div className="w-full mb-10 border-2 rounded-3xl p-4">
                        <img src={aboutBG} alt="Perfume Collection" className="w-full h-auto rounded-3xl shadow-lg" />
                    </div>

                    {/* Content */}
                    <article className="space-y-6 text-xl leading-relaxed text-justify text-slate-600">
                        <p>
                            Finding the ideal fragrance for each season can elevate your style and mood. At Goldior Luxury, we believe that the right scent should complement
                            the weather, enhancing your aura. Here’s a quick guide to selecting perfumes that harmonize with each season:
                        </p>

                        <h2 className="text-2xl font-semibold text-slate-700">A Guide by Goldior Luxury</h2>

                        <ul className="list-disc list-inside space-y-4 pl-4">
                            <li><strong>Spring: Floral & Fresh:</strong> Embrace light, floral scents with notes of jasmine, rose, or lily. These delicate fragrances add a refreshing touch as nature blooms around you.</li>
                            <li><strong>Summer: Citrusy & Aquatic:</strong> Stay cool with zesty, citrus-infused perfumes that feature lemon, bergamot, and oceanic notes. These vibrant scents are refreshing and perfect for hot, sunny days.</li>
                            <li><strong>Autumn: Warm & Spicy:</strong> Cozy up with warm, spicy fragrances like cinnamon, amber, or sandalwood. These richer tones evoke the comforting ambiance of autumn.</li>
                            <li><strong>Winter: Bold & Musky:</strong> For colder months, choose deeper, muskier fragrances with hints of vanilla, oud, or patchouli. These intense scents add warmth and elegance to your winter attire.</li>
                        </ul>
                        <p className="text-xl font-semibold text-slate-700 mt-8">
                            Enhance your seasonal style with Goldior Luxury's range of fragrances crafted to suit every climate!
                        </p>
                    </article>
                </div>
            </div>
            < Footer />
        </>
    );
};

export default Blog2;
