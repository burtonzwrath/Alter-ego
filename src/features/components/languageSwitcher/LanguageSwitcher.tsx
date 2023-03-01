import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Stack";
import i18n from "i18next";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const ButtonUkrLang = styled(Button)({
  width: "3px",
  height: "20px",
  transition: "1s",
  color: "lightgoldenrodyellow",
  "&:focus": {
    backgroundColor: "gray",
  },
}) as typeof Button;

const ButtonEngLang = styled(Button)({
  width: "3px",
  height: "20px",
  color: "lightskyblue",
  transition: "1s",
  "&:focus": {
    backgroundColor: "gray",
  },
}) as typeof Button;

const useStyles = makeStyles({
  langWrapper: {
    display: "flex",
    gap: "10px",
  },
});

const LanguageSwitcher = () => {
  const [langEn, setLangEn] = useState(false);
  const [langUkr, setLangUkr] = useState(true);
  const s = useStyles();

  const switchLanguage = (e: any) => {
    if (e.target.dataset.leng === "false") {
      setLangEn((prev) => !prev);
      setLangUkr((prev) => !prev);
    }

    i18n.changeLanguage(e.target.id, (err, t) => {
      if (err) return console.log("something went wrong loading", err);
    });
  };

  return (
    <Box className={s.langWrapper}>
      <ButtonUkrLang
        data-leng={langUkr}
        sx={{ backgroundColor: langUkr ? "gray" : "black" }}
        onClick={(e) => switchLanguage(e)}
        id={"ukr"}
        variant="text"
      >
        Ukr
      </ButtonUkrLang>
      <ButtonEngLang
        data-leng={langEn}
        sx={{ backgroundColor: langEn ? "gray" : "black" }}
        onClick={(e) => switchLanguage(e)}
        id={"eng"}
        variant="text"
      >
        Eng
      </ButtonEngLang>
    </Box>
  );
};
export default LanguageSwitcher;
