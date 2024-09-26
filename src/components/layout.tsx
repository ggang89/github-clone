import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Form from "./form"

export function Layout() {
  return (
    <>
    
      <CssBaseline />
     <Form/>
      <Outlet />
    </>
  );
}
