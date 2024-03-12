import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ReducerSlice";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default Store;
