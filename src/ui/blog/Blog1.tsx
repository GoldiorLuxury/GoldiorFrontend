import { useEffect } from 'react';
import aboutBG from '../../assets/about-bg.png'; // Replace this with the actual path to your uploaded image
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';

const Blog1: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
    return (
        <>
            < Navbar />
            <div className="min-h-screen bg-transparent mt-24 font-sans">
                <div className="max-w-5xl mx-auto py-10 px-6 md:px-12 lg:px-24">

                    {/* Heading */}
                    <header className="text-center mb-8">
                        <p className="text-base text-black-400 mb-3 text-slate-600 font-semibold">October 5, 2024</p>
                        <h1 className="text-3xl font-semibold text-slate-700">
                            Make Your Scent Last All Day: Top Tips for Long-Lasting Perfume
                        </h1>
                    </header>

                    {/* Large Image */}
                    <div className="w-full mb-10 border-2 rounded-3xl p-4">
                        <img src={aboutBG} alt="Perfume Collection" className="w-full h-auto rounded-3xl shadow-lg" />
                    </div>

                    {/* Content */}
                    <article className="space-y-6 text-xl leading-relaxed text-black-300 text-justify text-slate-600">
                        <p>
                            Perfume is more than just a fragrance; it’s an expression of your personality. To ensure your favorite scent
                            lingers throughout the day, follow these simple yet effective tips.
                        </p>

                        <h2 className="text-2xl font-semibold text-slate-700">Top Tips for Long-Lasting Perfume</h2>

                        <ul className="list-disc list-inside space-y-4 pl-4">
                            <li><strong>Moisturize Your Skin:</strong> Apply a fragrance-free moisturizer before spraying your perfume. Scents last longer on hydrated skin.</li>
                            <li><strong>Spray on Pulse Points:</strong> Target warm areas like wrists, neck, behind the ears, and inner elbows. Heat activates and intensifies the fragrance.</li>
                            <li><strong>Don’t Rub the Perfume:</strong> Rubbing your wrists together after applying breaks down the scent. Let it air-dry naturally.</li>
                            <li><strong>Layer with Matching Products:</strong> Use matching or complementary-scented body washes and lotions to intensify and prolong your fragrance.</li>
                            <li><strong>Store Perfume Properly:</strong> Keep it away from sunlight and heat, as these can degrade the scent’s quality.</li>
                        </ul>

                        <p className="text-xl font-semibold text-slate-700 mt-8">
                            Follow these easy tips to enjoy your Goldior Luxury fragrance for hours on end!
                        </p>
                    </article>
                </div>
            </div>
            < Footer />
        </>
    );
};

export default Blog1;
