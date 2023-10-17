import React, { useState } from "react";

import AppBarContext from "./AppBarContext";

import { useScrollTrigger } from "@mui/material";

const AppBarStateProvider = (props) => {
  const trigger = useScrollTrigger();
  const [state, setState] = useState({
    darkMode: false,
    theme: "",
    settings: false,
    signInPopUp: false,
    signUpPopUp: false,
    location: null,
    isAuthenticated: false,
    showCardPage: true,
    showAboutPage: false,
    cardData: [],
    signInSignUpPopUp: false,
  });

  const value = {
    trigger,
    ...state,
    setTheme: (theme) => setState({ ...state, theme }),
    setDarkMode: (darkMode) => setState({ ...state, darkMode }),
    setSettings: (settings) => setState({ ...state, settings }),
    setSignInPopUp: (signInPopUp) => setState({ ...state, signInPopUp }),
    setSignUpPopUp: (signUpPopUp) => setState({ ...state, signUpPopUp }),
    setLocation: (location) => setState({ ...state, location }),
    setIsAuthenticated: (isAuthenticated) =>
      setState({ ...state, isAuthenticated }),
    setShowCardPage: (showCardPage) => setState({ ...state, showCardPage }),
    setShowAboutPage: (showAboutPage) => setState({ ...state, showAboutPage }),
    setCardData: (cardData) => setState({ ...state, cardData }),
    setSignInSignUpPopUp: (signInSignUpPopUp) =>
      setState({ ...state, signInSignUpPopUp }),
  };

  return (
    <AppBarContext.Provider value={value}>
      {props.children}
    </AppBarContext.Provider>
  );
};

export default AppBarStateProvider;
