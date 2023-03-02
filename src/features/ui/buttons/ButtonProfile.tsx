import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const ProfileButton = styled(Button)({
  my: 2,
  "&:hover": {
    color: "secondary",
  },
  "&:focus":{
    color:"orange"
  },
  color: "primary",
  display: "flex",
  justifyContent: "flex-end",
  height: "45px",
  alignItems: "flex-end",
  minWidth:"120",
}) as typeof Button;

const ButtonProfile: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <ProfileButton onClick={() => navigate("/profile")}>
      {t("profile")}
      <AccountBoxIcon sx={{ alignSelf: "flex-start" }} />
    </ProfileButton>
  );
};
export default ButtonProfile;
