import {makeStyles} from "@mui/styles";

export const HomePagestyles = makeStyles({
    homeWrapper: {
        minHeight: "800px",
        padding:"60px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },

    typographyWrapper: {
        display: "flex",
        gap: "25px",
    },

    homeImg: {
        width:"300px",
        height:"200px",
        borderRadius: "20px",
    },
    "@media (min-width: 960px)": {
        homeImg: {
            width:"800px",
            height:"500px",
        },
        typography:{

        }
    }
});