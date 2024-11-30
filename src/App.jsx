import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/4o4/NotFound";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
