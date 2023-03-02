import React, { useState } from "react";
import SignInButton from "../../../ui/buttons/SignInButton";
import {
  Grid,
  Box,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LogoutIcon from "@mui/icons-material/Logout";
import { authFormStyles } from "./authFormStyles";
import { AuthFormTypes } from "../authorizationTypes";

const AuthForm: React.FC<AuthFormTypes> = ({
  setPassword,
  setUserName,
  userName,
  password,
  setHideForm,
}) => {
  const [visible, setVisible] = useState(false);
  const s = authFormStyles();
  const handleCloseForm = (): void => {
    setHideForm((prevState: boolean) => !prevState);
  };

  return (
    <Grid>
      <Box className={s.paper}>
        <LogoutIcon className={s.logOutIcon} onClick={handleCloseForm} />
        <Grid className={s.authTitle}>
          <Typography variant="h6">Authorization</Typography>
        </Grid>
        <TextField
          size="small"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          size="small"
          value={password}
          label="Password"
          placeholder="Enter password"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
          type={visible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment
                onClick={() => setVisible((i) => !i)}
                position={"end"}
              >
                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </InputAdornment>
            ),
          }}
        />
        <SignInButton />
      </Box>
    </Grid>
  );
};

export default AuthForm;
