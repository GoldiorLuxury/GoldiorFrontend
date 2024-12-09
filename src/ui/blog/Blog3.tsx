import React from 'react';
import aboutBG from '../../assets/about-bg.png'; // Replace this with the actual path to your uploaded image
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';


const Blog1: React.FC = () => {
    return (
        <>
            < Navbar />
            <div className="min-h-screen bg-transparent text-black mt-24 font-sans">
                <div className="max-w-5xl mx-auto py-10 px-6 md:px-12 lg:px-24">

                    {/* Heading */}
                    <header className="text-center mb-8">
                        <p className="text-sm text-black-400 mb-3">October 19, 2024</p>
                        <h1 className="text-4xl font-semibold">
                            Find Your Signature Scent: How to Choose the Perfect Perfume
                        </h1>
                    </header>

                    {/* Large Image */}
                    <div className="w-full mb-10">
                        <img src={aboutBG} alt="Perfume Collection" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    {/* Content */}
                    <article className="space-y-6 text-lg leading-relaxed text-black-300">
                        <p>
                            Choosing the right fragrance can transform your style and elevate your daily confidence. Here's how to pick the perfect perfume that resonates with your personality and style:
                        </p>

                        <h2 className="text-2xl font-semibold text-black">How to Choose the Perfect Perfume</h2>

                        <ul className="list-disc list-inside space-y-4 pl-4">
                            <li><strong>Know Your Scent Profile:</strong> Identify fragrance families you prefer—floral, oriental, woody, or fresh. Floral notes offer romantic tones, while woody scents are grounding and warm.</li>
                            <li><strong>Consider the Occasion:</strong> Lighter scents, like citrus or aquatic, are perfect for daywear or the office, while deeper, bolder scents suit evening events.</li>
                            <li><strong>Test the Scent:</strong> Always test perfumes on your skin to see how it interacts with your body chemistry, which can change the fragrance over time.</li>
                            <li><strong>Choose by Season:</strong> Opt for refreshing scents in warmer months and rich, warm scents like amber or musk during colder seasons.</li>
                            <li><strong>Trust Your Intuition:</strong> The best fragrance is the one that makes you feel your best. Trust your nose and pick a scent that speaks to you.</li>
                        </ul>

                        <p className="text-xl font-semibold text-black mt-8">
                            Explore Goldior Luxury's diverse range and find your perfect match today!
                        </p>
                    </article>
                </div>
            </div>
            < Footer />
        </>
    );
};

export default Blog1;
