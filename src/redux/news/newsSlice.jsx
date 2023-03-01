import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";
import { stateType } from "./selectors/selectorTypes";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    currentPage: 1,
    news: [],
    isLogged: false,
    isLoading:true,
    status: null,
    error: null,
    flag: false,

  },
  reducers: {
    increment(state) {
      state.currentPage += 1;
    },
    deleteNews(state, action) {
      state.news = [...state.news.filter((item) => item.id !== action.payload)];
    },
    setLogin(state, action) {
      state.isLogged = action.payload;
    },
    setFlag(state, action) {
      state.flag = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload
    }
  },
  extraReducers: {
    [fetchNews.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.news = [...state.news, ...action.payload];
    },
    [fetchNews.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export const { increment, setLogin, setFlag, deleteNews, setLoading } = newsSlice.actions;
export default newsSlice.reducer;

