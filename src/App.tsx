function App() {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    //console.dir(form);
    const id = form.elements.namedItem("id") as HTMLInputElement;
    //console.log(id.value)  //확인방법
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    if (id.value.length < 3) {
      alert("아이디는 3글자 이상이어야 합니다.");
      return;
    }
    if (password.value.length < 6) {
      alert("비밀번호는 6글자 이상이어야 합니다");
    return;
    }
    if (email.value.includes("@gmail.com")) {
      alert("gmail은 사용할 수 없습니다.");
    return;
    }
    id.value = "";
    password.value = "";
    email.value = "";
    alert("회원가입이 되었습니다.");
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">아이디</label>
          <input
            name="id"
            type="text"
            id="id"
            placeholder="아이디를 입력하세요"
            required
          />
          <label htmlFor="password">비밀번호</label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
          <label htmlFor="email">이메일</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            required
          />
          <button>로그인</button>
        </form>
      </div>
    </>
  );
}

export default App;
