// https://website-backend-1-a73j.onrender.com/api/review/
// https://website-backend-1-a73j.onrender.com/api/product/672c49008681df2dabc8ad20

import { useQuery } from "@tanstack/react-query";

export default function useGetReviewForProduct(product_id: string | undefined) {
  const {
    data: reviews,
    isLoading: isGettingReviews,
    refetch,
  } = useQuery({
    queryFn: () => getReviews(product_id),
    queryKey: ["reviews"],
  });

  return { reviews, isGettingReviews, refetch };
}

async function getReviews(product_id: string | undefined) {
  try {
    const res = await fetch(
      `https://website-backend-1-a73j.onrender.com/api/review/${product_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok)
      throw new Error("Failed to fetch review: useGetReviewForProduct.js");

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
