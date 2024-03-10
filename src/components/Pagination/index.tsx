"use client";

import { addPage } from "@/lib/features/loadedPages/loadedPagesSlice";
import { setPagination } from "@/lib/features/pagination/paginationSlice";
import { setProductsList } from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import {
  getNextPageProductsInAdvance,
  goToNextPage,
  goToPreviousPage,
} from "./helpers";
import styles from "./styles.module.css";

const Pagination = () => {
  const pagination = useAppSelector((state) => state.pagination.pagination);
  const loadedPages = useAppSelector((state) => state.loadedPages.loadedPages);
  const filteredPages = useAppSelector(
    (state) => state.filteredPages.filteredPages
  );
  const dispatch = useAppDispatch();
  const isVisible =
    (filteredPages.has(1) && filteredPages.has(2)) || !filteredPages.has(1);

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
  }, [pagination]);

  return (
    <>
      {isVisible && (
        <div className={styles.container}>
          <button
            disabled={pagination.currentPage === 1}
            className={styles.button}
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
          <p className={styles.number}>{pagination.currentPage}</p>
          <button
            disabled={
              (filteredPages.has(1) && !filteredPages.has(2)) ||
              !loadedPages.get(pagination.currentPage + 1) && !filteredPages.has(1)
            }
            className={styles.button}
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
      )}
    </>
  );
};

export default Pagination;
