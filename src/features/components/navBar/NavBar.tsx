import Authorization from "../authorization/Authorization";
import { getIsLogged } from "../../../redux/news/selectors/selectors";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import ButtonHome from "../../ui/buttons/ButtonHome";
import ButtonNews from "../../ui/buttons/ButtonNews";
import { makeStyles } from "@mui/styles";
import ButtonProfile from "../../ui/buttons/ButtonProfile";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const styles = makeStyles({
  navBarWrapper: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 10,
    width: "100%",
    minHeight: "50px",
    position: "fixed",
    top: "0",
    maxWidth: "1400px",
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
export default NavBar;
