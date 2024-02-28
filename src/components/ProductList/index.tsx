"use client";

import React from "react";
import ProductItem from "../ProductItem";
import { useAppSelector } from "@/lib/hooks";

const ProductList = () => {
  const productsList = useAppSelector((state) => state.productsOnPage.products);

  return (
    <ul>
      {productsList &&
        productsList.map((product: Product) => (
          <ProductItem key={product.id} {...product} />
        ))}
    </ul>
  );
};

export default ProductList;
