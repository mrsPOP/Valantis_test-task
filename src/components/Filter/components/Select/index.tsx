import { setFilter } from "@/lib/features/filter/filterSlice";
import { setProductsList } from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getFilteredProducts } from "@/utils/helpers";
import { ChangeEvent, useEffect, useId, useState } from "react";
import { selects } from "./helpers";
import styles from "./styles.module.css";
import { productsNumberOnPage } from "@/utils/constatns";

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
  const productsList = useAppSelector((state) => state.productsOnPage.products);
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
    const getProduts = async () => {
      if (!(Object.keys(filter).length === 0)) {
        const filteredProducts = await getFilteredProducts(filter);
        if (filteredProducts.length > productsNumberOnPage) {

        }
        dispatch(setProductsList({ productList: filteredProducts }));
      }
    };
    getProduts();
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
