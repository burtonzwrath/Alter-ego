import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ButtonUkrLang = styled(Button)({
    width: "3px",
    height: "20px",
    transition: "1s",
    color: "lightgoldenrodyellow",
    "&:focus": {
        backgroundColor: "gray",
    },
    "&:hover": {
        color: "burlywood",
        backgroundColor: "gray",
    },
}) as typeof Button;
