import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useStore } from "../use-alert";

export default function AlertBox() {
  const clearError = useStore((state) => state.clearError);
  const descript = useStore((state) => state.description);

  const handleClose = () => {
    clearError();
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar open={true} autoHideDuration={6000}>
      <Alert severity="warning" onClose={handleClose} action={action}>
        {descript}
      </Alert>
    </Snackbar>
  );
}
