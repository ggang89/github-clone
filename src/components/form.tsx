import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useStore } from "../use-alert";
import { useState, useEffect } from "react";

export default function Form() {
  const [search, setSearch] = useState("ggang89");
  const [list, setList] = useState([]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const id = form.elements.namedItem("username") as HTMLInputElement;
    console.log(id);
    if (id.value.length < 3) {
      //setIsShowing({ isOpen: true, text: "세글자 이상 입력하세요" });
      setError("3글자이상 입력하세요");
      return;
    }
    if (id.value.length > 10) {
      //setIsShowing({ isOpen: true, text: "10자 이하로 입력하세요" });
      return;
    }
    setSearch(id.value);
  };

  useEffect(() => {
    const getSearchUserName = async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${search}`
      );
      const json = await response.json();
      //@ts-expect-error 타입지정필요
      const lists = json.items.map((item) => ({
        login: item.login,
        url: item.url,
        imgSrc: item.avatar_url,
      }));
      setList(lists);
    };
    getSearchUserName();
  }, [search]);
  const setError = useStore((state) => state.setError);
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
