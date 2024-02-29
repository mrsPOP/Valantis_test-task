import { getProductsList } from "@/utils/helpers";
import { productsNumberOnPage } from "@/utils/constatns";

export const goToNextPage = async ({
  loadedPages,
  dispatch,
  pagination,
  setPagination,
  setProductsList,
  addPage,
}: GoToNextPageProps) => {
  if (loadedPages.has(pagination.currentPage + 1)) {
    dispatch(
      setProductsList({
        productList: loadedPages.get(pagination.currentPage + 1),
      })
    );
    dispatch(
      setPagination({
        pagination: {
          pagesNumber: pagination.pagesNumber,
          currentPage: pagination.currentPage + 1,
        },
      })
    );
  } else {
    const offset = pagination.currentPage * productsNumberOnPage;
    const nextPageProducts = await getProductsList({
      offset,
      limit: productsNumberOnPage,
    });
    dispatch(
      addPage({
        pageNumber: pagination.currentPage + 1,
        pageInfo: nextPageProducts,
      })
    );
    dispatch(setProductsList({ productList: nextPageProducts }));
    dispatch(
      setPagination({
        pagination: {
          pagesNumber: pagination.currentPage + 1,
          currentPage: pagination.currentPage + 1,
        },
      })
    );
  }
};
