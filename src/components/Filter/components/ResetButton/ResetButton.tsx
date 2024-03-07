import { resetFilter } from "@/lib/features/filter/filterSlice";
import { resetFilteredPages } from "@/lib/features/filteredPages/filteredPagesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setProductsList } from "@/lib/features/products/productsSlice";
import styles from "./styles.module.css";

const ResetButton = () => {
  const filters = useAppSelector((state) => state.filter.filter);
  const loadedPages = useAppSelector((state) => state.loadedPages.loadedPages);
  const dispatch = useAppDispatch();
  const filtersIsOn = Object.keys(filters).length > 0;

  const OnClick = () => {
    if (filtersIsOn) {
      dispatch(resetFilter());
      dispatch(resetFilteredPages());
      dispatch(setProductsList({ productList: loadedPages.get(1) }));
    }
  };

  return (
    <button disabled={!filtersIsOn} className={styles.button} onClick={OnClick}>
      Сбросить фильтры
    </button>
  );
};

export default ResetButton;
