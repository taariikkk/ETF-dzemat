import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setPrijavljen } from "../redux/etfdzemat";
import { signout } from "../helper-functions/fetch-functions";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signout();
    dispatch(setPrijavljen(false));
    navigate("/prijava");
  };

  return (
    <div className="absolute top-2 left-6 cursor-pointer">
      <MdLogout onClick={handleLogout} size={30} />
    </div>
  );
};

export default Logout;
