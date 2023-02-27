import React, { useState } from "react";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { Box, Grid, ListItemText, Paper, Slide } from "@mui/material";
import {newListItemTypes} from "./newListTypes";
export const NewsListItem:React.FC<newListItemTypes> = ({ item, handleDelete }) => {
const [set, setSet] = useState(true);

  return (
    <Slide in={set} timeout={1000} direction="left">
      <Paper
        elevation={3}
        sx={{
          width: "70%",
          marginBottom: "10px",
          backgroundColor: "lightgoldenrodyellow",
          boxShadow: "3px 3px 3px 3px black",
        }}
      >
        <Box sx={{ padding: "2px 20px" }}>
          <Grid
            // container
            // spacing={1}
            // justify="space-around"
            // alignItems="center"
            // p={1}
            // m={1}
          >
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
          </Grid>
        </Box>
      </Paper>
    </Slide>
  );
};
