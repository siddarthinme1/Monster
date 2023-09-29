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

import {
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const actions = [
  { icon: <AddIcon />, name: "Add" },

  { icon: <SaveIcon />, name: "Save" },

  { icon: <PrintIcon />, name: "Print" },

  { icon: <ShareIcon />, name: "Share" },
];

export default function SpeedDialX() {
  const [open, setOpen] = React.useState(false);

  const [currentPage, setCurrentPage] = useState("default"); // Add a state for current page

  const [dialogOpen, setDialogOpen] = useState(false); // Add state for dialog

  const { trigger } = React.useContext(AppBarContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);

    // Open the dialog when a button is clicked

    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    // Close the dialog when needed

    setDialogOpen(false);
  };

  // Render different pages based on the currentPage state

  const renderPage = () => {
    switch (currentPage) {
      case "Add":
        return <div>Add Page Content</div>;

      case "Save":
        return <div>Save Page Content</div>;

      case "Print":
        return <div>Print Page Content</div>;

      case "Share":
        return <div>Share Page Content</div>;

      default:
        return <div>Default Page Content</div>;
    }
  };

  return (
    <Slide appear={false} direction="left" in={!trigger}>
      <div>
        {renderPage()}

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
              onClick={() => handlePageChange(action.name)} // Change the current page on click
            />
          ))}
        </SpeedDial>

        {/* Dialog */}

        <Dialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>{currentPage} Dialog</DialogTitle>

          <DialogContent>
            {/* You can put content specific to the current page inside the dialog */}

            <div>Content for {currentPage}</div>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleDialogClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Slide>
  );
}
