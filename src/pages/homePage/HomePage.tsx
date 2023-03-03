import React, { useEffect } from "react";
import ukraine from "../assets/image/homePage/Ukraine.jpg";
import { useTranslation } from "react-i18next";
import { getNews } from "../../redux/news/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setFlag } from "../../redux/news/newsSlice";
import { Box, Typography } from "@mui/material";
import { HomePagestyles } from "./homePageStyles";

const HomePage = () => {
  const news = useSelector(getNews);
  const dispatch = useDispatch();
  const s = HomePagestyles();
  const { t } = useTranslation();

  useEffect(() => {
    if (news.length !== 0) {
      dispatch(setFlag(true));
    }
  }, [dispatch,news.length]);

  return (
    <Box className={s.homeWrapper}>
      <Box className={s.typographyWrapper}>
        <Typography
          sx={{
            fontSize: {
              lg: 80,
              md: 60,
              sm: 30,
              xs: 30,
            },
          }}
          color="darkBlue"
        >
          {t("ukraine")}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: 80,
              md: 60,
              sm: 30,
              xs: 30,
            },
          }}
          color="yellow"
        >
          {t("isHome")}
        </Typography>
      </Box>
      <img className={s.homeImg} src={ukraine} alt="ukraine" />
    </Box>
  );
};
export default HomePage;
