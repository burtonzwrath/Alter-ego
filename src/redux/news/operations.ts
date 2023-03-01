import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsFunction } from "../../api/getNews";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async function (page: number) {
    const response = await getNewsFunction(page);
    if (!response.ok) {
      throw new Error("Server error");
    }
    return await response.json();
  }
);
