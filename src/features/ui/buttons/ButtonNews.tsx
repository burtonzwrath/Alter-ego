import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const NewsButton = styled(Button)({
  my: 2,
  color: "lightgoldenrodyellow",
  display: "flex",
  justifyContent:"flex-end",
  minWidth:"120px",
  alignItems:"flex-end"
}) as typeof Button;

const ButtonNews: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <NewsButton onClick={() => navigate("/news")}>
      {t("news")}
      <NewspaperIcon sx={{alignSelf:"flex-start"}}/>
    </NewsButton>
  );
};
export default ButtonNews;
