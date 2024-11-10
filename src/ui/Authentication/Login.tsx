import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSendOtp = () => {
    if (email) {
      setIsOtpModalOpen(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Login Form */}
      <div
        className={`bg-white p-6 rounded shadow-md w-full max-w-md ${
          isOtpModalOpen ? "hidden" : ""
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your email"
        />
        <button
          onClick={handleSendOtp}
          className="mt-4 w-full bg-[var(--theme-brown)] text-white p-2 rounded"
        >
          Send OTP
        </button>
        <label className="block text-sm font-normal text-gray-700 text-center m-2">
          Don't have an account?{" "}
          <NavLink
            to={"/register"}
            className="font-medium text-[var(--theme-brown)]"
          >
            Register
          </NavLink>
        </label>
      </div>

      {/* OTP Modal */}
      {isOtpModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white p-6 rounded shadow-md w-full max-w-md">
            <button
              onClick={() => setIsOtpModalOpen(false)}
              className="absolute top-2 right-2 text-3xl text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              OTP Authentication
            </h2>
            <p className="text-center mb-4">
              Enter the 4-digit OTP sent to your email.
            </p>
            <div className="flex justify-center gap-2 mb-4">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  id={`otp-${index}`}
                  className="otp-input w-12 h-12 border border-gray-300 text-center text-xl rounded"
                />
              ))}
            </div>
            <button onClick={()=>{console.log(otp, "The Login page OTP")}} className="w-full bg-[var(--theme-brown)] text-white p-2 rounded">
              Login
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Didn’t receive an OTP?{" "}
              <span className="text-[var(--theme-brown)] cursor-pointer">
                Resend
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
