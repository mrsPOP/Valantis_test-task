import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import paginationReducer from "./features/pagination/paginationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      productsOnPage: productsReducer,
      pagination: paginationReducer
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
