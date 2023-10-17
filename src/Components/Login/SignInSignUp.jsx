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
import SignUp from "../etc/SignUp";

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

function SignInSignUp() {
  const { signInSignUpPopUp, setSignInSignUpPopUp } = useContext(AppBarContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleTermsAndCond = () => {
    setAgree(!agree);
  };

  const handleSubmit = () => {
    if (isSignIn) {
    } else {
    }
  };

  const handleChangePage = () => {
    setIsSignIn(!isSignIn);
  };

  const handleDialogClose = () => {
    setSignInSignUpPopUp(false);
  };

  const SignInPage = (
    <>
      <Toolbar>
        <Typography variant="h6">Sign In</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={handleDialogClose}
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
              title="signIn"
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
                <Link href="#" onClick={handleChangePage} variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mb: 3 }} />
      </Container>
    </>
  );

  const SignUpPage = (
    <>
      <Toolbar>
        <Typography variant="h6">Sign Up</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={handleDialogClose}
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
            sx={{ mt: 1.5, mb: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="family-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      required
                      onClick={handleTermsAndCond}
                    />
                  }
                  label="I agree to the terms and conditions as set out by the user agreement."
                />
              </Grid>
            </Grid>
            <Button
              title="signUp"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!agree}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" onClick={handleChangePage} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mb: 3 }} />
      </Container>
    </>
  );

  return (
    <>
      <Dialog
        open={signInSignUpPopUp}
        aria-labelledby="sign-in-page"
        aria-describedby="sign-in-page-with-username-and-password"
        TransitionComponent={Transition}
      >
        {isSignIn ? SignUpPage : SignInPage}
      </Dialog>
    </>
  );
}

export default SignInSignUp;
