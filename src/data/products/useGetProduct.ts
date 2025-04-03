/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/apiConfig";

export default function useGetProducts() {
  const { data: products, isLoading: isGettingProducts } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["products"],
  });

  return { products, isGettingProducts };
}

async function getAllProducts() {
  try {
    const res = await fetch(`${BASE_URL}/api/product/`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.error || "Failed to fetch products: useGetProduct.js"
      );
    }

    return data;
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Failed to fetch recipes: useGetProduct.js");
  }
}
