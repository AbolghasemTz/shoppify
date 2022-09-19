import Product from "../components/products/product";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import ProductsData from "../data/data";
import { useState } from "react";

const Products = () => {
  const [offer, setOffer] = useState(false);
  const [lowest, setLowest] = useState(false);
  const [search, setSearch] = useState("");

  const inputHandler = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearch(inputValue);
  };
  const filterResults = ProductsData.allProducts.filter((result) => {
    let ProductHasMatched = true;

    if (search) {
      ProductHasMatched = result.name.toLowerCase().includes(search);
    }

    if (offer) {
      ProductHasMatched = ProductHasMatched && result.offer;
    }

    if (lowest) {
      ProductHasMatched = ProductHasMatched && !result.offer;
    }

    return ProductHasMatched;
  });

  return (
    <div className="min-h-screen mt-28 max-w-screen-xl w-full mx-auto">
      <div className="flex justify-center items-center">
        <input
          className="shadow-sm mt-2 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[400px] w-[300px] p-2.5"
          type="search"
          value={search}
          onChange={inputHandler}
          placeholder="محصول خود را جست و جو کنید ..."
        />
      </div>
      <div className="flex mb-4 items-center px-4">
        <div className="flex items-center">
          <AdjustmentsHorizontalIcon className="w-6 h-6 stroke-slate-800" />
          <p className="pr-2 text-gray-800">فیلتر ها:</p>
        </div>
        <div className="flex items-center">
          <p
            onClick={() => setOffer(!offer)}
            className={`px-3 mr-1 cursor-pointer text-sm md:text-base ${
              offer ? "bg-green-500 text-white rounded-md " : ""
            }`}
          >
            تخفیف ها
          </p>
          <p
            onClick={() => setLowest(!lowest)}
            className={`px-3 cursor-pointer text-sm md:text-base ${
              lowest ? "bg-green-500 text-white rounded-md " : ""
            }`}
          >
            بدون تخفیف
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-4 gap-y-2">
        {filterResults.map((item) => {
          return <Product key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
