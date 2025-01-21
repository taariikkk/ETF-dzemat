import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const { loggedIn } = useAppSelector((s) => s.etfszm);

  useEffect(() => {
    if (loggedIn) navigate("/početna", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !loggedIn && (
      <div>
        <h1>Registracija</h1>
        <button onClick={() => navigate("/prijava")}>Potvrdi</button>
      </div>
    )
  );
};

export default Signup;
