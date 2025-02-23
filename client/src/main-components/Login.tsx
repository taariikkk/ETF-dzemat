import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setPrijavljen } from "../redux/etfdzemat";
import NaslovStranice from "../reusable/NaslovStranice";
import Dugme from "../reusable/Dugme";
import Input from "../reusable/Input";
import Podloga from "../reusable/Podloga";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { prijavljen } = useAppSelector((s) => s.etfszm);

  useEffect(() => {
    if (prijavljen) navigate("/početna", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = () => {
    if (username === username && password === password) {
      dispatch(setPrijavljen(true));
      navigate("/početna");
    } else setError("Pogrešno korisničko ime ili šifra");
  };

  return (
    !prijavljen && (
      <>
        <NaslovStranice naslovStranice="Prijava" />
        <Podloga classname="bg-transparent px-0 py-0 max-w-72">
          <form>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Korisničko ime"
            />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Šifra" />
          </form>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mt-4">
            <Dugme text="Prijavi se" onClick={handleLogin} />
          </div>
          <p className="mt-4">
            Nemate račun?{" "}
            <a onClick={() => navigate("/registracija")} className="underline cursor-pointer">
              Registrujte se!
            </a>
          </p>
        </Podloga>
      </>
    )
  );
};

export default Login;
