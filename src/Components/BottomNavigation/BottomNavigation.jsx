import React, { useContext, useState } from "react";

import BottomNavigation from "@mui/material/BottomNavigation";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { Paper, Slide } from "@mui/material";

import AppBarContext from "../../Context/AppBarContext";

import HomeIcon from "@mui/icons-material/Home";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import InfoIcon from "@mui/icons-material/Info";

import SpeedDialX from "../SpeedDial/SpeedDialX";

import FoodBankIcon from "@mui/icons-material/FoodBank";

import { useNavigate } from "react-router-dom";

function LabelBottomNavigation() {
  const navigate = useNavigate();

  const { trigger, setShowCardPage } = useContext(AppBarContext);

  const [value, setValue] = useState(0);

  const handleShowHome = () => {
    setShowCardPage(true);
    navigate("/");
  };

  const handleShowAbout = () => {
    setShowCardPage(false);
    navigate("about");
  };

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={handleShowHome}
          />

          <BottomNavigationAction
            label="Recipe"
            icon={<FoodBankIcon />}
            onClick={() => navigate("recipe")}
          />

          <BottomNavigationAction
            label="Library"
            icon={<LibraryBooksIcon />}
            onClick={() => navigate("splitwise")}
          />

          <BottomNavigationAction
            label="About"
            icon={<InfoIcon />}
            onClick={handleShowAbout}
          />
        </BottomNavigation>

        <SpeedDialX />
      </Paper>
    </Slide>
  );
}

export default LabelBottomNavigation;
