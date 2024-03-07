import { getProductsList } from "@/utils/helpers";
import { productsNumberOnPage } from "@/utils/constatns";

export const getNextPageProductsInAdvance = async ({
  loadedPages,
  dispatch,
  pagination,
  addPage,
}: GetNextPageProductsInAdvanceProps) => {
  if (!loadedPages.has(pagination.currentPage + 1)) {
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
  }
};

export const goToNextPage = async ({
  loadedPages,
  dispatch,
  pagination,
  setPagination,
  setProductsList,
  addPage,
  filteredPages,
}: GoToPageProps) => {
  if (filteredPages.has(1)) {
    if (filteredPages.has(pagination.currentPage + 1)) {
      dispatch(
        setProductsList({
          productList: filteredPages.get(pagination.currentPage + 1),
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
    }
  } else {
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
  }
};

export const goToPreviousPage = ({
  pagination,
  dispatch,
  setPagination,
  setProductsList,
  loadedPages,
  filteredPages,
}: GoToPreviousPageProps) => {
  if (!(pagination.currentPage === 1)) {
    if (filteredPages.has(1)) {
      dispatch(
        setProductsList({
          productList: filteredPages.get(pagination.currentPage - 1),
        })
      );
      dispatch(
        setPagination({
          pagination: {
            pagesNumber: pagination.pagesNumber,
            currentPage: pagination.currentPage - 1,
          },
        })
      );
    } else {
      dispatch(
        setProductsList({
          productList: loadedPages.get(pagination.currentPage - 1),
        })
      );
      dispatch(
        setPagination({
          pagination: {
            pagesNumber: pagination.pagesNumber,
            currentPage: pagination.currentPage - 1,
          },
        })
      );
    }
  }
};
