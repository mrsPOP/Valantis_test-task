"use client";

import React from "react";
import ProductItem from "../ProductItem";
import { useAppSelector } from "@/lib/hooks";

const ProductList = ({
  firstRenderProductsList,
}: {
  firstRenderProductsList: Products;
}) => {
  const productsList = useAppSelector((state) => state.productsOnPage.products);

  const renderProducts = (products: Products) =>
    products.map((product: Product) => (
      <ProductItem key={product.id} {...product} />
    ));

  return (
      <ul>
        {productsList.length === 0
          ? firstRenderProductsList && renderProducts(firstRenderProductsList)
          : renderProducts(productsList)}
      </ul>
  );
};

export default ProductList;
