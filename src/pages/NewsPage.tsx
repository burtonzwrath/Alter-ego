import React, { useCallback, useEffect } from "react";
import { NewsList } from "../features/components/newsList/NewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/news/operations";
import { deleteNews } from "../redux/news/newsSlice";
import { AppDispatch } from "../redux/store";
import {
  getCurrentPage,
  getFlag,
  getNews,
  getStatus,
  getError,
} from "../redux/news/selectors/selectors";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "burlywood",
    alignItems: "center",
    maxWidth: "1200px",
  },
});

const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const news = useSelector(getNews);
  const currentPage = useSelector(getCurrentPage);
  const flag = useSelector(getFlag);
  const s = styles();
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    if (!flag) {
      dispatch(fetchNews(currentPage));
    }
  }, [dispatch, currentPage, flag]);

  const handleDelete = useCallback((id: number) => {
    setTimeout(() => {
      dispatch(deleteNews(id));
    }, 800);
  }, []);

  return news && <NewsList news={news} handleDelete={handleDelete} />;
};

export default React.memo(NewsPage);
