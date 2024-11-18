import ProductCard from "./ProductCard.tsx";
// import perfume1 from '../../assets/old-fashion-black-perfume.png';
// import perfume2 from '../../assets/old-fashion-perfume-black-gold.png'
// import perfume3 from '../../assets/old-fashioned-gold-perfume.png'
// import useGetProducts from "../../data/products/useGetProduct.ts"

// http://localhost:5100/api/product/

function ProductGrid({
  products,
  heading,
  showFilters = false,
}: {
  products: any;
  heading: string;
  showFilters?: boolean;
}) {
  return (
    <div className="pt-20 ">
      <h1 className="text-5xl font-bold text-brown-700 mb-8 text-center text-[var(--theme-brown)]">
        {heading}
      </h1>

      {showFilters && (
        <div className="px-6 lg:px-20 pb-10">
          <hr className="mb-4" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 w-full">
            {/* Filters Section */}
            <div className="flex gap-8 lg:gap-10 items-center">
              <span className="text-lg font-semibold text-gray-700">
                Filters
              </span>

              {/* Dropdown for Gender */}
              <div className="relative">
                <select className="w-full lg:w-48 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[var(--theme-brown)]  transition-all">
                  <option value="" disabled selected>
                    Gender
                  </option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </select>
              </div>
            </div>

            {/* Sort By Section */}
            <div className="relative">
              <select className="w-full lg:w-48 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[var(--theme-brown)] transition-all">
                <option value="" disabled selected>
                  Sort By
                </option>
                <option value="casual">Price: Low to High</option>
                <option value="formal">Price: High to Low</option>
                <option value="evening">Rating: Low to High</option>
                <option value="special">Rating: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center p-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 -mt-14">
          {products?.products?.map((item: any, index: number) => {
            return (
              <ProductCard
                key={index}
                imageUrl={item.imgUrl}
                name={item.name}
                price={item.price}
                quantity={"100ml"}
                id={item._id}
                discountPercentage={item?.discountPercentage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
