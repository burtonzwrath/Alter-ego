import {makeStyles} from "@mui/styles";

export const newListItemStyles = makeStyles({
    itemWrapper: {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        alignItems: "center",
    },

    itemContainer: {
        padding: "2px 20px",
        backgroundColor: "lightgoldenrodyellow",
        boxShadow: "3px 3px 3px 3px black",
        borderRadius: "10px",
        width: "100%",
    },

    deleteIcon: {
        borderLeft: "1px solid black",
        width: "40px",
        borderRadius: "5px",
        backgroundColor: "black",
        cursor: "pointer",
        color: "lightsteelblue",
        "&:hover": {
            color: "burlywood",
        },
    },
});