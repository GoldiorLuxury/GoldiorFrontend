// import { BASE_URL } from "../../config/apiConfig";

export function handleSaveToLocalStorage(item?: any) {
  const existingItems =
    JSON.parse(localStorage.getItem("GoldiorWishlist") ?? "[]") || [];

  const newProduct = item;

  const isProductExists = existingItems.some(
    (item: any) => item._id === newProduct._id
  );

  if (!isProductExists) {
    existingItems.push(newProduct);
    localStorage.setItem("GoldiorWishlist", JSON.stringify(existingItems));
  }
}
