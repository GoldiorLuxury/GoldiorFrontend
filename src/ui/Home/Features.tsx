import React from "react";
import {
  FaShippingFast,
  FaExchangeAlt,
  FaHeadset,
  FaLock,
} from "react-icons/fa";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaShippingFast className="text-4xl text-gray-800" />,
    title: "FREE DELIVERY",
    description:
      "Free Express Shipping Worldwide. No minimum order is required.",
  },
  {
    icon: <FaExchangeAlt className="text-4xl text-gray-800" />,
    title: "7 DAYS RETURN",
    description: "7 Days No Question Asked Return or Exchange.",
  },
  {
    icon: <FaHeadset className="text-4xl text-gray-800" />,
    title: "SUPPORT 24x7",
    description:
      "Any confusion before purchase, contact us 24 hours a day, 7 days a week.",
  },
  {
    icon: <FaLock className="text-4xl text-gray-800" />,
    title: "100% SECURE",
    description: "We ensure secure payment with SSL (Secure Sockets Layer).",
  },
];

const DisplayFeatures: React.FC = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center px-12">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DisplayFeatures;
