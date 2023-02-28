import React, { useCallback, useEffect, useRef } from "react";
import { NewsList } from "../features/components/newsList/newsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/news/operations";
import {   deleteNews } from "../redux/news/newsSlice";
import { Box  } from "@mui/material";
import {
  getCurrentPage,
  getFlag,
  getNews,
  getStatus,
  getError,
} from "../redux/news/selectors";
import ButtonDownload from "../features/components/buttonDownload/ButtonDownload";
import {AppDispatch} from "../redux/store";

const  NewsPage = () =>{
    console.log("render")
  const dispatch = useDispatch<AppDispatch>();
  const news = useSelector(getNews);
  const currentPage = useSelector(getCurrentPage);
  const flag = useSelector(getFlag);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    if (!flag) {
      dispatch(fetchNews(currentPage));
    }
  }, [dispatch, currentPage, flag]);

  const handleDelete = useCallback((id:number)=>{ 
    setTimeout(() => {
    dispatch(deleteNews(id))
  }, 800)},[])
   

  return news && (
    <Box
      className="newsWrapper"
      sx={{
        marginTop:"20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor:"burlywood",
        alignItems:"center",
      }}
    >
      <NewsList news={news} handleDelete={handleDelete} />
    
    </Box>
  );
}

export default React.memo(NewsPage) ;
