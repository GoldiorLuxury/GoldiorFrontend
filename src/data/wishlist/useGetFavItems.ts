// import { useState, useEffect } from "react";
// import { getWishlist } from "./getWishlist";

// export default function useGetFavourites() {
//   const [favourites, setFavourites] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setFavourites(getWishlist());
//   }, []);

//   return { favourites };
// }

// import { useState, useEffect } from "react";

// const useGetFavourites = () => {
//   const [favourites, setFavourites] = useState<any[]>([]);

//   // This function fetches the favorites from local storage
//   const fetchFavourites = () => {
//     const savedItems = JSON.parse(localStorage.getItem("savedItems") || "[]");
//     setFavourites(savedItems);
//   };

//   useEffect(() => {
//     // Fetch favorites when the component mounts
//     fetchFavourites();

//     // Listen to localStorage changes and update the state
//     const handleStorageChange = () => {
//       fetchFavourites();
//     };

//     window.addEventListener("storage", handleStorageChange);

//     // Cleanup the event listener when component is unmounted
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   return { favourites };
// };

// export default useGetFavourites;
