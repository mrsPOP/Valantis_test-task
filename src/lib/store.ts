import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import paginationReducer from "./features/pagination/paginationSlice";
import loadedPagesReducer from "./features/loadedPages/loadedPagesSlice";
import filterReducer from "./features/filter/filterSlice";
import filteredPagesReducer from "./features/filteredPages/filteredPagesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      productsOnPage: productsReducer,
      pagination: paginationReducer,
      loadedPages: loadedPagesReducer,
      filter: filterReducer,
      filteredPages: filteredPagesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
