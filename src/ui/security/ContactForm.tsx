import React, { useState } from "react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            setError("Phone number must be exactly 10 digits.");
            return;
        }

        try {
            const res = await fetch("http://35.154.187.94:5100/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                alert(data.error || "Something went wrong.");
            }
        } catch (err) {
            console.error(err);
            alert("Failed to send. Please try again.");
        }
    };

    return (
        <div className="bg-gradient-to-r from-[#fef3e6] via-white to-[#fdebd0] min-h-screen flex flex-col items-center px-4 py-10 font-sans">
            <h1 className="text-4xl font-bold text-center text-[#1e1e1e] mb-2">Get in touch!</h1>
            <p className="text-center text-gray-600 mb-10">
                Contact us for queries, help or for bulk orders.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
                    <span className="text-orange-600">📍</span>
                    <span className="text-md text-gray-700">Mumbai  ||  Dubai</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
                    <span className="text-orange-600">📞</span>
                    <span className="text-md text-gray-700">+91 8818-8818-25</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
                    <span className="text-orange-600">✉️</span>
                    <span className="text-md text-gray-700"> support@goldiorluxury.com</span>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Your Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Mail</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Phone</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                </div>

                <div className="flex flex-col md:row-span-2">
                    <label className="text-sm font-medium mb-1">Message</label>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div className="md:col-span-2 flex justify-center">
                    {/* Hardcoded RoundButton */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-[var(--theme-brown)] rounded-md hover:bg-[var(--theme-brown)] transition-all py-2 xs:w-[12rem] sm:w-[11.5rem] xl:w-[18rem] text-gray-200"
                    >
                        <span className="text-md bg-transparent">Send Message</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
