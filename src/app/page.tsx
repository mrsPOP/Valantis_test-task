"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { getIds, getItems, getFields, filter } from "@/api/api";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [data, setData] = useState("ничего");

  async function onButClick() {
    // const res: SetStateAction<string> = await getIds({offset: 3, limit: 4});
    // const res: SetStateAction<string> = await getItems({ids: ["1789ecf3-f81c-4f49-ada2-83804dcc74b0"]});
    // const res: SetStateAction<string> = await filter({price: 17500.0});
    const res: SetStateAction<string> = await getFields({"field": "price", "offset": 1, "limit": 5});
    setData(JSON.stringify(res));
  }

  return (
    <>
      <div>{data}</div>
      <button onClick={onButClick}>оп</button>
    </>
  );
}
