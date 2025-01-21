import { useNavigate } from "react-router";
import { setPrijavljen } from "../redux/etfdzemat";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

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
        <h1>Prijava</h1>
        <button onClick={() => dispatch(setPrijavljen(true), navigate("/početna"))}>Prijavi se</button>
        <div onClick={() => navigate("/registracija")}>Nemate račun? Registrirajte se!</div>
      </div>
    )
  );
};

export default Login;
