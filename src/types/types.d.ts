type Product = {
  id: string;
  product: string;
  price: number;
  brand: string;
};

type Products = Product[];

type GoToNextPageProps = {
  loadedPages: Map<number, Products>;
  dispatch: AppDispatch;
  pagination: {
    pagesNumber: number;
    currentPage: number;
  };
  setPagination: ActionCreatorWithPayload<any, "pagination/setPagination">;
  setProductsList: ActionCreatorWithPayload<
    any,
    "productsOnPage/setProductsList"
  >;
  addPage: ActionCreatorWithPayload<any, "loadedPages/addPage">;
};
