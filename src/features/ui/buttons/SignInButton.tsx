import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const SignInButton = styled(Button)({
    margin: "8px 0",
    backgroundColor: "black",
    color: "lightsteelblue" ,
    "&:hover": {
        color: "burlywood",
        backgroundColor:"black"
    },  "&:focus":{
        color:"orange"
      },
}) as typeof Button;

const ButtonProfile: React.FC = () => {
    const navigate = useNavigate();

    return (
        <SignInButton type="submit" onClick={() => navigate("/profile")}>
           Sign IN
        </SignInButton>
    );
};
export default ButtonProfile;
