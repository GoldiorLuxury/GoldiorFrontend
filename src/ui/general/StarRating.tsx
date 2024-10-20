import { FaStar } from "react-icons/fa";

export default function StarRating({ rating, size, fillColor }: { rating: number, size: string, fillColor: string }) {
    const totalStars = 5;

    return (
        <div className="flex items-center">
            {Array.from({length: totalStars}, (_, index) => {
                const fullStars = Math.floor(rating); // Number of fully filled stars
                const decimalPart = rating - fullStars; // Decimal part to determine partial fill

                return (
                    <span key={index} style={{marginRight: "5px", position: 'relative', display: 'flex'}}>
                        {index < fullStars ? (
                            // Fully filled stars
                            <FaStar color={fillColor} size={size === "normal" ? 24 : 44} />
                        ) : index === fullStars ? (
                            // Partially filled star
                            <span style={{position: 'relative', display: 'inline-block'}}>
                                <FaStar color="#d1d5db" size={size === "normal" ? 24 : 44} />
                                <FaStar
                                    color={fillColor}
                                    size={size === "normal" ? 24 : 44} 
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        clipPath: `inset(0 ${(1 - decimalPart) * 100}% 0 0)`, // Clip based on decimal part
                                    }}
                                />
                            </span>
                        ) : (
                            // Empty stars (gray)
                            <FaStar color="#d1d5db" size={size === "normal" ? 24 : 44} />
                        )}
                    </span>
                );
            })}
            {/* <span style={{fontFamily: 'Playfair'}} className={'text-lg'}>{rating}/5</span> */}
        </div>
    );
}
