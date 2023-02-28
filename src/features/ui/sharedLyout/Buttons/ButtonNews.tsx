import { Button } from "@mui/material"
import { t } from "i18next"
import { useNavigate } from "react-router"
import NewspaperIcon from "@mui/icons-material/Newspaper";

const ButtonNews:React.FC = () =>{
    const navigate = useNavigate()
     return(
            <Button
            onClick={() => navigate("/news")}
            sx={{ my: 2, color: "lightgoldenrodyellow", display: "block" }}
        >
            {t('news')}
            <NewspaperIcon />
        </Button>
)
}
export  default ButtonNews