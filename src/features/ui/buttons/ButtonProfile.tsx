import { Button } from "@mui/material";
import { t } from "i18next";
import { useNavigate } from "react-router";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { styled } from "@mui/material/styles";

const ProfileButton = styled(Button)({
  my: 2,
  color: "lightgoldenrodyellow",
  display: "block",
}) as typeof Button;

const ButtonProfile: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ProfileButton onClick={() => navigate("/profile")}>
      {t("profile")}
      <AccountBoxIcon />
    </ProfileButton>
  );
};
export default ButtonProfile;
