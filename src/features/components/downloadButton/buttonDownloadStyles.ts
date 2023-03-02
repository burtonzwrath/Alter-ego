import { makeStyles } from "@mui/styles";

export const buttonDownloadStyles = makeStyles({
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    zIndex: "1",
    width: "160px",
    borderRadius: "5px",
    "&:hover": {
      color: "burlywood",
    },
  },
});
