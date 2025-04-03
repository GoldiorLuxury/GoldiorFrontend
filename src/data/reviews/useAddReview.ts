// useAddReview.ts (custom hook)
import { useState } from "react";
import { BASE_URL } from "../../config/apiConfig";
// Function to add a review
// Function to add a review
export async function addReview(
  product_id: string | undefined,
  user_id: string | undefined,
  rating: number,
  parent: boolean | null,
  text: string,
  img_url: string | null,
  video_url: string | null = "",
  isRecommended: boolean
) {
  // Validate input data
  if (!product_id || !user_id) {
    throw new Error("Product ID and User ID are required");
  }

  const reviewData = {
    product_id,
    user_id,
    rating,
    parent,
    text,
    img_url,
    video_url,
    isRecommended,
  };

  try {
    // Make the API call
    const res = await fetch(`${BASE_URL}/api/review/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });

    // Check if the response is not okay
    if (!res.ok) {
      // If the response status code is not 2xx, throw an error
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to add review");
    }

    // Parse and return the JSON response
    const data = await res.json();
    return data; // Return the data for further processing in the component
  } catch (error: any) {
    // Catch any error that occurs in the try block (API failure, JSON parsing, etc.)
    throw new Error(error?.message || "Unexpected error occurred");
  }
}

export default function useAddReview() {
  const [isAddingReview, setIsAddingReview] = useState(false);

  // Function to add review with loading state
  const addReviewWithLoadingState = async (
    product_id: string | undefined,
    user_id: string | undefined,
    rating: number,
    parent: boolean | null,
    text: string,
    img_url: string | null,
    video_url: string | null = "",
    isRecommended: boolean
  ) => {
    // Set loading to true when review submission starts
    setIsAddingReview(true);

    try {
      const resp = await addReview(
        product_id,
        user_id,
        rating,
        parent,
        text,
        img_url,
        video_url,
        isRecommended
      );

      // If successful, we can process the response data
      if (resp && resp.id) {
        // Assuming backend returns the review object with an `id`
        alert("Review submitted successfully!");
      } else {
        // Handle unexpected responses
        throw new Error("Unexpected response from backend.");
      }
    } catch (error: any) {
      // Handle any errors that occurred during the API call
      alert("Failed to submit review. Please try again. " + error.message);
    } finally {
      // Always set loading to false when submission completes (success or error)
      setIsAddingReview(false);
    }
  };

  return { isAddingReview, addReview: addReviewWithLoadingState };
}
