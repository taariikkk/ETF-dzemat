import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setPrijavljen } from "../redux/etfdzemat";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="absolute top-10 left-4 cursor-pointer">
      <MdLogout
        onClick={() => {
          dispatch(setPrijavljen(false));
          navigate("/prijava");
        }}
        size={30}
      />
    </div>
  );
};

export default Logout;
