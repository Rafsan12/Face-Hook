import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogOut = () => {
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
