import { FaStar } from "react-icons/fa";

export default function StarRating({
    rating,
    size,
    fillColor = "yellow",
}: {
    rating: number;
    size: "normal" | "large";
    fillColor: string;
}) {
    const totalStars = 5;
    const fullStars = Math.floor(rating); // Number of fully filled stars
    const decimalPart = rating - fullStars; // Decimal part to determine partial fill

    return (
        <div className="flex items-center gap-1">
            {[...Array(totalStars)].map((_, index) => (
                <span key={index} className="relative flex items-center">
                    {index < fullStars ? (
                        // Fully filled stars
                        <FaStar
                            color={fillColor}
                            size={size === "normal" ? 16 : 32} // Reduced size here
                            className="transition-all duration-300"
                        />
                    ) : index === fullStars ? (
                        // Partially filled star
                        <span className="relative inline-block">
                            <FaStar
                                color="#d1d5db"
                                size={size === "normal" ? 16 : 32} // Reduced size here
                                className="transition-all duration-300"
                            />
                            <FaStar
                                color={fillColor}
                                size={size === "normal" ? 16 : 32} // Reduced size here
                                className="absolute top-0 left-0 transition-all duration-300"
                                style={{
                                    clipPath: `inset(0 ${(1 - decimalPart) * 100}% 0 0)`, // Clip based on decimal part
                                }}
                            />
                        </span>
                    ) : (
                        // Empty stars (gray)
                        <FaStar
                            color="#d1d5db"
                            size={size === "normal" ? 16 : 32} // Reduced size here
                            className="transition-all duration-300"
                        />
                    )}
                </span>
            ))}
        </div>
    );
}
