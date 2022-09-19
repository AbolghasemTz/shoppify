import React, { useState } from "react";

//reducer
import { useProductsAction } from "../Providers/ProductsProvider";

//styles
import styles from "../Filter/Filter.module.css";
import SelectComponent from "../selects/SelectComponent";
import SearchBar from "../../common/SearchBar";

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductsAction();

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandeler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };

  const sortHandeler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <>
      <SearchBar filter={filter} />
      <div className={styles.filter}>
        <p>filter product based on:</p>
        <SelectComponent
          title="filter by size"
          value={filter}
          options={options}
          onChange={filterHandeler}
        />
        <SelectComponent
          title="sort by price"
          value={sort}
          options={sortOptions}
          onChange={sortHandeler}
        />
      </div>
    </>
  );
};

export default Filter;
