import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
export default function App() {
  const [showing, setIsShowing] = useState(false);
  //console.dir(window);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const id = form.elements.namedItem("username") as HTMLInputElement;
    console.log(id.value);
    if (id.value.length < 3) {
      setIsShowing(true);
      return;
    }
  };
  const handleClick = () => {};
  return (
    <>
      {showing && (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="warning">3글자 이상 입력하세요</Alert>
        </Snackbar>
      )}
      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          id="outlined-basic"
          label="to search username"
          variant="outlined"
        />

        <Button variant="contained" type="submit" onClick={handleClick}>
          버튼
        </Button>
      </form>
    </>
  );
}
