import React from "react";
import ProductItem from "../ProductItem";

const ProductList = (productsList: Products) => {
  console.log(productsList);
  return (
    <ul>
      {productsList.map((product) => (
        <ProductItem {...product} />
      ))}
    </ul>
  );
};

export default ProductList;
