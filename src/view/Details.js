import ProductsData from "../data/data";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../store/Products/CartSlice";
import { checkInCart } from "../utils/constants/helpers";

import { useDispatch, useSelector } from "react-redux";
import { notify } from "../utils/tostify";

const Details = () => {
  const { cart } = useSelector((state) => state.CartState);
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = ProductsData.allProducts;
  console.log(product);
  const data = product[id - 1];
  console.log(data.id);

  const addHandler = (data) => {
    dispatch(addToCart(data));
    notify("به سبد خرید اضافه شد", "success");
  };

  return (
    <div className="min-h-screen pb-10 max-w-screen-lg mx-auto w-full mt-36">
      <div className="grid grid-cols-12">
        <div className="md:col-span-3 col-span-12">
          <img src={data.image} alt="Details Product" />
        </div>
        <div className="md:col-span-9 col-span-12 my-4 mr-8">
          <div className="">
            <h3 className="text-2xl pb-6">{data.name}</h3>
            <p className="md:leading-10 leading-10 pb-6 text-sm md:text-base">
              {data.description}
            </p>
            <p
              className={`text-orange-500 text-2xl pb-4 ${
                data.offer && "line-through pb-0"
              }`}
            >
              {data.price}تومان
            </p>

            <p className="text-red-700 pt-2  ">
              {data.offer}
              {data.offer && "تومان"}
            </p>
          </div>
          <div className="my-6 flex items-center">
            <div>
              {checkInCart(cart, data.id) ? (
                <Link
                  className="border  text-sm border-gray-300  text-white bg-green-600 hover:bg-white hover:text-black transition-all duration-300 px-3 py-1 rounded-2xl"
                  to="/cart"
                >
                  رفتن سبد خرید
                </Link>
              ) : (
                <button
                  onClick={() => addHandler(data)}
                  className="border text-sm border-gray-300 my-4 bg-white hover:bg-green-600 hover:text-white transition-all duration-300 px-3 py-1 rounded-2xl"
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
            <Link
              to="/products"
              className="text-sm bg-gray-200 px-6 py-2 rounded-full text-gray-900 mr-16"
            >
              فروشگاه
            </Link>
          </div>

          <div>
            <p>
              برند :<span className="inline-block pr-2">{data.brand}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
