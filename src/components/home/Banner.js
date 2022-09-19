import { Link } from "react-router-dom";
import bannerOne from "../../assets/images/bannerOne.webp";
import bannerTwo from "../../assets/images/bannerTwo.webp";
import bannerThree from "../../assets/images/bannerThree.webp";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-12 mt-6">
        <Link to="/products" className="col-span-6">
          <img src={bannerOne} className="w-full" alt="Banner" />
        </Link>
        <Link to="/products" className="col-span-6">
          <img src={bannerTwo} className="w-full" alt="Banner" />
        </Link>
      </div>
      <div>
        <img src={bannerThree} alt="banner" />
      </div>
    </>
  );
};

export default Banner;
