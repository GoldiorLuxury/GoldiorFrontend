// import { BASE_URL } from "../../config/apiConfig";

export function getWishlist() {
    const favourites = JSON.parse(
      localStorage.getItem("GoldiorWishlist") || "[]"
    );

    // if (savedFavourites && savedFavourites.length > 0) {
      
    // }
    return favourites;
}
    
