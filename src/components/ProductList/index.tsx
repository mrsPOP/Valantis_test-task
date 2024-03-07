"use client";

import { setProductsList } from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import ProductItem from "../ProductItem";
import styles from "./styles.module.css";

const ProductList = () => {
  const productsList = useAppSelector((state) => state.productsOnPage.products);
  const filteredPages = useAppSelector(
    (state) => state.filteredPages.filteredPages
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filteredPages.has(1)) {
      dispatch(setProductsList({ productList: filteredPages.get(1) }));
    }
  }, [filteredPages]);

  return (
    <ul className={styles.list}>
      {productsList &&
        productsList.map((product: Product) => (
          <ProductItem key={product.id} {...product} />
        ))}
    </ul>
  );
};

export default ProductList;
