// import React from "react";
import Navbar from "../ui/general/Navbar";
import ProductGrid from "../ui/general/ProductGrid";
import useGetProducts from "../data/products/useGetProduct";
import Footer from "../ui/general/Footer";


export default function Shop() {
      const { products } = useGetProducts();
      console.log("products: ", products);
  return (
    <div>
      <Navbar />
      <ProductGrid products={products} heading="Our Products" showFilters={true} />
      <Footer />
    </div>
  );
}
