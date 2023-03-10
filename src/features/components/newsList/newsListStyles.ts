import { makeStyles } from "@mui/styles";

export const newsListStyles = makeStyles({
  list: {
    padding: "0 30px",
    overflowX: "hidden",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "1400px",
    alignItems: "center",
    minHeight: "800px",
    marginTop: "140px",
    "@media (min-width: 450px)": {
      marginTop: "60px",
    },
  },
});
