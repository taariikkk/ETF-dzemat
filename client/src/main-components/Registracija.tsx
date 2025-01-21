import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import NaslovStranice from "../reusable/NaslovStranice";
import Dugme from "../reusable/Dugme";

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
        <Dugme text={"Potvrdi"} onClick={() => navigate("/prijava")} />
      </div>
    )
  );
};

export default Registracija;
