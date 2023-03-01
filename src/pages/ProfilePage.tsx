import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getLocalStorageItem } from "../helpers/locatStorage";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@mui/styles";
import Box from "@mui/material/Stack";
import { Typography } from "@mui/material";
import profile from "../assets/image/profile.png";

const style = makeStyles({
    profileWrapper:{
        marginTop:"30px",
        minHeight:"800px"
    },
    profileImg: {
        borderRadius:"20px",
        width:"1000px",
        height:"400"
    }
})

const ProfilePage = () => {
  const navigate = useNavigate();
  const isLogged = getLocalStorageItem();
    const { t } = useTranslation();
  const s = style()

  useEffect(() => {
    if (!isLogged) navigate("/");
  }, [isLogged]);

  return (
    <Box className={s.profileWrapper}>
      <Typography align="center" variant="h3"> {t("profile")}</Typography>
        <img className={s.profileImg} src={profile} alt="ukraine" />
    </Box>
  );
};

export default ProfilePage;
