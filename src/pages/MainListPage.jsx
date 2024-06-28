import { useEffect, useState } from "react";
import { url } from "../store/ref";

const MainListPage = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(`${url}/postList`)
      .then((res) => res.json())
      .then((data) => setPostList(data));
  }, []);
  // console.log(postList);

  return (
    <main className="mainlist mw">
      <h2>블로그 리스트 메인페이지</h2>
    </main>
  );
};

export default MainListPage;
