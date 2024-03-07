"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setPagination } from "@/lib/features/pagination/paginationSlice";
import { setProductsList } from "@/lib/features/products/productsSlice";
import { addPage } from "@/lib/features/loadedPages/loadedPagesSlice";
import {
  goToNextPage,
  goToPreviousPage,
  getNextPageProductsInAdvance,
} from "./helpers";

const Pagination = () => {
  const pagination = useAppSelector((state) => state.pagination.pagination);
  const loadedPages = useAppSelector((state) => state.loadedPages.loadedPages);
  const filteredPages = useAppSelector(
    (state) => state.filteredPages.filteredPages
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!filteredPages.has(1)) {
      getNextPageProductsInAdvance({
        loadedPages,
        dispatch,
        pagination,
        addPage,
        filteredPages,
      });
    }
  }, [loadedPages]);

  return (
    <div>
      <button
        onClick={() =>
          goToPreviousPage({
            pagination,
            dispatch,
            setPagination,
            setProductsList,
            loadedPages,
            filteredPages,
          })
        }
        aria-label="previous page"
      >
        {"<"}
      </button>
      <p>{pagination.currentPage}</p>
      <button
        onClick={() =>
          goToNextPage({
            filteredPages,
            loadedPages,
            dispatch,
            pagination,
            setPagination,
            setProductsList,
            addPage,
          })
        }
        aria-label="next page"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
