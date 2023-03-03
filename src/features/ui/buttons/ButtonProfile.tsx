import {NavLink} from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";
import {useTranslation} from "react-i18next";
import {isActiveStyle, notActive} from "./buttonsStyle";


export const ButtonProfile: React.FC = () => {
  const { t } = useTranslation();

  return (
      <NavLink
          style={({ isActive }) =>
              isActive ? isActiveStyle : notActive
          }
          to="/profile"
      >
        {t("profile")}
        <AccountBoxIcon />
      </NavLink>
  )
};
export default ButtonProfile;
