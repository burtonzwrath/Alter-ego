import {makeStyles} from "@mui/styles";

export const profilePageStyles = makeStyles({
    profileWrapper: {
        marginTop: "140px",
        minHeight: "800px",
    },
    profileImg: {
        width:"300px",
        borderRadius: "20px",
        margin:"20px"
    },
    "@media (min-width: 960px)": {
        profileImg: {
            width:"800px",
        },
            profileWrapper: {
                marginTop: "60px",
            },

    },
});

