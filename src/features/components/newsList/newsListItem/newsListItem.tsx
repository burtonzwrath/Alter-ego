import React, { useState } from "react";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { Box, Grid, ListItemText, Paper, Slide } from "@mui/material";
import { newListItemTypes } from "./newListTypes";
export const NewsListItem: React.FC<newListItemTypes> = ({
  item,
  handleDelete,
}) => {
  const [set, setSet] = useState(true);

  return (
    <Slide in={set} timeout={1000} direction="left">
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          marginBottom: "10px",
          backgroundColor: "lightgoldenrodyellow",
          boxShadow: "3px 3px 3px 3px black",
        }}
      >
        <Box sx={{ padding: "2px 20px" }}>
          <Box sx={{display:"flex", justifyContent:"space-between",gap:"10px", alignItems:"center"}}>
            <ListItemText>{item.title}</ListItemText>
            <DeleteSweepOutlinedIcon
              sx={{
                borderLeft: "1px solid black",
                width: "40px",
                borderRadius: "5px",
                backgroundColor: "black",
                cursor: "pointer",
                color: "lightgoldenrodyellow",
              }}
              onClick={(e) => {
                handleDelete(item.id);
                setSet((prev) => !prev);
              }}
            >
              delete
            </DeleteSweepOutlinedIcon>
          </Box>
        </Box>
      </Paper>
    </Slide>
  );
};
