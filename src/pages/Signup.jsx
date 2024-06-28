import { Link } from "react-router-dom";
import style from "../css/RegisterPage.module.css";
import { useState } from "react";
import { url } from "../store/ref";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pdcon, setPdcon] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  // 회원가입 기능 함수
  const register = async (e) => {
    e.preventDefault();
    console.log(username, password);

    if (!/^[a-zA-Z][a-zA-Z0-9]{3,}$/.test(username)) {
      setMessage1("아이디는 4자 이상이어야 하며 영어로 시작해야 합니다.");
      return;
    } else {
      setMessage1("");
    }
    if (password.length < 4) {
      setMessage2("4자 이상이어야 합니다.");
      return;
    } else {
      setMessage2("");
    }
    if (password !== pdcon) {
      setMessage3("비밀번호가 같지 않습니다.");
      return;
    } else {
      setMessage3("");
    }

    //백엔드로 POST 요청 및 응답
    const response = await fetch(`${url}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      window.location.href = "/login";
    } else {
      alert("존재하는 아이디 입니다.");
    }
  };

  return (
    <main className={`mw ${style.register}`}>
      <h2>회원가입</h2>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="사용자이름"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <span>{message1}</span>
        <input
          type="password"
          placeholder="패스워드"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <span>{message2}</span>
        <input
          type="password"
          placeholder="패스워드확인"
          value={pdcon}
          onChange={(e) => {
            setPdcon(e.target.value);
          }}
        />
        <span>{message3}</span>
        <button type="submit">가입하기</button>
      </form>
      <p>
        이미 회원가입되었나요? <Link to="/login">로그인</Link>
      </p>
    </main>
  );
};

export default RegisterPage;
