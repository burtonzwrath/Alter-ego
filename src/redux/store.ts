import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import newsSlice from "./news/newsSlice";
export const store = configureStore({
  reducer: {
    news: newsSlice,
    auth: authSlice
  },
});
export type AppDispatch = typeof store.dispatch;
