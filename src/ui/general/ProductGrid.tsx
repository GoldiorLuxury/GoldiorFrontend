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
    <div className="py-20 ">
      <h1 className="text-5xl font-bold text-brown-700 mb-8 text-center text-[var(--theme-brown)]">
        {heading}
      </h1>
      {showFilters && (
        <div className="px-16 lg:px-36 pb-10 ">
          <hr />
          <div className="flex justify-between w-[50%] md:w-[70%] lg:w-full">
            {/* filters  */}
            <div className="flex gap-8 lg:gap-10">
              <span className="font-semibold ">Filters</span>



              {/* Dropdown for Gender */}
              <div className="dropdown">
                <select>
                  <option value="" disabled selected>
                    Gender
                  </option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </select>
              </div>

            </div>

            <div>
              <div className="dropdown">
                <select className="w-40">
                  <option className="font-semibold" value="" disabled selected> 
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
        </div>
      )}
      <div className="flex gap-5 items-center justify-center p-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-8 -mt-14">
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
