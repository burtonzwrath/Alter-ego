import { NewsListItem } from "./newsListItem/NewsListItem";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import React from "react";
import { newListTypes } from "./newsListTypes";
import ButtonDownload from "../downloadButton/ButtonDownload";
import { useTranslation } from "react-i18next";

const styles = makeStyles({
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "1400px",
    alignItems: "center",
    minHeight: "800px",
    margin: "40px",
  },
});

export const NewsList: React.FC<newListTypes> = ({ news, handleDelete }) => {
  const s = styles();
  const { t } = useTranslation();
  return (
    <Box className={s.list}>
      <Typography> {t("newsList")}</Typography>
      {news.map((item) => (
        <NewsListItem handleDelete={handleDelete} key={item.id} item={item} />
      ))}
      <ButtonDownload />
    </Box>
  );
};
