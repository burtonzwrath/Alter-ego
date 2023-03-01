import Authorization from "../authorization/Authorization";
import { getIsLogged } from "../../../redux/news/selectors/selectors";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import ButtonHome from "../../ui/buttons/ButtonHome";
import ButtonNews from "../../ui/buttons/ButtonNews";
import ButtonProfile from "../../ui/buttons/ButtonProfile";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import {navBarStyles} from "./navBarStyles";
import React from "react";

const NavBar = () => {
  const s = navBarStyles();
  const isLogged = useSelector(getIsLogged);

  return (
    <Box className={s.navBarWrapper}>
      <Box className={s.buttonsWrapper}>
        <ButtonHome />
        <ButtonNews />
        {isLogged ? <ButtonProfile /> : <Authorization />}
      </Box>
      <LanguageSwitcher />
    </Box>
  );
};
export default React.memo(NavBar) ;
