import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function App() {
  //console.dir(window);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.dir(form);
    const id = form.elements.namedItem("username") as HTMLInputElement;
    console.log(id.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField
        name="username"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button variant="contained" type="submit">
        버튼
      </Button>
    </form>
  );
}
