import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/Products/CartSlice";
import { checkInCart } from "../../utils/constants/helpers";
import { notify } from "../../utils/tostify";

const ProductItem = ({ data }) => {
  const { cart } = useSelector((state) => state.CartState);
  const dispatch = useDispatch();

  const addHandler = (data) => {
    dispatch(addToCart(data));
    notify("به سبد خرید اضافه شد", "success");
  };
  return (
    <>
      <div className="">
        <div className="flex justify-center ">
          <img className="" src={data.image} alt="عکس محصول" />
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm">{data.brand}</p>
          <p className="py-4 text-green-600">{data.name}</p>
          <p
            className={`text-orange-500 pb-4 ${
              data.offer && "line-through pb-0"
            }`}
          >
            {data.price}تومان
          </p>

          <p className="text-red-700 ">
            {data.offer}
            {data.offer && "تومان"}
          </p>
        </div>
        <div className="flex justify-around items-center">
          {checkInCart(cart, data.id) ? (
            <Link
              className="border text-sm border-gray-300 my-4 text-white bg-green-600 hover:bg-white hover:text-black transition-all duration-300 px-3 py-1 rounded-2xl"
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
          <Link
            to={`/products/${data.id}`}
            className="text-sm bg-gray-200 px-2 py-1 rounded-2xl text-gray-900 "
          >
            جزییات محصول
          </Link>
        </div>
        <p
          className={`absolute top-0 left-0 px-2 py-1 rounded-sm text-sm ${
            data.offer && "bg-green-600 text-white"
          }`}
        >
          {data.offer && "حراج"}
        </p>
      </div>
    </>
  );
};

export default ProductItem;
