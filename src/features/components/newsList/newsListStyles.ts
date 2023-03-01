import { makeStyles } from "@mui/styles";

export const newsListStyles = makeStyles({
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "1400px",
    alignItems: "center",
    minHeight: "800px",
    margin: "70px",
    marginTop: "140px",
    "@media (min-width: 450px)": {
        margin: "60px",
    },
  },
});
