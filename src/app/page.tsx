import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import { productsNumberOnPage } from "@/utils/constatns";
import { getDataForFiltersSelects, getProductsList } from "@/utils/helpers";
import StoreProvider from "./StoreProvider";

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
