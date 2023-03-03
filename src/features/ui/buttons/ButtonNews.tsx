
import { NavLink } from "react-router-dom";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import {useTranslation} from "react-i18next";
import {isActiveStyle, notActive} from "./buttonsStyle";

const ButtonNews: React.FC = () => {
  const { t } = useTranslation();

  return (
      <NavLink
          style={({ isActive }) => (isActive ? isActiveStyle : notActive)}
          to="/news"
      >
        {t("news")}
        <NewspaperIcon />
      </NavLink>
  );
};
export default ButtonNews;
