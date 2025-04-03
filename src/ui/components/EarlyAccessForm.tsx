import { useState } from "react";

export default function EarlyAccessForm({ productName, onClose }: { productName: string; onClose: () => void }) {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData); // Replace with API call
        alert("Request submitted! We will get back to you soon.");
        onClose(); // Close the modal after submission
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md text-center border border-gray-300">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">For Early Access to Our Products</h2>
                <p className="text-gray-600 mb-4">Be the first to experience <strong>{productName}</strong>!</p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Why do you want early access?"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                    ></textarea>

                    {/* Buttons */}
                    <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:opacity-90">
                        Request Early Access
                    </button>
                    <button type="button" className="mt-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
}
