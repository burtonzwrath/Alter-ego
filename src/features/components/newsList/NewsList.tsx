import { NewsListItem } from "./newsListItem/NewsListItem";
import { Box, Typography } from "@mui/material";
import React from "react";
import { newListTypes } from "./newsListTypes";
import ButtonDownload from "../downloadButton/ButtonDownload";
import { useTranslation } from "react-i18next";
import { newsListStyles } from "./newsListStyles";

export const NewsList: React.FC<newListTypes> = ({ news, handleDelete }) => {
  const s = newsListStyles();
  const { t } = useTranslation();

  return (
    <Box className={s.list}>
      <Typography variant="h3"> {t("newsList")}</Typography>
      {news.map((item) => (
        <NewsListItem handleDelete={handleDelete} key={item.id} item={item} />
      ))}
      <ButtonDownload />
    </Box>
  );
};
