import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsFunction } from "../../api/getNews";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async function (page: number) {
    const response = await getNewsFunction(page);
    return await response.json();
  }
);
