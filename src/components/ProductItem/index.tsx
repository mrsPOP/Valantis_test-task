import React from "react";

const ProductItem = ({ id, product, price, brand }: Product) => {
  return (
    <li>
      `${id} ${product} ${price} ${brand}`
    </li>
  );
};

export default ProductItem;
