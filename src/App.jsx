import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/4o4/NotFound";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
