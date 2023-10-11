import React, { useContext, useState } from "react";
import {
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import AddForm from "../Pages/AddForm";
import SharePage from "../Pages/SharePage";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AppBarContext from "../../Context/AppBarContext";
const actions = [
  { icon: <AddIcon />, name: "Add" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function SpeedDialX() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("default");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { trigger } = useContext(AppBarContext);

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

  const renderPage = () => {
    switch (currentPage) {
      case "Add":
        return <AddForm />;
      case "Save":
        return <div>Save Page Content</div>;
      case "Print":
        return <Button title="print" onClick={() => window.print()}></Button>;
      case "Share":
        return <SharePage />;
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
          direction="left"
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

        <Dialog open={dialogOpen}>
          <DialogTitle>{currentPage}</DialogTitle>
          <DialogContent>{renderPage()}</DialogContent>
          <DialogActions>
            <Button title="closeCurrentPage" onClick={handleDialogClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Slide>
  );
}
