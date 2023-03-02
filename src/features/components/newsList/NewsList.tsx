import React from "react";
import NewsListItem  from "./newsListItem/NewsListItem";
import { newListTypes } from "./newsListTypes";
import { getIsLoading } from "../../../redux/news/selectors/selectors";
import ButtonDownload from "../downloadButton/ButtonDownload";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { newsListStyles } from "./newsListStyles";
import { useSelector } from "react-redux";

 const NewsList: React.FC<newListTypes> = ({ news }) => {
  const s = newsListStyles();
  const { t } = useTranslation();
  const isLoading = useSelector(getIsLoading);

  return (
    <Box className={s.list}>
      <Typography variant="h3"> {t("newsList")}</Typography>
      {news.flat().map((item) => (
        <NewsListItem key={item.id} item={item} />
      ))}
      {isLoading ? <Typography>Loading...</Typography> : ""}
      {news.length !== 0 ? <ButtonDownload /> : ""}
    </Box>
  );
};
 export default React.memo(NewsList)