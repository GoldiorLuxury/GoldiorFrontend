import ProductCard from '../general/ProductCard';
// import perfume1 from '../../assets/old-fashion-black-perfume.png';
// import perfume2 from '../../assets/old-fashion-perfume-black-gold.png'
// import perfume3 from '../../assets/old-fashioned-gold-perfume.png'
// import useGetProducts from "../../data/products/useGetProduct.ts"
import useGetMostOrderedProducts from '../../data/products/useGetMostOrderedProducts.ts';


// http://localhost:5100/api/product/


function HomeGrid() {

  const {products} = useGetMostOrderedProducts();
  console.log("products: ", products)
  return (
    <>
    <h1 className="text-5xl font-bold text-brown-700 mb-8 text-center py-8 mt-10 text-[var(--theme-brown)]">Best selling products</h1>
    <div className="flex gap-5 items-center justify-center p-6 lg:px-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-8 -mt-14">
      
{
  products?.products?.map((item: any, index: number) => {
    return (
      <ProductCard
      key={index}
        imageUrl={item.imgUrl}
        name={item.name}
        price={item.price}
        quantity={"100ml"}
      />
    );
  })
}
    </div>
    </div>
    </>
  );
}

export default HomeGrid;