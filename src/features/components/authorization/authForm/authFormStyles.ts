import {makeStyles} from "@mui/styles";

export const authFormStyles = makeStyles({
    paper: {
        padding: 10,
        height: "230px",
        width: "200px",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderColor: "purple",
        boxShadow: "3px 3px 3px 3px black",
        color: "black",
        backgroundColor: "lightgoldenrodyellow",
    },
    signInButton: {
        margin: "8px 0",
        backgroundColor: "black",
        color: "mediumslateblue",
    },
    logOutIcon: {
        position: "absolute",
        right: "5px",
        borderRadius: "50%",
        "&:hover": {
            color: "burlywood",
          }, 
          "&:focus": {
            color: "orange",
          },
    },
    authTitle:{
        display:"flex",
        justifyContent:"center"
    }
});