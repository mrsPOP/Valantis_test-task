import { setFilter } from "@/lib/features/filter/filterSlice";
import {
  addFilteredPage,
  resetFilteredPages,
} from "@/lib/features/filteredPages/filteredPagesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getFilteredProductsIds, getProductsList } from "@/utils/helpers";
import { ChangeEvent, useEffect, useId, useState } from "react";
import { selects } from "./helpers";
import styles from "./styles.module.css";
import { setPagination, resetPagination } from "@/lib/features/pagination/paginationSlice";

type Props = {
  select: Select;
  selectData: Set<string> | Set<number>;
};

export default function Select({ select, selectData }: Props) {
  const [inputValue, setInputValue] = useState<string | number>("");
  const datalistId = useId();
  const labelId = useId();
  const options = [...selectData];

  const filter = useAppSelector((state) => state.filter.filter as Filter);
  const dispatch = useAppDispatch();

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    const selectedOption = Number.isNaN(+option)
      ? option
      : option === ""
      ? ""
      : +option;
    setInputValue(selectedOption);
    // @ts-expect-error
    if (selectData.has(selectedOption)) {
      dispatch(setFilter({ filter: { [select]: selectedOption } }));
    }
  };

  useEffect(() => {
    if (!filter[select]) {
      setInputValue("");
    }
    dispatch(resetPagination());
    const getProducts = async () => {
      if (!(Object.keys(filter).length === 0)) {
        const filteredIds = await getFilteredProductsIds(filter);
        const filteredProducts = await getProductsList({ ids: filteredIds });
        if (filteredProducts.length > 0) {
          dispatch(resetFilteredPages());
          const range = Math.ceil(filteredProducts.length / 50);
          setPagination({
            pagination: {
              pagesNumber: range,
              currentPage: 1,
            },
          });
          for (let i = 1; i <= range; i++) {
            const fiftyProducts = filteredProducts.splice(0, 50);
            dispatch(
              addFilteredPage({ pageNumber: i, pageInfo: fiftyProducts })
            );
          }
        }
      }
    };
    getProducts();
  }, [filter]);

  return (
    <div>
      <label htmlFor={labelId}>{selects[select]}</label>
      <input
        className={styles.input}
        list={datalistId}
        id={labelId}
        name={selects[select]}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={options ? String(options[0]) : ""}
      />
      <datalist id={datalistId}>
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
    </div>
  );
}
