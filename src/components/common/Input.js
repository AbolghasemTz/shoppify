import React from "react";

const Input = ({ formik, name, label, type = "text" }) => {
  return (
    <div>
      <div>
        <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
        <input
          className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type={type}
          name={name}
          {...formik.getFieldProps(name)}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="mt-1 mb-2 text-xs text-red-600">
            {formik.errors[name]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
