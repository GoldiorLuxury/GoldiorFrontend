import ProductCard from '../general/ProductCard';
import perfume1 from '../../assets/old-fashion-black-perfume.png';
import perfume2 from '../../assets/old-fashion-perfume-black-gold.png'
import perfume3 from '../../assets/old-fashioned-gold-perfume.png'


function HomeGrid() {
  return (
    <>
    <h1 className="text-5xl font-bold text-brown-700 mb-8 text-center py-8 mt-10 text-[var(--theme-brown)]">Best selling products</h1>
    <div className="flex gap-5 items-center justify-center p-6 px-12">
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-5 p-8 -mt-14">
      <ProductCard
        imageUrl={perfume1}
        name="Luxurs elixir"
        price="$30.00"
        quantity={"100ml"}
      />
      <ProductCard
        imageUrl={perfume2}
        name="Fragrance Diffuser"
        price="$15.00"
        quantity={"200ml"}
      />
      <ProductCard
        imageUrl={perfume3}
        name="The Golden Legacy"
        price="$10.00"
        quantity={"100ml"}
      />
      <ProductCard
        imageUrl={perfume1}
        name="Aromatherapy Oil"
        price="$30.00"
        quantity={"200ml"}
      />
      <ProductCard
        imageUrl={perfume2}
        name="Fragrance Diffuser"
        price="$15.00"
        quantity={"100ml"}
      />
      <ProductCard
        imageUrl={perfume3}
        name="Incense Sticks"
        price="$10.00"
        quantity={"150ml"}
      />
    </div>
    </div>
    </>
  );
}

export default HomeGrid;