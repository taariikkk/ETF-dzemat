import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import NaslovStranice from "../reusable/NaslovStranice";

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
        <NaslovStranice naslovStranice={"Registracija"} />
        <button onClick={() => navigate("/prijava")}>Potvrdi</button>
      </div>
    )
  );
};

export default Registracija;
