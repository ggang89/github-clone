import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from '@mui/material/Divider';
import { useStore } from "../use-alert";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const [search, setSearch] = useState("ggang89");
  const [list, setList] = useState([]);
  console.log(list);
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
        loginId: item.login,
        url: item.html_url,
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
      {/* <Box sx={{ width: "100%" }}>
        {list.map((user) => (
          <Stack
            direction="column"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={user.loginId}
              src={user.imgSrc}
              sx={{ width: 70, height: 70 }}
            />
            <p>
              <Link to={user.url}>{user.loginId}</Link>
            </p>
          </Stack>
        ))}
      </Box> */}
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {list.map((user) => (
          <>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar
                  alt={user.loginId}
                  src={user.imgSrc}
                  sx={{ width: 40, height: 40 }}
                />
              </ListItemAvatar>
              <Link to={user.url}>
                <ListItemText primary={user.loginId} />
              </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
}
