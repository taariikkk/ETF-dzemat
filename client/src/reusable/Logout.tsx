import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setPrijavljen } from "../redux/etfdzemat";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <MdLogout
      onClick={() => {
        dispatch(setPrijavljen(false));
        navigate("/prijava");
      }}
    />
  );
};

export default Logout;
