import { useNavigate } from "react-router";
import {Button, useMediaQuery} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/material/styles";
import {useTranslation} from "react-i18next";

const HomeButton = styled(Button)({
  my: 2,
  "&:hover": {
    color: "burlywood",
  },
  color: "lightgoldenrodyellow",
  display: "flex",
  justifyContent:"flex-end",
  alignItems:"flex-end",
  height:"45px",
  minWidth:"0",
  "@media (min-width: 550px)": {
    minWidth:"120px",
  }
}) as typeof Button;

const ButtonHome: React.FC = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();

  return (
    <HomeButton onClick={() => navigate("/")}>
      {t("home")}
      <HomeIcon sx={{alignSelf:"flex-start", display:"flex"}} />
    </HomeButton>
  );
};
export default ButtonHome;
