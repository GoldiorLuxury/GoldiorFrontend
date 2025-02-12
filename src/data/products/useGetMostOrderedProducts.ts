/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";

export default function useGetMostOrderedProducts() {
  const { data: products, isLoading: isGettingProducts } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["products"],
  });

  return { products, isGettingProducts };
}

async function getAllProducts() {
  try {
    const res = await fetch(
      "http://35.154.187.94:5100/api/product/mostOrdered"
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.error || "Failed to fetch products: useGetProduct.js"
      );
    }

    return data;
    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Failed to fetch recipes: useGetProduct.js");
  }
}
