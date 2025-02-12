// import React from "react";
import { useEffect } from 'react'
import Navbar from "../ui/general/Navbar";
import ProductGrid from "../ui/general/ProductGrid";
import useGetProducts from "../data/products/useGetProduct";
import Footer from "../ui/general/Footer";


export default function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  const { products } = useGetProducts();
  // console.log("products: ", products);
  return (
    <div>
      <Navbar />
      <ProductGrid products={products} heading="Our Collections" showFilters={true} />
      <Footer />
    </div>
  );
}
