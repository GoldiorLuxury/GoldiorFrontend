import React from 'react';
import services1 from '../assets/services-img-1.jpg';
import services2 from '../assets/services-img-2.jpg';
import services3 from '../assets/services-img-3.jpg';
import services4 from '../assets/services-img-4.png';
import services5 from '../assets/services-img-5.jpg';
import Navbar from '../ui/general/Navbar';
import Footer from '../ui/general/Footer';
import { NavLink } from 'react-router-dom';

interface BlogCardProps {
    imageSrc: string;
    title: string;
    description: string;
    buttonLink: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title, description, buttonLink }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-0 bg-[#FFFF] shadow-lg rounded-xl p-2 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={imageSrc} alt={title} className="w-full h-72 object-cover rounded-t-lg" />
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-sm mb-6">{description}</p>
                <NavLink to={buttonLink}>
                    <button className="shadow-[inset_0_0_0_2px_rgba(0,0,0,1)] px-4 py-1 bg-transparent border border-black text-black rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400">
                        Read More
                    </button>
                </NavLink>
            </div>
        </div>


    );
};

const BlogCollection: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white text-[#303237] py-2 px-6 md:px-12 lg:px-24 pt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-6xl text-[var(--theme-brown)] font-semibold text-center mb-12 mt-6">Our Blog Collection</h2>
                    <div className="flex flex-col md:flex-row items-start gap-10">
                        <div className="md:w-1/2">
                            <h3 className="text-xl text-[#303237] font-bold mb-4">Discover the Art of Perfumery</h3>
                            <p className="text-lg font-normal mb-4">
                                Welcome to Local Face's Perfumery Blog Collection! Here, we invite you to immerse yourself in the captivating world of fragrances, where each blog post is a sensory journey that unveils the magic and allure of perfumes.
                            </p>
                            <p className="text-lg font-normal mb-4">
                                At Local Face, we believe that perfumery is an extraordinary fusion of art, science, and emotion. Our passion for exquisite fragrances has inspired us to curate a treasure trove of blog posts, each designed to ignite your senses and deepen your appreciation for these olfactory wonders.
                            </p>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <img src={services4} alt="Perfume 1" className="w-full h-48 object-cover rounded-lg" />
                            <img src={services1} alt="Perfume 2" className="w-full h-48 object-cover rounded-lg" />
                            <img src={services2} alt="Perfume 3" className="w-full h-48 object-cover rounded-lg" />
                            <img src={services3} alt="Perfume 4" className="w-full h-48 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Section with Cards */}
            <div className="blog-sec py-12 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BlogCard
                        imageSrc={services1}
                        title="Make Your Scent Last All Day: Top Tips for Long-Lasting Perfume"
                        description="Embark on a journey of self-discovery as we dive into the concept of perfume personalities. From bold and adventurous to elegant and timeless, find the scent that complements your essence."
                        buttonLink="/blog/make-your-scent-last-all-day"
                    />
                    <BlogCard
                        imageSrc={services2}
                        title="Choosing the Perfect Fragrance for Every Season: A Guide by Goldior Luxury"
                        description="A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one’s taste, personality, and experiences."
                        buttonLink="/blog/choosing-the-perfect-fragrance-for-every-season"
                    />
                    <BlogCard
                        imageSrc={services4}
                        title="Decoding Fragrance Notes: Unraveling the Symphony of Scents"
                        description="Ever wondered how perfumers compose their masterpieces? Unravel the mystery behind fragrance notes and learn how they combine to create olfactory experiences."
                        buttonLink="/blog/decoding-fragrance-notes"
                    />
                    <BlogCard
                        imageSrc={services3}
                        title="Find Your Signature Scent: How to Choose the Perfect Perfume"
                        description="Ever wondered how perfumers compose their masterpieces? Unravel the mystery behind fragrance notes and learn how they combine to create olfactory experiences."
                        buttonLink="/blog/find-your-signature-scent"
                    />
                    <BlogCard
                        imageSrc={services5}
                        title="Discover the Different Types of Perfumes: A Guide to Finding Your Signature Scent"
                        description="Ever wondered how perfumers compose their masterpieces? Unravel the mystery behind fragrance notes and learn how they combine to create olfactory experiences."
                        buttonLink="/blog/discover-the-different-types-of-perfumes"
                    />
                </div>
            </div>
            < Footer />
        </>
    );
};

export default BlogCollection;
