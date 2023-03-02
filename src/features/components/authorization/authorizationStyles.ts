import {makeStyles} from "@mui/styles";

export const authorizationStyles = makeStyles({
    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 280,
        backgroundColor: "black",
        border: "2px solid #000",
        padding: 35,
        borderRadius: 10,
    },
    form: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "60px",
        right: "1px",
        zIndex:"100"
    },
    buttonWrapper: {
        display: "flex",
        position: "relative",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "flex-end",
        minWidth:"120px"
    },
    buttonHide: {
        display: "flex",
        minWidth:"120px",
        "&:hover": {
            color: "secondary",
        },
        "&:focus":{
            color:"orange"
          },
    },
});