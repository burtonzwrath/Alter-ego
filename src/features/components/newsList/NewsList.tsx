import { NewsListItem } from "./newsListItem/NewsListItem";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { newListTypes } from "./newsListTypes";
import ButtonDownload from "../downloadButton/ButtonDownload";
import { useTranslation } from "react-i18next";
import { newsListStyles } from "./newsListStyles";
import { getIsLoading } from "../../../redux/news/selectors/selectors";
import { useSelector } from "react-redux";
import image from '../../../assets/image/newsPage/news.jpg'

export const NewsList: React.FC<newListTypes> = ({ news }) => {
  console.log(news)
  const s = newsListStyles();
  const { t } = useTranslation();
  const isLoading = useSelector(getIsLoading);

  return (
    <Box className={s.list}>
      <Typography variant="h3"> {t("newsList")}</Typography>
      {news.flat().map((item) => (
        <NewsListItem key={item.id} item={item} />
      ))}
      {isLoading ? <Typography>Loading...</Typography> : <ButtonDownload />}
    </Box>
  );
};

<Card >
  <CardMedia
    image={image}
    title="Contemplative Reptile"
  />
</Card>
