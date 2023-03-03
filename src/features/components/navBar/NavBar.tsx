import Authorization from "../authorization/Authorization";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import ButtonHome from "../../ui/buttons/ButtonHome";
import ButtonNews from "../../ui/buttons/ButtonNews";
import ButtonProfile from "../../ui/buttons/ButtonProfile";
import {getIsLogged} from "../../../redux/auth/selectors/selectors";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { navBarStyles } from "./navBarStyles";
import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";


const isActiveStyle = {
  textDecoration: 'none',
  color:"red"
};

const NavBar = () => {
  const s = navBarStyles();
  const isLogged = useSelector(getIsLogged);

  return (
    <Box className={s.navBarWrapper}>
      <Box className={s.buttonsWrapper}>
      <NavLink  to="/" style={({ isActive }) => isActive ? isActiveStyle : {}}
>
<HomeIcon sx={{alignSelf:"flex-start", display:"flex"}} />
</NavLink>
<NavLink
  style={({ isActive }) => isActive ? isActiveStyle : {}}
  to="/news"
>
<NewspaperIcon sx={{ alignSelf: "flex-start" }} />

</NavLink>
<ButtonHome /> 
<ButtonNews />
       
      
        {isLogged ? <ButtonProfile /> : <Authorization />}
      </Box>
      <LanguageSwitcher />
    </Box>
  );
};
export default React.memo(NavBar);
