import React, { useCallback, useState } from "react";
import { Box, ListItemText, Paper, Slide } from "@mui/material";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { newListItemTypes } from "./newListTypes";
import { newListItemStyles } from "./newListStyles";
import { deleteNews } from "../../../../redux/news/newsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";

export const NewsListItem: React.FC<newListItemTypes> = ({ item }) => {
  const [set, setSet] = useState(true);
  const s = newListItemStyles();
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = useCallback((id: number) => {
    setTimeout(() => {
      dispatch(deleteNews(id));
    }, 800);
  }, []);

  return (
    <Slide in={set} timeout={1000} direction="left">
      <Box className={s.itemContainer}>
        <Box className={s.itemWrapper}>
          <ListItemText>{item.title}</ListItemText>
          <DeleteSweepOutlinedIcon
            className={s.deleteIcon}
            onClick={(e) => {
              handleDelete(item.id);
              setSet((prev) => !prev);
            }}
          >
            delete
          </DeleteSweepOutlinedIcon>
        </Box>
      </Box>
    </Slide>
  );
};
