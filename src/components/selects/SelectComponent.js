import React from "react";

import Select from "react-select";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className="">
      <span>{title}</span>
      <Select {...rest} className="w-[200px]" />
    </div>
  );
};

export default SelectComponent;
