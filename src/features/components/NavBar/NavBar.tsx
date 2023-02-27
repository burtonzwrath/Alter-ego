import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { AppBar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Authorization from "../authorization/Authorization";
import { useSelector } from "react-redux";
import {getIsLogged} from "../../../redux/news/selectors";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import {useTranslation} from "react-i18next";

const  NavBar = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <AppBar sx={{backgroundColor:"black",  display: "flex", justifyContent: "flex-start", position:"sticky",zIndex:10 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display:"flex" }}>
            <Button
              onClick={() => navigate("/")}
              sx={{ my: 2, color: "lightgoldenrodyellow", display: "block" }}
            >
              {t('home')}
               <HomeIcon />
            </Button>
            <Button
              onClick={() => navigate("/news")}
              sx={{ my: 2, color: "lightgoldenrodyellow", display: "block" }}
            >
              {t('news')}<NewspaperIcon />
            </Button>
            {isLogged ? (
                <Link to={"/profile"}>
                  {t('profile')} <AccountBoxIcon />{" "}
                </Link>
            ) : (
                <Authorization />
            )}
          </Box>

          <Box sx={{ flexGrow: 0, display:"flex" }}>
            <LanguageSwitcher/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar