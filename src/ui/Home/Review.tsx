import React from 'react'
import Review from "../../assets/ReviewPerson.png";
import { PiStarFill } from "react-icons/pi";

const testimonials = [
    {
        id: 1,
        image: Review,
        title: "Exceptional Service",
        description:
            "Noir Elixir is pure magic. The bold, seductive blend is perfect for evenings out, and I always receive compliments on it.",
        name: "Sophia L.",
        position: "CEO of Angria Company",
        rating: 5,
        location: "San Francisco, USA",
        tag: "Verified Buyer",
    },
    {
        id: 2,
        image: Review,
        title: "Amazing Fragrance",
        description:
            "This fragrance is a game-changer. It’s fresh, long-lasting, and makes me feel confident all day.",
        name: "Emma K.",
        position: "Founder of Luxe Scents",
        rating: 5,
        location: "New York, USA",
        tag: "Frequent User",
    },
    {
        id: 3,
        image: Review,
        title: "Top Quality Product",
        description:
            "I love how Noir Elixir stands out. It has become my signature scent, and I can't recommend it enough.",
        name: "Liam T.",
        position: "Entrepreneur",
        rating: 5,
        location: "London, UK",
        tag: "Premium Customer",
    },
];

function SaleBanner() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="px-8 sm:px-32 py-16 bg-[#fdf6ed]">
            <div className="w-full h-auto bg-white p-8 rounded-bl-[1.5rem] rounded-tr-[1.5rem] rounded-tl-[6rem] rounded-br-[6rem] border">
                {/* Header */}
                <h2 className="text-center text-[2.5rem] font-serif font-bold text-slate-700 leading-snug mb-8">
                    What Our Customers Say
                </h2>

                {/* Testimonial Content */}
                <div className="flex flex-col sm:flex-row items-center gap-8 p-6">
                    {/* Image with Gradient */}
                    <div className="relative w-48 h-auto rounded-3xl overflow-hidden bg-gradient-to-t from-blue-200 to-white border">
                        <img
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Testimonial Text */}
                    <div className="text-center sm:text-left">
                        <div className="flex justify-center sm:justify-start items-center gap-2 mb-4">
                            {[...Array(currentTestimonial.rating)].map((_, index) => (
                                <PiStarFill key={index} className="text-yellow-500 text-lg" />
                            ))}
                            <span className="text-sm bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
                                {currentTestimonial.tag}
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-4">
                            {currentTestimonial.title}
                        </h3>
                        <p className="text-slate-400 mb-6">{currentTestimonial.description}</p>
                        <div>
                            <p className="text-lg font-medium text-slate-900">
                                {currentTestimonial.name}
                            </p>
                            <p className="text-xs text-slate-400">
                                {currentTestimonial.position} • {currentTestimonial.location}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center space-x-4 mt-8">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-200 transition"
                    >
                        <span className="text-lg text-gray-500">←</span>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 flex items-center justify-center bg-[var(--theme-brown)] rounded-md text-white hover:bg-[var(--theme-brown)] transition"
                    >
                        <span className="text-lg">→</span>
                    </button>
                </div>

                {/* Testimonial Counter */}
                <p className="text-center text-sm text-slate-500 mt-4">
                    {currentIndex + 1} of {testimonials.length} Reviews
                </p>
            </div>
        </div>
    );
}

export default SaleBanner;
