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

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

function SignUp() {
  const { setSignInPopUp, setSignUpPopUp, signUpPopUp } =
    useContext(AppBarContext);
  const [agree, setAgree] = useState(false);

  const handleSignUpClose = () => {
    setSignUpPopUp(false);
  };

  const handleSignIn = () => {
    setSignUpPopUp(false);
    setSignInPopUp(true);
  };

  const handleSubmit = () => {};

  const handleTermsAndCond = () => {
    setAgree(!agree);
  };

  return (
    <>
      <Dialog
        open={signUpPopUp}
        aria-labelledby="sign-in-page"
        aria-describedby="sign-in-page-with-username-and-password"
        TransitionComponent={Transition}
      >
        <Toolbar>
          <Typography variant="h6">Sign Up</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close"
            onClick={handleSignUpClose}
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
                  <Link href="#" onClick={handleSignIn} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mb: 3 }} />
        </Container>
      </Dialog>
    </>
  );
}

export default SignUp;
