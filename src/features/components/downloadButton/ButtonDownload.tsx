import React, { useCallback, useEffect, useRef } from "react";
import { getNews } from "../../../redux/news/selectors/selectors";
import { useTranslation } from "react-i18next";
import { Box, Button, Slide } from "@mui/material";
import { increment, setFlag } from "../../../redux/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { buttonDownloadStyles } from "./buttonDownloadStyles";

const ButtonDownload: React.FC = () => {
  const s = buttonDownloadStyles();
  const dispatch = useDispatch();
  const lastRef = useRef<HTMLDivElement | null>(null);
  const news = useSelector(getNews);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      lastRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 1000);
  }, [news]);

  const showMore = useCallback(() => {
    dispatch(increment());
    dispatch(setFlag(false));
  }, [dispatch]);

  return (
    <Slide in={true} timeout={1000} direction="right">
      <Box className={s.buttonWrapper}>
        <Button
          sx={{ color: "lightsteelblue", "&:hover": { color: "burlywood" } }}
          onClick={showMore}
        >
          {t("download")}
        </Button>
        <div ref={lastRef}></div>
      </Box>
    </Slide>
  );
};

export default ButtonDownload;
