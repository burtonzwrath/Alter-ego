import React, { useState } from "react";
import { Box, ListItemText, Paper, Slide } from "@mui/material";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { newListItemTypes } from "./newListTypes";
import {newListItemStyles} from "./newListStyles";

export const NewsListItem: React.FC<newListItemTypes> = ({
  item,
  handleDelete,
}) => {
  const [set, setSet] = useState(true);
  const s = newListItemStyles()

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
