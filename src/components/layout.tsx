import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Form from "./form"
import AlertBox from "./alertbox";
import { useStore } from "../use-alert";

export function Layout() {
  const isShowing = useStore(state => state.isShowing);
  return (
    <>
    
      <CssBaseline />
      <Form />
      {isShowing && <AlertBox/>}
      <Outlet />
    </>
  );
}
