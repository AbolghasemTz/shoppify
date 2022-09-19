import { Link } from "react-router-dom";
import iconOne from "../../assets/images/icon1.webp";
import iconTwo from "../../assets/images/icon2.webp";
import iconThree from "../../assets/images/icon3.webp";
import TabFruit from "./tabContent/TabFruit";
import TabSeaFood from "./tabContent/TabSeaFood";
import TabVegetable from "./tabContent/TabVegetable";

const TabProducts = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <div className="md:flex md:items-start md:my-16 my-8">
        <ul
          className="nav nav-tabs flex md:flex-col  list-none border-b-0 pl-0 mr-4"
          id="tabs-tabVertical"
          role="tablist"
        >
          <li
            className="nav-item py-4 flex items-center flex-grow text-center md:border-x-0 md:border-t  md:border-gray-500"
            role="presentation"
          >
            <img src={iconOne} className="md:w-[60px] w-[40px]" alt="" />

            <Link
              to="#tabs-homeVertical"
              className="
            nav-link
            block
            font-medium
            md:text-base
            text-xs
            leading-tight
            uppercase
       
            md:px-6
            px-2
            
            my-6
           
          "
              id="tabs-home-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-homeVertical"
              role="tab"
              aria-controls="tabs-homeVertical"
              aria-selected="true"
            >
              سبزیجات
            </Link>
          </li>
          <li
            className="nav-item py-4 flex items-center  md:border-x-0 md:border-t border-b md:border-gray-500 flex-grow text-center"
            role="presentation"
          >
            <img src={iconThree} className="md:w-[60px] w-[40px]" alt="" />
            <Link
              to="#tabs-profileVertical"
              className="
            nav-link
            block
            font-medium
            md:text-base
            text-xs
            leading-tight
            uppercase
           
            md:px-6
            px-2
            
            my-2
          
          "
              id="tabs-profile-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profileVertical"
              role="tab"
              aria-controls="tabs-profileVertical"
              aria-selected="false"
            >
              میوه ها
            </Link>
          </li>
          <li
            className="nav-item py-4 flex items-center flex-grow text-center  md:border-x-0  md:-b md:border-gray-500"
            role="presentation"
          >
            <img src={iconTwo} alt="" className="md:w-[60px] w-[40px]" />

            <Link
              to="#tabs-messagesVertical"
              className="
            nav-link
            block
            font-medium
            md:text-base
            text-xs
            leading-tight
            uppercase
           
            md:px-6
            px-2
            
            my-2
          
          "
              id="tabs-messages-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messagesVertical"
              role="tab"
              aria-controls="tabs-messagesVertical"
              aria-selected="false"
            >
              غذا دریایی
            </Link>
          </li>
        </ul>
        <div className="tab-content mr-10" id="tabs-tabContentVertical">
          <div
            className="tab-pane fade show active"
            id="tabs-homeVertical"
            role="tabpanel"
            aria-labelledby="tabs-home-tabVertical"
          >
            <TabVegetable />
          </div>
          <div
            className="tab-pane fade"
            id="tabs-profileVertical"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical"
          >
            <TabFruit />
          </div>
          <div
            className="tab-pane fade"
            id="tabs-messagesVertical"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical"
          >
            <TabSeaFood />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabProducts;
