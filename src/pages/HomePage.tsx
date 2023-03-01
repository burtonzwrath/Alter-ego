import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFlag } from "../redux/news/newsSlice";
import {Box, Typography} from "@mui/material";
import { getNews } from "../redux/news/selectors/selectors";
import {makeStyles} from "@mui/styles";
import ukraine from "../assets/image/Ukraine.jpg";
import {useTranslation} from "react-i18next";

const styles = makeStyles({
  homeWrapper:{
    marginTop:"30px",
    minHeight:"800px"
  },
  typography:{
    display:"flex",
    gap:"25px"
  },
  homeImg: {
    borderRadius:"20px",
  }
})

const HomePage = () => {
  const news = useSelector(getNews);
  const dispatch = useDispatch();
  const s = styles()
  const {t} = useTranslation()

  useEffect(() => {
    if (news.length !== 0) {
      dispatch(setFlag(true));
    }
  }, [dispatch]);

  return (
    <Box className={s.homeWrapper}>
      <Box className ={s.typography}>
        <Typography variant="h1" color="blue">{t("ukraine")}</Typography> <Typography variant="h1" color="yellow">{t("isHome")}</Typography>
      </Box>
      <img className={s.homeImg} src={ukraine} alt="ukraine" />
    </Box>
  );
};
export default HomePage;
