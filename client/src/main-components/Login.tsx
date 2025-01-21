import { useNavigate } from "react-router";
import { setPrijavljen } from "../redux/etfdzemat";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import NaslovStranice from "../reusable/NaslovStranice";
import Dugme from "../reusable/Dugme";

const Login = () => {
  const navigate = useNavigate();

  const { prijavljen } = useAppSelector((s) => s.etfszm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (prijavljen) navigate("/početna", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !prijavljen && (
      <div>
        <NaslovStranice naslovStranice={"Prijava"} />
        <Dugme text={"Prijavi se"} onClick={() => dispatch(setPrijavljen(true), navigate("/početna"))} />
        <p className="cursor-default" onClick={() => navigate("/registracija")}>
          Nemate račun? <a className="underline cursor-pointer">Registrujte se!</a>
        </p>
      </div>
    )
  );
};

export default Login;
