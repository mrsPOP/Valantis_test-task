import Image from "next/image";
import styles from "./page.module.css";
import { getIds, getItems, getFields, filter } from "@/api";
import ProductList from "@/components/ProductList";
import { getFirstRenderProductsList } from "@/utils/helpers";
import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination/Pagination";

export default async function Home() {
  const firstRenderProductsList = await getFirstRenderProductsList();

  return (
    <>
      <Filter />
      <ProductList firstRenderProductsList={firstRenderProductsList} />
      <Pagination/>
    </>
  );
}
