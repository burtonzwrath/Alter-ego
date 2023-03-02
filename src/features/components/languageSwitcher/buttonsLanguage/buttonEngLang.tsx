import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ButtonEngLang = styled(Button)({
    width: "3px",
    height: "20px",
    color: "lightsteelblue",
    transition: "1s",
    "&:focus": {
        backgroundColor: "gray",
        color:"orange"
    },
    "&:hover": {
        color: "burlywood",
        backgroundColor: "gray",
    },
}) as typeof Button;