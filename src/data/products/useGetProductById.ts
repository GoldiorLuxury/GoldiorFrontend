// http://35.154.187.94:5100/api/product/672c49008681df2dabc8ad20
import { BASE_URL } from "../../config/apiConfig";
import { useQuery } from "@tanstack/react-query";

export default function useGetProductById(id: string | undefined) {
  const { data: product, isLoading: isGettingProduct } = useQuery({
    queryFn: () => getProduct(id),
    queryKey: ["products"],
  });

  return { product, isGettingProduct };
}

async function getProduct(id: string | undefined) {
  try {
    const res = await fetch(`${BASE_URL}/api/product/${id}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.error || "Failed to fetch product: useGetProductById.js"
      );
    }

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Failed to fetch recipes: useGetProduct.js");
  }
}
