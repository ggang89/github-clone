import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

export function Layout() {
  return (
    <>
    
      <CssBaseline />
     
      <Outlet />
    </>
  );
}
