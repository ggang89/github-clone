import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useStore } from "../use-alert";


export default function Form() {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const form = e.currentTarget;
   const id = form.elements.namedItem("username") as HTMLInputElement;
   console.log(id.value);
   if (id.value.length < 3) {
     //setIsShowing({ isOpen: true, text: "세글자 이상 입력하세요" });
     setError("3글자이상 입력하세요") 
       
     return;
   }
   if (id.value.length > 10) {
     //setIsShowing({ isOpen: true, text: "10자 이하로 입력하세요" });
     return;
   }
 };
const setError = useStore((state)=>(state.setError))
  return (
    <>
      <form
        className="bg-slate-400 w-[600px] h-[300px] gap-2 m-auto flex items-stretch "
        onSubmit={onSubmit}
      >
        <TextField
          className="flex-1"
          name="username"
          id="outlined-basic"
          label="to search username"
          variant="outlined"
        />

        <Button
          className="w-[80px] h-[53px] self-start "
          variant="contained"
          type="submit"
        >
          버튼
        </Button>
      </form>
    </>
  );
}
