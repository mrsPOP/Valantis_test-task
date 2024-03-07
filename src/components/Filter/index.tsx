"use client";

import Select from "@/components/Filter/components/Select";
import ResetButton from "./components/ResetButton/ResetButton";
import styles from "./styles.module.css";

type Props = {
  brand: Set<string>;
  product: Set<string>;
  price: Set<number>;
};

const Filter = (dataForFiltersSelects: Props) => {
  return (
    <form className={styles.form}>
      <Select selectData={dataForFiltersSelects.product} select="product" />
      <Select selectData={dataForFiltersSelects.brand} select="brand" />
      <Select selectData={dataForFiltersSelects.price} select="price" />
      <ResetButton />
    </form>
  );
};

export default Filter;
