import { Button } from "@mui/material";
import { t } from "i18next";
import { useNavigate } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/material/styles";

const HomeButton = styled(Button)({
  my: 2,
  color: "lightgoldenrodyellow",
  display: "block",
}) as typeof Button;

const ButtonHome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HomeButton onClick={() => navigate("/")}>
      {t("home")}
      <HomeIcon />
    </HomeButton>
  );
};
export default ButtonHome;
