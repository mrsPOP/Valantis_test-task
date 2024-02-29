type Product = {
  id: string;
  product: string;
  price: number;
  brand: string;
};

type Products = Product[];

type GoToPageProps = {
  pagination: {
    pagesNumber: number;
    currentPage: number;
  };
  dispatch: AppDispatch;
  setPagination: ActionCreatorWithPayload<any, "pagination/setPagination">;
  setProductsList: ActionCreatorWithPayload<
    any,
    "productsOnPage/setProductsList"
  >;
  loadedPages: Map<number, Products>;
};

type GoToNextPageProps = {
  addPage: ActionCreatorWithPayload<any, "loadedPages/addPage">;
} & GoToPageProps;