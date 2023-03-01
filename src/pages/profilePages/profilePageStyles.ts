import {makeStyles} from "@mui/styles";

export const profilePageStyles = makeStyles({
    profileWrapper: {
        marginTop: "60px",
        minHeight: "800px",
    },
    profileImg: {
        width:"300px",
        height:"200px",
        borderRadius: "20px",
        marginTop:"20px"
    },
    "@media (min-width: 960px)": {
        profileImg: {
            width:"800px",
            height:"300px",
        },

    },
});

