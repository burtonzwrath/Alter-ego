import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {AppBar, Button} from "@mui/material";
import { useSelector } from "react-redux";
import Authorization from "../authorization/Authorization";
import { getIsLogged } from "../../../redux/news/selectors";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import ButtonHome from "../../ui/buttons/ButtonHome";
import ButtonNews from "../../ui/buttons/ButtonNews";
import { makeStyles } from "@mui/styles";
import ButtonProfile from "../../ui/buttons/ButtonProfile";
import {styled} from "@mui/material/styles";


const styles = makeStyles({
  navBarWrapper: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "flex-start",
    position: "sticky",
    zIndex: 10,
  },
  buttonsWrapper: {
    flexGrow: 1,
    display: "flex",
  },
  buttonProfile: {
    my: 2,
    color: "lightgoldenrodyellow",
    display: "block",
  },
});

const NavBar = () => {
  const s = styles();
  const isLogged = useSelector(getIsLogged);

  return (
    <AppBar >
      <Container maxWidth="xl" className={s.navBarWrapper}>
        <Toolbar disableGutters>
          <Box className={s.buttonsWrapper}>
            <ButtonHome />
            <ButtonNews />
            {isLogged ? (
              <ButtonProfile/>
            ) : (
              <Authorization />
            )}
          </Box>
          <LanguageSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
