import React, { useState } from "react";
import { Box, ListItemText, Paper, Slide } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { newListItemTypes } from "./newListTypes";

const styles = makeStyles({
  itemWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    alignItems: "center",
  },

  itemContainer: {
    padding: "2px 20px",
    backgroundColor: "lightgoldenrodyellow",
    boxShadow: "3px 3px 3px 3px black",
    borderRadius: "10px",
    width: "100%",
  },

  deleteIcon: {
    borderLeft: "1px solid black",
    width: "40px",
    borderRadius: "5px",
    backgroundColor: "black",
    cursor: "pointer",
    color: "lightsteelblue",
    "&:hover": {
      color: "burlywood",
    },
  },
});
export const NewsListItem: React.FC<newListItemTypes> = ({
  item,
  handleDelete,
}) => {
  const [set, setSet] = useState(true);
  const s = styles();

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
