import React, { useEffect } from "react";
import NewsList  from "../../features/components/newsList/NewsList";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/news/operations";
import {
  getCurrentPage,
  getFlag,
  getNews,
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
  }, [dispatch, currentPage, flag]);

  return <NewsList news={news} />;
};

export default  NewsPage;
