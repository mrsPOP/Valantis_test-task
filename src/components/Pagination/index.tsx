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
  const dispatch = useAppDispatch();

  useEffect(() => {
    getNextPageProductsInAdvance({
      loadedPages,
      dispatch,
      pagination,
      addPage,
    });
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
