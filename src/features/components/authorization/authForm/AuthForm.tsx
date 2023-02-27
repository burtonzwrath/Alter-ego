import React, { useState } from "react";
import { Grid, Paper, TextField, Button, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LogoutIcon from "@mui/icons-material/Logout";
const AuthForm:React.FC<any> = ({
  setPassword,
  setUserName,
  userName,
  password,
  setHideForm,
}) => {
  const [visible, setVisible] = useState(false);
  const paperStyle:any = {
    padding: 10,
    height: "230px",
    width: "200px",
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    borderColor: "purple",
    boxShadow: "3px 3px 3px 3px black",
    color:"black",
    backgroundColor: "lightgoldenrodyellow"
  };
  const btnstyle = { margin: "8px 0", backgroundColor:"black", color:"mediumslateblue" };

  const handleCloseForm = (): void => {
    setHideForm((prevState: boolean) => !prevState);
  };


  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <LogoutIcon
          onClick={handleCloseForm}
          sx={{ position: "absolute", right: "5px", borderRadius: "50%" }}
        />
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
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
};

export default AuthForm;
