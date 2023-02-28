import { Button } from "@mui/material"
import { t } from "i18next"
import { useNavigate } from "react-router"
import HomeIcon from "@mui/icons-material/Home";


const ButtonHome:React.FC = () =>{
    const navigate = useNavigate()
     return(
            <Button
            onClick={() => navigate("/")}
            sx={{ my: 2, color: "lightgoldenrodyellow", display: "block" }}
        >
            {t('home')}
            <HomeIcon />
        </Button>
)
}
export  default ButtonHome