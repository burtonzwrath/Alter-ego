
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {useTranslation} from "react-i18next";
import {isActiveStyle, notActive} from "./buttonsStyle";

const ButtonHome: React.FC = () => {
  const {t} = useTranslation()
  return (
      <NavLink
          style={({ isActive }) => (isActive ? isActiveStyle : notActive)}
          to="/"
      >
        {t("home")}
        <HomeIcon  />
      </NavLink>
  );
};
export default ButtonHome;
