import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";
import { useNavigate } from "react-router";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Authorization from "../authorization/Authorization";
import { useSelector } from "react-redux";
import { getIsLogged } from "../../../redux/news/selectors";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import ButtonHome from "../../ui/sharedLyout/Buttons/ButtonHome";
import ButtonNews from "../../ui/sharedLyout/Buttons/ButtonNews";

const NavBar = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <AppBar
      sx={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "flex-start",
        position: "sticky",
        zIndex: 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <ButtonHome />
            <ButtonNews />
            {isLogged ? (
              <Button
                sx={{ my: 2, color: "lightgoldenrodyellow", display: "block" }}
                onClick={() => navigate("/profile")}
              >
                {t("profile")}
                <AccountBoxIcon />
              </Button>
            ) : (
              <Authorization />
            )}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
