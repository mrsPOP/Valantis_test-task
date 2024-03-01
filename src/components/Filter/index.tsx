"use client";

import React from "react";
import Select from "@/components/Filter/components/Select";

type Props = {
  brand: Set<string>;
  product: Set<string>;
  price: Set<number>;
}

const Filter = (dataForFiltersSelects: Props) => {
  return (
    <form>
      <Select selectData={dataForFiltersSelects.product} select="product" />
      <Select selectData={dataForFiltersSelects.brand} select="brand" />
      <Select selectData={dataForFiltersSelects.price} select="price" />
    </form>
  );
};

export default Filter;
