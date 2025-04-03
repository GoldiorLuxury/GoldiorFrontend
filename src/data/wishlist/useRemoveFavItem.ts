// import { BASE_URL } from "../../config/apiConfig";

export function handleRemoveFromLocalStorage(itemId: string) {
  const existingItems = JSON.parse(localStorage.getItem("GoldiorWishlist") ?? "[]");

  const updatedItems = existingItems.filter((item: any) => item._id !== itemId);
  console.log("Item id for wihslist", itemId);
  localStorage.setItem("GoldiorWishlist", JSON.stringify(updatedItems));

  console.log("Function is called");
}
