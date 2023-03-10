import React, { useCallback, useState } from "react";
import { AppDispatch } from "../../../../redux/store";
import { newListItemTypes } from "./newListTypes";
import {Box, Grid, ListItemText, Slide, Stack, Typography} from "@mui/material";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { newListItemStyles } from "./newListStyles";
import { deleteNews } from "../../../../redux/news/newsSlice";
import { useDispatch } from "react-redux";

 const  NewsListItem: React.FC<newListItemTypes> = ({ item }) => {
  const [slide, setSlide] = useState(true);
  const s = newListItemStyles();
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = useCallback((id: number) => {
    setTimeout(() => {
      dispatch(deleteNews(id));
    }, 800);
  }, [dispatch]);

  return (
    <Slide in={slide} timeout={1000} direction="left">
      <Box className={s.itemContainer}>
        <Box className={s.itemWrapper}>
            <Stack direction="row" justifyContent="end" spacing={4}>
            <Typography> {item.id}</Typography>
            <Typography>{item.title}</Typography>
            </Stack>
          <DeleteSweepOutlinedIcon
            className={s.deleteIcon}
            onClick={(e) => {
              handleDelete(item.id);
                setSlide((prev) => !prev);
            }}
          >
            delete
          </DeleteSweepOutlinedIcon>
        </Box>
      </Box>
    </Slide>
  );
};

 export default React.memo(NewsListItem)