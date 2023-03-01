import { Button } from "@mui/material";
import { t } from "i18next";
import { useNavigate } from "react-router";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { styled } from "@mui/material/styles";

const NewsButton = styled(Button)({
    my: 2,
    color: "lightgoldenrodyellow",
    display: "block",
}) as typeof Button;

const ButtonNews: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NewsButton onClick={() => navigate("/news")}>
      {t("news")}
      <NewspaperIcon />
    </NewsButton>
  );
};
export default ButtonNews;
