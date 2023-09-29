import React, { useContext, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Paper, Slide } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import AppBarContext from "../../Context/AppBarContext";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import InfoIcon from "@mui/icons-material/Info";

function LabelBottomNavigation() {
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
          />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Library" icon={<LibraryBooksIcon />} />
          <BottomNavigationAction
            onClick={handleShowAbout}
            label="About"
            icon={<InfoIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Slide>
  );
}

export default LabelBottomNavigation;
