import {
  AppBar,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogTitle,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function SignIn(props) {
  const { signInPopUp, setSignInPopUp, setSignUpPopUp } = props;
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
              onSubmit={handleSubmit}
              noValidate
              sx={{ mb: 4 }}
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
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password
                  </Link>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} />
                <Grid item>
                  <Link onClick={handleSignUp} variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Dialog>
    </>
  );
}

export default SignIn;
