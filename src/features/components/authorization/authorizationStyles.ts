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
    },
    buttonWrapper: {
        display: "flex",
        position: "relative",
        cursor: "pointer",
        alignItems: "center",
    },
    buttonHide: {
        height: 22,
        display: "flex",
        color: "lightsteelblue",
        justifyContent: "center",
        "&:hover": {
            color: "burlywood",
        },
        minWidth:"0",
        "@media (min-width: 550px)": {
            minWidth:"120px",
        }
    },
});