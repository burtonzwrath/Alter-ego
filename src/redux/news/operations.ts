import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsFunction } from "../../api/getNews";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async function (page: number) {
    try{
      const response = await getNewsFunction(page);
      console.log(response);
      return await response.json();
    }
  catch(e){
    console.log(e)
  }
  }
);
