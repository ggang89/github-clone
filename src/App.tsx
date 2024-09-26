import React from "react";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Form from "./components/form";

export default function App() {
  const [showing, setIsShowing] = useState({ isOpen: false, text: "" });

  //console.dir(window);
  
  const handleClose = () => {
    setIsShowing({ isOpen: false, text: "" });
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
    <>
      {showing.isOpen && (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="warning" onClose={handleClose} action={action}>
            {showing.text}
          </Alert>
        </Snackbar>
      )}
      <Form />
    </>
  );
}
