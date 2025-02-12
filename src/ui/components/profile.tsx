import React from "react";

interface ProfileCardProps {
    name: string;
    email: string;
    imageUrl: string;
    onLogout: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, imageUrl, onLogout }) => {
    return (
        <div className="bg-white text-black rounded-2xl p-6 max-w-sm shadow-lg transition-all duration-300 border">
            <div className="flex flex-col items-center">
                <img
                    className="rounded-full border-4 border-brown-600 h-24 w-24 object-cover"
                    src={imageUrl}
                    alt={name || "User Profile"}
                    onError={(e) => (e.currentTarget.src = "/default-profile.png")} // Fallback image
                />

                <div className="mt-4 text-center">
                    <p className="text-xl font-semibold">{name}</p>
                    <p className="text-sm text-gray-500">{email}</p>

                    <button
                        className="mt-6 bg-brown-600 text-white bg-[var(--theme-brown)] font-medium px-6 py-2 rounded-lg transition duration-300 hover:bg-[var(--buttonHover)] active:scale-95"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
