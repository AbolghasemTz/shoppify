import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

let validationSchema = Yup.object({
  name: Yup.string().required("نام ضروری است "),
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل ضروری است"),
  phoneNumber: Yup.string().required("شماره تماس ضروری است").min("11"),
  password: Yup.string()
    .required("رمز ضروری است")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "رمز عبور باید حداقل شامل 8 کاراکتر، یک حرف بزرگ، یک عدد و یک کاراکتر کوچک خاص باشد"
    ),
  passwordConfirm: Yup.string()
    .required("ضروری است")
    .oneOf([Yup.ref("password"), null], "رمز باید برابر باشد"),
});

const SignUp = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const redirect = query.get("redirect" || "/");

  const onSubmit = (values) => {
    console.log(values);
    navigate("/checkout");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className=" min-h-screen">
      <form onSubmit={formik.handleSubmit} className=" ">
        <div className="mb-6 flex md:items-start items-center flex-col">
          <h2 className="font-bold pt-4"> خوش آمدی!</h2>
        </div>
        <Input formik={formik} name="name" label="نام" />
        <Input formik={formik} name="email" label="ایمیل" />
        <Input formik={formik} name="phoneNumber" label="شماره تماس" />
        <Input formik={formik} name="password" type="password" label="رمز " />
        <Input
          formik={formik}
          name="passwordConfirm"
          type="password"
          label="تکرار رمز"
        />

        <button
          type="submit"
          disabled={!formik.isValid}
          className="text-white mt-6 cursor-pointer bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          ثبت نام
        </button>
        <Link to={`/signin?redirect=${redirect}`}>
          <p className="mt-6 text-sm">ورود !</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
