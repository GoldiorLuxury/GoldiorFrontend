import { FaStar } from "react-icons/fa";

export default function StarRating({ rating }: { rating: number }) {
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
                            <FaStar color="var(--rating-yellow)" size={24}/>
                        ) : index === fullStars ? (
                            // Partially filled star
                            <span style={{position: 'relative', display: 'inline-block'}}>
                                <FaStar color="gray" size={24}/>
                                <FaStar
                                    color="var(--rating-yellow)"
                                    size={24}
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
                            <FaStar color="gray" size={24}/>
                        )}
                    </span>
                );
            })}
            <span style={{fontFamily: 'Playfair'}} className={'text-lg'}>{rating}/5</span>
        </div>
    );
}
