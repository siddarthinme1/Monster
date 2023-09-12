import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  TextField,
  Toolbar,
  Typography,
  Zoom,
} from "@mui/material";
import React, { forwardRef, useContext, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Copyright from "./Copyright";
import AppBarContext from "../../Context/AppBarContext";
import GoogleSignOut from "./GoogleSignOut";
import GoogleSignIn from "./GoogleSignIn";
import SignUp from "./SignUp";

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

function SignIn() {
  const { setSignInPopUp, setSignUpPopUp, signInPopUp } =
    useContext(AppBarContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  const handleSignUp = () => {
    setSignInPopUp(false);
    setSignUpPopUp(true);
  };

  const handleSignInClose = () => {
    setSignInPopUp(false);
  };

  return (
    <>
      <Dialog
        open={signInPopUp}
        aria-labelledby="sign-in-page"
        aria-describedby="sign-in-page-with-username-and-password"
        TransitionComponent={Transition}
      >
        <Toolbar>
          <Typography variant="h6">Sign In</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close"
            onClick={handleSignInClose}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Toolbar>
        <Container component="main" maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ mb: 1, mt: 0, backgroundColor: "purple" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mb: 3 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!password || !email}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item sm={12} sx={{ m: 1 }}>
                  <GoogleSignIn />
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password
                  </Link>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} />
                <Grid item>
                  <Link href="#" onClick={handleSignUp} variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mb: 3 }} />
        </Container>
      </Dialog>
      <SignUp />
    </>
  );
}

export default SignIn;
