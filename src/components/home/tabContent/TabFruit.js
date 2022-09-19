import ProductsData from "../../../data/data";
const TabFruit = () => {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-2 ">
      {ProductsData.fruit.map((item) => {
        return (
          <div
            key={item.id}
            className="md:col-span-6 col-span-11 h-auto border border-gray-300 rounded-lg overflow-hidden shadow-md"
          >
            <div className="flex justify-center">
              <img src={item.image} alt="عکس محصول" className="w-56 h-56" />
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">{item.brand}</p>
              <p className="py-2 text-green-600">{item.name}</p>
              <p
                className={`text-orange-500 pb-4 ${
                  item.offer && "line-through pb-0"
                }`}
              >
                {item.price}تومان
              </p>

              <p className="text-red-700 ">
                {item.offer}
                {item.offer && "تومان"}
              </p>
            </div>
            <div className="flex justify-center">
              <button className="border text-sm border-gray-300 my-2 bg-white hover:bg-green-600 hover:text-white transition-all duration-300 px-3 py-1 rounded-2xl">
                افزودن به سبد خرید
              </button>
            </div>
            <p
              className={`absolute top-0 left-0 px-2 py-1 rounded-sm text-sm ${
                item.offer && "bg-green-600 text-white"
              }`}
            >
              {item.offer && "حراج"}
            </p>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default TabFruit;
