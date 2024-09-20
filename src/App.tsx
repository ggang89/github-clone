import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function App() {
  //console.dir(window);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const id = form.elements.namedItem("username") as HTMLInputElement;
    console.log(id.value);
    if (id.value.length < 3) {
      alert("username은 3글자 이상이어야 합니다.")
    } 
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField
        name="username"
        id="outlined-basic"
        label="to search username"
        variant="outlined"
      />
      <Button variant="contained" type="submit">
        버튼
      </Button>
    </form>
  );
}
