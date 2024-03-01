import { ChangeEvent, useState, useId } from "react";
import { selects } from "./helpers";

type Props = {
  select: Select;
  selectData: Set<string> | Set<number>;
};

export default function Select({ select, selectData }: Props) {
  const [inputValue, setInputValue] = useState("");
  const datalistId = useId();
  const labelId = useId();
  const options = [...selectData];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor={labelId}>{selects[select]}</label>
      <input
        list={datalistId}
        id={labelId}
        name={selects[select]}
        value={inputValue}
        onChange={handleInputChange}
        placeholder=""
      />
      <datalist id={datalistId}>
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
    </div>
  );
}
