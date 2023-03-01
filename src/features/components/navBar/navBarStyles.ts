import {makeStyles} from "@mui/styles";

export const navBarStyles = makeStyles({
    navBarWrapper: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 10,
        width: "100%",
        minHeight: "50px",
        position: "fixed",
        top: "0",
        maxWidth: "1400px",
    },
    buttonsWrapper: {
        display: "flex",
        flexDirection:"column",
        padding:"9px"
    },
    buttonProfile: {
        my: 2,
        color: "lightgoldenrodyellow",
        display: "block",
    }, "@media (min-width: 450px)": {
        buttonsWrapper: {
         flexDirection:"row",
        }
    }
});