import React from "react";
import { resetFilteredPages } from "@/lib/features/filteredPages/filteredPagesSlice";
import { resetFilter } from "@/lib/features/filter/filterSlice";
import { useAppDispatch } from "@/lib/hooks";

const ResetButton = () => {
  const dispatch = useAppDispatch();
  const OnClick = () => {
    dispatch(resetFilter());
    dispatch(resetFilteredPages());
  }
  return <button onClick={OnClick}>Сбросить фильтры</button>;
};

export default ResetButton;
