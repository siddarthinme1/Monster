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
import { useNavigate } from "react-router-dom";

function LabelBottomNavigation() {
  const navigate = useNavigate();
  const { trigger, setShowCardPage } = useContext(AppBarContext);

  const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const handleShowHome = () => {
    setShowCardPage(true);
  };

  const handleShowAbout = () => {
    setShowCardPage(false);
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
            onClick={handleShowHome}
            label="Home"
            icon={<HomeIcon />}
            onClick={() => navigate("home")}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteIcon />}
            LinkComponent={"/recipe"}
            onClick={() => navigate("recipe")}
          />
          <BottomNavigationAction
            label="Library"
            icon={<LibraryBooksIcon />}
            onClick={() => navigate("splitwise")}
          />
          <BottomNavigationAction
            onClick={handleShowAbout}
            label="About"
            icon={<InfoIcon />}
            onClick={() => navigate("about")}
          />
        </BottomNavigation>
        <SpeedDialX />
      </Paper>
    </Slide>
  );
}

export default LabelBottomNavigation;
