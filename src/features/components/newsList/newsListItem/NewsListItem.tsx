import React, { useState } from "react";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { Box, ListItemText, Paper, Slide } from "@mui/material";
import { newListItemTypes } from "./newListTypes";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({

  itemWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    alignItems: "center",
  },
  deleteIcon: {
    borderLeft: "1px solid black",
    width: "40px",
    borderRadius: "5px",
    backgroundColor: "black",
    cursor: "pointer",
    color: "lightgoldenrodyellow",
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

        <Box sx={{ padding: "2px 20px", backgroundColor:"lightgoldenrodyellow" , width:"100%",
            boxShadow: "3px 3px 3px 3px black",
            borderRadius:"10px"}}>
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
