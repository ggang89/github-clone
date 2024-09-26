import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

export function Layout() {
  return (
    <>
    
      <CssBaseline />
      <h1>2</h1>
      <Outlet />
    </>
  );
}
