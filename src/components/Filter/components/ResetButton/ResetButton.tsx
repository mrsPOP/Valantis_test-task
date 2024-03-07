import { resetFilter } from "@/lib/features/filter/filterSlice";
import { resetFilteredPages } from "@/lib/features/filteredPages/filteredPagesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { SyntheticEvent } from "react";

const ResetButton = () => {
  const filters = useAppSelector((state) => state.filter.filter);
  const dispatch = useAppDispatch();
  const filtersIsOn = Object.keys(filters).length > 0;

  const OnClick = (event: SyntheticEvent) => {
    event.preventDefault();
    if (filtersIsOn) {
      dispatch(resetFilter());
      dispatch(resetFilteredPages());
    }
  };
  return <button onClick={OnClick}>Сбросить фильтры</button>;
};

export default ResetButton;
