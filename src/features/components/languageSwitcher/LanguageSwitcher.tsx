import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Stack";
import i18n from "i18next";
import {makeStyles} from "@mui/styles";
import { useState} from "react";

const useStyles = makeStyles({
    buttonUkr: {
        width: "3px",
        height: "20px",
        transition:"1s",
        color:"lightgoldenrodyellow",
        "&:focus": {
           backgroundColor:"gray"}
    },
    buttonEng:{
        width: "3px",
        height: "20px",
        color:"lightskyblue",
        transition:"1s",
        "&:focus": {
            backgroundColor:"gray"}
    },
});

const LanguageSwitcher = () => {

    const [lengEn, setLengEn] = useState(false);
    const [lengUkr, setLengUkr] = useState(true);

    const s = useStyles()

    const  switchLanguage = (e:any) => {
        if (e.target.dataset.leng==="false"){
            setLengEn(prev=>!prev);
            setLengUkr(prev=>!prev);
        }

        i18n.changeLanguage(e.target.id, (err, t) => {
            if (err) return console.log("something went wrong loading", err);
        });
    }

  return (
    <Box  sx={{display:"flex",gap:"10px",flexDirection:{xs:"column", md:"row"}}}>
        <Button
            data-leng={lengUkr}
            className={s.buttonUkr}
            sx={{ backgroundColor: lengUkr === true?"gray":"black"}}
            onClick={(e)=>switchLanguage(e)}
            id={"ukr"}
            variant="text"
        > Ukr
        </Button>
        <Button
            data-leng={lengEn}
            sx={{ backgroundColor: lengEn === true?"gray":"black"}}
            className={s.buttonEng}
            onClick={(e)=>switchLanguage(e)}
            id={"eng"}
            variant="text"
        > Eng
        </Button>

    </Box>
  );
};
export default LanguageSwitcher;
