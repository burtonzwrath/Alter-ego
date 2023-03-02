import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";
import { newsSliceTypes } from "./selectors/newsSliceTypes";

const initialState: newsSliceTypes = {
  currentPage: 1,
  news: [],
  isLogged: false,
  isLoading: null,
  status: null,
  error: null,
  flag: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
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
  extraReducers: builder => {
    builder.addCase (fetchNews.pending,state => {
      state.status = "pending"
      state.isLoading = true
    })
    builder.addCase(fetchNews.fulfilled,(state, action)=>{
      state.status = "resolved"
      state.isLoading = false
      state.news.push(action.payload)
      state.error = ""
    })
    builder.addCase(fetchNews.rejected, (state, action)=>{
      state.status = "rejected"
      state.isLoading = false
      state.error = action.error.message
    })
  },
});
export const { increment, setLogin, setFlag, deleteNews, setLoading } = newsSlice.actions;
export default newsSlice.reducer;

