import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js";
import pageSlice from "./slices/pageSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    page: pageSlice,
  },
});
