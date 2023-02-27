import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";
import {stateType} from "./selectorTypes";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    currentPage: 1,
    news: [],
    isLogged: false,
    status: null,
    error: null,
    flag:false,
  },
  reducers: {
    increment(state) {
      state.currentPage += 1;
    },
    deleteNews(state, action) {
      state.news = [...state.news.filter(item=>item.id!==action.payload)]
    }
    ,
    setLogin(state, action) {
      state.isLogged = action.payload
    },
    setFlag(state, action){
      state.flag = action.payload
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
export const { increment, setLogin, setFlag, deleteNews} = newsSlice.actions;
export default newsSlice.reducer;
