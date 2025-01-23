import { useNavigate } from "react-router-dom";
import { verifyUserExists } from "./VerifyUserExists";

export function useVerifyOtp() {
//   const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // useNavigate is used inside the hook

  const verifyOtp = async (email: string, otp: string) => {
    try {
      const res = await fetch(
        `https://website-backend-1-a73j.onrender.com/api/auth/verify-otp/${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp }), // Send OTP in the request body
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to verify OTP");
      }

      console.log("OTP verified successfully:", data.message);

      const doesuserexist = await verifyUserExists(email);

      console.log("does user existL: ", doesuserexist);

      // Navigate to /register after successful OTP verification
      localStorage.setItem("user_email_goldior_luxury", email);
      if (doesuserexist) {
        window.history.back();
      } else {
        navigate("/register");
      }

      // Optionally store the email in localStorage if required
      /* eslint-disable @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      console.error("Error verifying OTP:", error.message);
    }
  };

  return { verifyOtp };
}
