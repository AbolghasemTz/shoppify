import { useState } from "react";
import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsFillTelephoneForwardFill,
  BsFillClockFill,
} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  const [value, setValue] = useState("");
  return (
    <div className="bg-gray-100">
      <div className="bg-green-600 py-6 md:flex md:justify-around md:items-center">
        <div>
          <h2 className="text-white text-2xl md:text-left text-center mb-8 md:mb-0">
            همین الان عضو شو..
          </h2>
        </div>
        <div className="flex items-center  px-4 md:px-0">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 w-80 p-2.5 "
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="ایمیل ..."
          />
          <button className="border-none outline-none bg-orange-600 py-2 md:px-8 px-4 mr-2 rounded-md text-white">
            ارسال
          </button>
        </div>
      </div>

      <div className="pt-16">
        <div className=" relative">
          <div className="absolute top-0 sm:right-[40%] right-[20%] flex justify-center mb-2">
            <div>
              <BsFacebook size={30} className="text-green-700" />
            </div>
            <div>
              <BsInstagram size={30} className="mx-8 text-green-700" />
            </div>
            <div>
              <BsTwitter size={30} className="ml-8 text-green-700" />
            </div>
            <div>
              <BsYoutube size={30} className="text-green-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:justify-around sm:items-center pt-16">
        <div className="flex items-center text-green-500 justify-center">
          <BsFillClockFill size={22} />
          <span className="inline-block pr-3">شنبه تا چهارشنبه 8 - 18</span>
        </div>
        <div className="flex items-center justify-center py-4 text-green-500 md:mx-8 ">
          <AiTwotoneMail size={24} />
          <span className="inline-block pr-3">info@gmail.com</span>
        </div>
        <div className="flex items-center justify-center text-green-500 ">
          <BsFillTelephoneForwardFill size={24} />
          <span className="inline-block pr-3">09354947002</span>
        </div>
      </div>

      <div className=" grid grid-cols-12 max-w-screen-2xl w-full mx-auto mt-16 border-t pb-8 border-gray-400">
        <div className="sm:col-span-4 col-span-12 pt-2 text-center">
          <h3 className="text-green-900 pt-2 pb-4">دسترسی سریع</h3>
          <p className="text-sm text-gray-600 py-2 cursor-pointer">تخفیف ها</p>
          <p className="text-sm text-gray-600 py-2 cursor-pointer">
            قوانین سایت
          </p>
          <p className="text-sm text-gray-600 py-1 cursor-pointer">
            جدیدترین ها
          </p>
        </div>
        <div className="sm:col-span-4 col-span-12 pt-2 md:my-0 my-2 text-center">
          <h3 className="text-green-900 pt-2 pb-4">اطلالاعات شرکت</h3>
          <p className="text-sm text-gray-600 py-2 cursor-pointer">درباره ما</p>
          <p className="text-sm text-gray-600 py-2 cursor-pointer">
            تماس با ما
          </p>
          <p className="text-sm text-gray-600 py-1 cursor-pointer">
            سوالات متداول
          </p>
        </div>
        <div className="sm:col-span-4 col-span-12 pt-2 text-center">
          <h3 className="text-green-900 pt-2 pb-4">اطلاعات</h3>
          <p className="text-sm text-gray-600 py-2 cursor-pointer">
            حساب کاربری
          </p>
          <p className="text-sm text-gray-600 py-2 cursor-pointer">سبد خرید</p>
          <p className="text-sm text-gray-600 py-2 cursor-pointer">فروشگاه</p>
        </div>
      </div>

      <p className="text-center bg-green-100 py-3 text-gray-800">
        ساخته شده توسط امید تازیکی 2022
      </p>
    </div>
  );
};

export default Footer;
