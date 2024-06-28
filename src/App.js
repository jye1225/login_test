import "./css/App.css";

import Header from "./components/Header";
import MainListPage from "./pages/MainListPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Signup";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<>잘못된 경로입니다.</>} />
      </Routes>
    </div>
  );
}

export default App;
