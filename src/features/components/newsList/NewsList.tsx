import NewsListItem  from "./newsListItem/NewsListItem";
import { Box, Typography } from "@mui/material";
import React from "react";
import { newListTypes } from "./newsListTypes";
import ButtonDownload from "../downloadButton/ButtonDownload";
import { useTranslation } from "react-i18next";
import { newsListStyles } from "./newsListStyles";
import { getIsLoading } from "../../../redux/news/selectors/selectors";
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