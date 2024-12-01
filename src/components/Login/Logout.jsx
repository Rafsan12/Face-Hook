import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/Useauth";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogOut = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <>
      <button onClick={handleLogOut} className="icon-btn">
        <img src={LogoutIcon} alt="Logout" />
      </button>
    </>
  );
}
