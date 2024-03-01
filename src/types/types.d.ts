type Product = {
  id: string;
  product: string;
  price: number;
  brand: string;
};

type Select = "product" | "brand" | "price";

type Products = Product[];

type GetNextPageProductsInAdvanceProps = Omit<
  GoToPageProps,
  "setPagination" | "setProductsList"
>;

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
  addPage: ActionCreatorWithPayload<any, "loadedPages/addPage">;
};

type GoToPreviousPageProps = Omit<GoToPageProps, "addPage">;
