import React, { useCallback, useEffect } from "react";
import { NewsList } from "../../features/components/newsList/NewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/news/operations";
import { deleteNews } from "../../redux/news/newsSlice";
import { AppDispatch } from "../../redux/store";
import {
  getCurrentPage,
  getFlag,
  getNews,
  getStatus,
  getError,
} from "../../redux/news/selectors/selectors";


const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const news = useSelector(getNews);
  const currentPage = useSelector(getCurrentPage);
  const flag = useSelector(getFlag);
  // const status = useSelector(getStatus);
  // const error = useSelector(getError);

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

  return (
      news && <NewsList news={news} handleDelete={handleDelete} />
  );
};

export default React.memo(NewsPage);
