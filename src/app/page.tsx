import Image from "next/image";
import styles from "./page.module.css";
import { getIds, getItems, getFields, filter } from "@/api";
import ProductList from "@/components/ProductList";
import { getProductsList } from "@/utils/helpers";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import StoreProvider from "./StoreProvider";
import { productsNumberOnPage } from "@/utils/constatns";
import { getDataForFiltersSelects } from "@/utils/helpers";

export default async function Home() {
  const firstRenderProductsList = await getProductsList({
    offset: 0,
    limit: productsNumberOnPage,
  });
  const dataForFiltersSelects = await getDataForFiltersSelects();

  return (
    <StoreProvider firstRenderProductsList={firstRenderProductsList}>
      <Filter {...dataForFiltersSelects}/>
      <ProductList />
      <Pagination />
    </StoreProvider>
  );
}
