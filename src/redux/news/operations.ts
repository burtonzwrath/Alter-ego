import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsFunction } from "../../api/getNews";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async function (page: number, {rejectWithValue}) {
    try{
      const {data} = await getNewsFunction(page);
      return await data;
    }
    catch (error:any) {
        if (!error.response) {
            throw error;
        }
        return rejectWithValue(error.response.data);
    }
  }
);
