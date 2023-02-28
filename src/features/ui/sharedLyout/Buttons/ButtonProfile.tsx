import { Button } from "@mui/material"
import { t } from "i18next"
import { useNavigate } from "react-router"
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const ButtonProfile:React.FC = () =>{
    const navigate = useNavigate()
     return(
            <Button
            onClick={() => navigate("/profile")}
            sx={{ my: 2, color: "lightgoldenrodyellow", display: "block" }}
        >
            {t('profile')}
         <AccountBoxIcon/>
        </Button>
)
}
export  default ButtonProfile