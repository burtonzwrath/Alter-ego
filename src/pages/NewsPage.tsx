import React, { useEffect, useRef } from "react";
import { NewsList } from "../features/components/newsList/newsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/news/operations";
import {  setFlag, deleteNews } from "../redux/news/newsSlice";
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

function NewsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const news = useSelector(getNews);
  const currentPage = useSelector(getCurrentPage);
  const flag = useSelector(getFlag);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    if (!flag) {
      dispatch(fetchNews(currentPage));
    } else {
      dispatch(setFlag(false));
    }
  }, [dispatch, currentPage, flag]);


  const handleDelete = (id:number) => {
    setTimeout(() => {
      dispatch(deleteNews(id));
    }, 800);
  };

  return (
    <Box
      className="newsWrapper"
      sx={{
        marginTop:"20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor:"burlywood",
        alignItems:"center"
      }}
    >
      <NewsList news={news} handleDelete={handleDelete} />
        {news && <ButtonDownload/>}
    </Box>
  );
}

export default NewsPage;
