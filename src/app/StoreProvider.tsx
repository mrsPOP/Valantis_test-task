"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { setProductsList } from "@/lib/features/products/productsSlice";
import { setPagination } from "@/lib/features/pagination/paginationSlice";

export default function StoreProvider({
  firstRenderProductsList,
  children,
}: {
  firstRenderProductsList: Products;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(
      setProductsList({ productList: firstRenderProductsList })
    );
    const productsOnPage = storeRef.current.getState().productsOnPage.products;
    if (productsOnPage.length > 0) {
      storeRef.current.dispatch(
        setPagination({
          pagination: {
            pageNumber: 1,
            currentPage: 1,
          },
        })
      );
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
