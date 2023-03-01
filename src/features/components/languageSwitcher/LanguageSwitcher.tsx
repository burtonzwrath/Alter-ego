import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Stack";
import i18n from "i18next";
import {ButtonEngLang} from "./buttonsLanguage/buttonEngLang";
import {ButtonUkrLang} from "./buttonsLanguage/buttonUkrLang";


const LanguageSwitcher = () => {
  const [langEn, setLangEn] = useState(false);
  const [langUkr, setLangUkr] = useState(true);

  const switchLanguage = (e: any) => {
    if (e.target.dataset.leng === "false") {
      setLangEn((prev) => !prev);
      setLangUkr((prev) => !prev);
    }

    i18n.changeLanguage(e.target.id, (err, t) => {
      console.log(e.target.id);
      if (err) return console.log("something went wrong loading", err);
    });
  };

  return (
    <Box
      sx={{
        flexDirection:"row",
        gap: "10px",
        alignItems: "center",
        padding: "0 15px",
      }}
    >
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
