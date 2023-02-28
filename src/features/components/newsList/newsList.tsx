import { NewsListItem } from "./newsListItem/newsListItem";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import React from "react";
import { newListTypes } from "./newsListTypes";
import ButtonDownload from "../buttonDownload/ButtonDownload";

const styles = makeStyles({
  list: {
    listStyle: "none",
    padding: "20",
  },
  item: {
    width: "100%",
  },
});

export const NewsList: React.FC<newListTypes> = ({ news, handleDelete }) => {
  const s = styles();
  return (
    <Box className={s.list}>
      {news.map((item) => (
        <NewsListItem handleDelete={handleDelete} key={item.id} item={item} />
      ))}
       <ButtonDownload/>
    </Box>
  );
};
