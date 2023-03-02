import React, { useCallback, useEffect } from "react";
import { NewsList } from "../../features/components/newsList/NewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/news/operations";
import { AppDispatch } from "../../redux/store";
import { setLoading } from "../../redux/news/newsSlice";
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

  useEffect(() => {
    if (!flag) {
      dispatch(fetchNews(currentPage));
    }
  }, [dispatch, currentPage]);

  return <NewsList news={news} />;
};

export default React.memo(NewsPage);
