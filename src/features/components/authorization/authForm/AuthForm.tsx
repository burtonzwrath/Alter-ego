import React, { useState } from "react";
import { Grid, Paper, TextField, Button, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthFormTypes } from "../AuthorizationTypes";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  paper: {
    padding: 10,
    height: "230px",
    width: "200px",
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    borderColor: "purple",
    boxShadow: "3px 3px 3px 3px black",
    color: "black",
    backgroundColor: "lightgoldenrodyellow",
  },
  signInButton: {
    margin: "8px 0",
    backgroundColor: "black",
    color: "mediumslateblue",
  },
  logOutIcon: {
    position: "absolute",
    right: "5px",
    borderRadius: "50%",
  },
});

const AuthForm: React.FC<AuthFormTypes> = ({
  setPassword,
  setUserName,
  userName,
  password,
  setHideForm,
}) => {
  const [visible, setVisible] = useState(false);
  const s = styles();

  const handleCloseForm = (): void => {
    setHideForm((prevState: boolean) => !prevState);
  };

  return (
    <Grid>
      <Paper className={s.paper} elevation={10}>
        <LogoutIcon className={s.logOutIcon} onClick={handleCloseForm} />
        <Grid>
          <h3>Authorization</h3>
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
          label="Password"
          placeholder="Enter password"
          fullWidth
          required
        />
        <Button className={s.signInButton} type="submit" variant="contained">
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
};

export default AuthForm;
