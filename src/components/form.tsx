import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


export default function Form() {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const form = e.currentTarget;
   const id = form.elements.namedItem("username") as HTMLInputElement;
   console.log(id.value);
   if (id.value.length < 3) {
     //setIsShowing({ isOpen: true, text: "세글자 이상 입력하세요" });
     return;
   }
   if (id.value.length > 10) {
     //setIsShowing({ isOpen: true, text: "10자 이하로 입력하세요" });
     return;
   }
 };
 
  return (
    <>
      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          id="outlined-basic"
          label="to search username"
          variant="outlined"
        />

        <Button variant="contained" type="submit" >
          버튼
        </Button>
      </form>
    </>
  );
}
