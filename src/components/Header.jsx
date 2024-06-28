import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setUserAllInfo } from "../store/userStore";
import { url } from "../store/ref";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`${url}/profile`, {
        credentials: "include",
      });
      if (response.ok) {
        const userInfo = await response.json();
        dispatch(setUserAllInfo(userInfo));
      }
    };
    fetchProfile();
  }, [dispatch, location]);

  const user = useSelector((state) => state.user.user);
  // console.log("유저보관통의 정보", user);
  const username = user ? user.username : null;
  // console.log("유저이름 ---", username);

  const logout = (e) => {
    e.preventDefault();
    fetch(`${url}/logout`, {
      method: "POST",
      credentials: "include",
    });
    dispatch(setUserAllInfo(null));
  };

  return (
    <header className="hd mw">
      <h1>
        <Link to="/">LOGO</Link>
      </h1>

      {username ? (
        <nav>
          <span>{username}님 입장</span>
          <Link to="/" onClick={logout}>
            로그아웃
          </Link>
          <Link to="/create">포스트 작성</Link>
        </nav>
      ) : (
        <nav>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
