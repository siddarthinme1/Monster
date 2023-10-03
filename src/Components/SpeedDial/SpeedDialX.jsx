import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AppBarContext from "../../Context/AppBarContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Chip,
  Box,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";

const actions = [
  { icon: <AddIcon />, name: "Add" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const shareIcons = [
  { icon: <WhatsAppIcon fontSize="large" />, name: "Add" },
  { icon: <TwitterIcon fontSize="large" />, name: "Save" },
  { icon: <FacebookIcon fontSize="large" />, name: "Print" },
  { icon: <InstagramIcon fontSize="large" />, name: "Share" },
  { icon: <GitHubIcon fontSize="large" />, name: "Share" },
];

export default function SpeedDialX() {
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState("default");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { trigger } = React.useContext(AppBarContext);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const [text, setText] = useState("https://siddarthinme1.github.io/Monster/");

  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(text);
  };

  const handleShare = () => {
    window.open("https://wa.me/");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Add":
        return <div>Add Page</div>;
      case "Save":
        return <div>Save Page Content</div>;
      case "Print":
        return <div>Print Page Content</div>;
      case "Share":
        return (
          <div>
            <Box
              sx={{
                borderRadius: 4,
                padding: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {shareIcons.map((shareIcon, index) => (
                <IconButton
                  key={index}
                  color="inherit"
                  fontSize="large"
                  onClick={handleShare}
                >
                  {shareIcon.icon}
                </IconButton>
              ))}
            </Box>
            <Box
              sx={{
                borderRadius: 4,
                padding: 2,
                display: "flex",
                alignItems: "center",
                border: { xs: "none", sm: "1px solid black" },
              }}
            >
              <Typography
                type="text"
                value={text}
                noWrap
                onChange={inputHandler}
                sx={{ flex: 1, overflow: "hidden" }}
              >
                {text}
              </Typography>

              <IconButton onClick={copy} color="inherit">
                <ContentCopyIcon />
              </IconButton>
            </Box>
          </div>
        );
      default:
        return <div>Default Page Content</div>;
    }
  };

  return (
    <Slide appear={false} direction="left" in={!trigger}>
      <div>
        <SpeedDial
          ariaLabel="SpeedDial example"
          sx={{ position: "fixed", bottom: 75, right: 16 }}
          icon={<SpeedDialIcon icon={<AddIcon />} openIcon={<EditIcon />} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handlePageChange(action.name)}
            />
          ))}
        </SpeedDial>
        <Dialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>{currentPage}</DialogTitle>
          <DialogContent>{renderPage()}</DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Slide>
  );
}
