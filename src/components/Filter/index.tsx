"use client";

import Select from "@/components/Filter/components/Select";
import React from "react";
import styles from './styles.module.css';

type Props = {
  brand: Set<string>;
  product: Set<string>;
  price: Set<number>;
}

const Filter = (dataForFiltersSelects: Props) => {
  return (
    <form className={styles.form}>
      <Select selectData={dataForFiltersSelects.product} select="product" />
      <Select selectData={dataForFiltersSelects.brand} select="brand" />
      <Select selectData={dataForFiltersSelects.price} select="price" />
    </form>
  );
};

export default Filter;
