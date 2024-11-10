// RegisterForm.js
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    gender: "",
    address:{
        name:"",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
    }
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-2/5"
      >
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Register User
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Save address as
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={formData.address.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
          />
        </div>

        {/* Address Line 1 */}
        <div className="mb-4">
          <label
            htmlFor="address1"
            className="block text-sm font-medium text-gray-700"
          >
            Address Line 1
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={formData.address.address1}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
          />
        </div>

        {/* Address Line 2 */}
        <div className="mb-4">
          <label
            htmlFor="address2"
            className="block text-sm font-medium text-gray-700"
          >
            Address Line 2
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={formData.address.address2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
          />
        </div>

        {/* City and State (same row) */}
        <div className="mb-4 flex space-x-4">
          {/* City */}
          <div className="flex-1">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.address.city}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
            />
          </div>

          {/* State */}
          <div className="flex-1">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.address.state}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
            />
          </div>
        </div>

        {/* Country and Zipcode (same row) */}
        <div className="mb-4 flex space-x-4">
          {/* Country */}
          <div className="flex-1">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.address.country}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
            />
          </div>

          {/* Zipcode */}
          <div className="flex-1">
            <label
              htmlFor="zipcode"
              className="block text-sm font-medium text-gray-700"
            >
              Zipcode
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={formData.address.zipcode}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[var(--theme-brown)] text-white py-2 px-4 rounded-md hover:bg-[var(--theme-brown)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-brown)]"
        >
          Register
        </button>
        <label className="block text-sm font-normal text-gray-700 text-center m-2">
          Already register?{" "}
          <NavLink to={"/login"} className="font-medium text-[var(--theme-brown)]">
            Login
          </NavLink>
        </label>
      </form>
    </div>
  );
};

export default RegisterForm;
