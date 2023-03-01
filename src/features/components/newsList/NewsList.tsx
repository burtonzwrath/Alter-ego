import { NewsListItem } from "./newsListItem/NewsListItem";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import React from "react";
import { newListTypes } from "./newsListTypes";
import ButtonDownload from "../downloadButton/ButtonDownload";
import {useTranslation} from "react-i18next";

const styles = makeStyles({
  list: {
    listStyle: "none",
    padding: "100px 50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
});

export const NewsList: React.FC<newListTypes> = ({ news, handleDelete }) => {
  const s = styles();
  const {t} = useTranslation()
  return (
    <Box className={s.list}>
      <Typography>   {t("newsList")}</Typography>
      {news.map((item) => (
        <NewsListItem handleDelete={handleDelete} key={item.id} item={item} />
      ))}
      <ButtonDownload />
    </Box>
  );
};
