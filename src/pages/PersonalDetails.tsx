import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../ui/general/Navbar';

interface FormData {
    name: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
}

const PersonalDetails: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        pinCode: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center p-4 ml-8">
                <span className="text-[#ab572d] font-serif text-[40px] font-bold leading-[47.9px] text-left">
                    DETAILS
                </span>
            </div>
            <form onSubmit={handleSubmit} className=" font-serif max-w-4xl m-auto p-8 space-y-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="w-full">
                        <label htmlFor="name" className="block text-sm font-medium text-black-700-semi-bold">Name</label>
                        <input type="text" id="name" name="name" placeholder="Type here" value={formData.name} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block text-sm font-medium text-black-700-semi-bold">Email</label>
                        <input type="email" id="email" name="email" placeholder="Type here" value={formData.email} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="addressLine1" className="block text-sm font-medium text-black-700-semi-bold">Address (Line 1)</label>
                    <input type="text" id="addressLine1" name="addressLine1" placeholder="Type here" value={formData.addressLine1} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="w-full">
                    <label htmlFor="addressLine2" className="block text-sm font-medium text-black-700-semi-bold">Address (Line 2)</label>
                    <input type="text" id="addressLine2" name="addressLine2" placeholder="Type here" value={formData.addressLine2} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="w-full">
                        <label htmlFor="city" className="block text-sm font-medium text-black-700-semi-bold">City</label>
                        <input type="text" id="city" name="city" placeholder="Type here" value={formData.city} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="state" className="block text-sm font-medium text-black-700-semi-bold">State</label>
                        <input type="text" id="state" name="state" placeholder="Type here" value={formData.state} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="w-full">
                        <label htmlFor="country" className="block text-sm font-medium text-black-700-semi-bold">Country</label>
                        <input type="text" id="country" name="country" placeholder="Type here" value={formData.country} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="pinCode" className="block text-sm font-medium text-black-700-semi-bold">Pin Code</label>
                        <input type="text" id="pinCode" name="pinCode" placeholder="Type here" value={formData.pinCode} onChange={handleChange} className="mt-1 p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="w-40 bg-[#c75014] hover:bg-[#db6e37] text-white py-2 px-4 rounded-full transition-colors duration-200 ease-in-out">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default PersonalDetails;
