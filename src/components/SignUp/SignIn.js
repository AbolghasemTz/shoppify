import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
  email: "",
  password: "",
};

let validationSchema = Yup.object({
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل ضروری است"),

  password: Yup.string().required("رمز ورود ضروری است"),
});

const SignIn = () => {
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
    <div className="min-h-screen">
      <form onSubmit={formik.handleSubmit} className="">
        <div className="mb-6 flex md:items-start items-center flex-col">
          <h2 className="font-bold pt-4">خوش آمدی !</h2>
        </div>
        <Input formik={formik} name="email" label="ایمیل" />

        <Input
          formik={formik}
          name="password"
          type="password"
          label="رمز ورود"
        />

        <button
          className="text-white mt-6 cursor-pointer bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          type="submit"
          disabled={!formik.isValid}
        >
          ورود
        </button>
        <Link to={`/signup?redirect=${redirect}`}>
          <p className="mt-6 text-sm">هنوز ثبت نام نکردی!</p>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
