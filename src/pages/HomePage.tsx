import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFlag } from "../redux/news/newsSlice";
import { getNews } from "../redux/news/selectors/selectors";
import {Box, Paper, Typography} from "@mui/material";
import ukraine from "../assets/image/Ukraine.jpg";
import {makeStyles} from "@mui/styles";

const styles = makeStyles({
  homeImg: {
    borderRadius:"20px"
  }
})



const HomePage = () => {
  const news = useSelector(getNews);
  const dispatch = useDispatch();
  const s = styles()

  useEffect(() => {
    if (news.length !== 0) {
      dispatch(setFlag(true));
    }
  }, [dispatch]);

  return (
      <Box>
       <Typography align="center" variant="h1"  color="common.white">Ukraine is my home</Typography>
          <img className={s.homeImg} src={ukraine} alt="ukraine" />
      </Box>
  );
};
export default HomePage;
