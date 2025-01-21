import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

const Registracija = () => {
  const navigate = useNavigate();

  const { prijavljen } = useAppSelector((s) => s.etfszm);

  useEffect(() => {
    if (prijavljen) navigate("/početna", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !prijavljen && (
      <div>
        <h1>Registracija</h1>
        <button onClick={() => navigate("/prijava")}>Potvrdi</button>
      </div>
    )
  );
};

export default Registracija;
