import React, { useEffect, useRef } from "react";
import { Box, Button, Slide } from "@mui/material";
import { increment, setFlag } from "../../../redux/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../redux/news/selectors";

const ButtonDownload: React.FC = () => {
  const dispatch = useDispatch();
  const lastRef = useRef<HTMLDivElement | null>(null);
  const news = useSelector(getNews);

  const showMore = () => {
    dispatch(increment());
    dispatch(setFlag(false));
  };

  useEffect(() => {
    lastRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [news]);

  return (
    <Slide in={true} timeout={1000} direction="right">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          zIndex: "12",
          width: "200px",
        }}
      >
        <Button sx={{ color: "lightgoldenrodyellow" }} onClick={showMore}>
          download next news
        </Button>
        <div ref={lastRef}></div>
      </Box>
    </Slide>
  );
};

export default ButtonDownload;
