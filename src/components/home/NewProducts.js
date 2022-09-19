import ProductsData from "../../data/data";
import ProductItem from "../products/ProductItem";

const NewProducts = () => {
  return (
    <div className="lg:max-w-screen-xl md:max-w-screen-md w-full mx-auto ">
      <div className="mt-24 ">
        <h2 className="text-center py-6 text-green-900 tracking-widest text-2xl font-bold">
          محصولات جدید
        </h2>
        <div className="grid grid-cols-12 gap-2 ">
          {ProductsData.newProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="relative overflow-hidden md:col-span-3 sm:col-span-6 col-span-12 xs:col-span-10 border border-gray-200 rounded-md shadow-lg md:my-8 my-2  mx-3 md:mx-0  h-auto"
              >
                <ProductItem data={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
