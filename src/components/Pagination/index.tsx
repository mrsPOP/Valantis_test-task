"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setPagination } from "@/lib/features/pagination/paginationSlice";

const Pagination = () => {
  const pagination = useAppSelector((state) => state.pagination.pagination);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button aria-label="previous page">{"<"}</button>
      <p>{pagination.currentPage}</p>
      <button aria-label="next page">{">"}</button>
    </div>
  );
};

export default Pagination;
