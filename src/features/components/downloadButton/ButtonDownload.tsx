import React, { useCallback, useEffect, useRef } from "react";
import { Box, Button, Slide } from "@mui/material";
import { increment, setFlag } from "../../../redux/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../redux/news/selectors";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";

const styles = makeStyles({
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    zIndex: "12",
    width: "200px",
  },
  buttonDownload: {
    color: "lightgoldenrodyellow",
  },
});

const ButtonDownload: React.FC = () => {
  const s = styles();
  const dispatch = useDispatch();
  const lastRef = useRef<HTMLDivElement | null>(null);
  const news = useSelector(getNews);
  const { t } = useTranslation();

  useEffect(() => {
    lastRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [news]);

  const showMore = useCallback(() => {
    dispatch(increment());
    dispatch(setFlag(false));
  }, [increment, setFlag, dispatch]);

  return (
    <Slide in={true} timeout={1000} direction="right">
      <Box className={s.buttonWrapper}>
        <Button className={s.buttonDownload} onClick={showMore}>
          {t("download")}
        </Button>
        <div ref={lastRef}></div>
      </Box>
    </Slide>
  );
};

export default React.memo(ButtonDownload);
