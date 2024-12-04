import  { useState } from "react";
import ProductCard from "./ProductCard.tsx";

function ProductGrid({
  products,
  heading,
  showFilters = false,
}: {
  products: any;
  heading: string;
  showFilters?: boolean;
}) {
  const [selectedGender, setSelectedGender] = useState("Gender");
  console.log('Products', products)
  const [selectedSort, setSelectedSort] = useState("Sort By");

  return (
    <div className="pt-20">
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
              <div className="relative w-[150px] text-gray-900 dark:text-gray-100">
                <div className="relative w-full group">
                  <button className="py-2.5 px-3 w-full text-sm text-gray-700 bg-white border border-gray-300 hover:border-[#AB572D] focus:border-[#AB572D] focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold shadow-sm transition-colors">
                    {selectedGender}
                  </button>
                  <div
                    className="absolute z-[99] top-[100%] left-0 rounded-md overflow-hidden shadow-lg w-full peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-white border border-gray-300 text-sm"
                  >
                    {["Men", "Women", "Others", "Gifting"].map((gender) => (
                      <div
                        key={gender}
                        className="w-full block cursor-pointer bg-white hover:bg-[#AB572D] hover:text-black text-gray-700 px-3 py-2 rounded-md transition-colors"
                        onClick={() => setSelectedGender(gender)}
                      >
                        {gender}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sort By Section */}
            <div className="relative w-[150px] text-gray-900 dark:text-gray-100">
              <div className="relative w-full group">
                <button className="py-2.5 px-3 w-full text-sm text-gray-700 bg-white border border-gray-300 hover:border-[#AB572D] focus:border-[#AB572D] focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold shadow-sm transition-colors">
                  {selectedSort}
                </button>
                <div
                  className="absolute z-[99] top-[100%] left-0 rounded-md overflow-hidden shadow-lg w-full peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-white border border-gray-300 text-sm"
                >
                  {[
                    "Price: Low to High",
                    "Price: High to Low",
                    "Rating: Low to High",
                    "Rating: High to Low",
                  ].map((sortOption) => (
                    <div
                      key={sortOption}
                      className="w-full block cursor-pointer bg-white hover:bg-[#AB572D] hover:text-black text-gray-700 px-3 py-2 rounded-md transition-colors"
                      onClick={() => setSelectedSort(sortOption)}
                    >
                      {sortOption}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center p-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 -mt-14">
          {products?.products?.map((item: any, index: number) => (
            <ProductCard
              key={index}
              imageUrl={item.imgUrl}
              name={item.name}
              price={item.capacityInML[0].price}
              quantity={"100ml"}
              id={item._id}
              discountPercentage={item?.discountPercentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
