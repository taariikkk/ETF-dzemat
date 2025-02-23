import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setPrijavljen } from "../redux/etfdzemat";
import NaslovStranice from "../reusable/NaslovStranice";
import Dugme from "../reusable/Dugme";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { prijavljen } = useAppSelector((s) => s.etfszm);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (prijavljen) {
      navigate("/početna", { replace: true });
    }
  }, [prijavljen, navigate]);

  const handleLogin = () => {
    if (username === username && password === password) {
      dispatch(setPrijavljen(true));
      navigate("/početna");
    } else {
      setError("Pogrešno korisničko ime ili šifra");
    }
  };

  return (
    !prijavljen && (
      <div className="flex flex-col items-center p-4">
        <NaslovStranice naslovStranice="Prijava" />
        <div className="mb-4 w-full max-w-xs">
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="w-full p-2 border rounded-md" 
            placeholder="Unesite korisničko ime" 
          />
        </div>
        <div className="mb-4 w-full max-w-xs">
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 border rounded-md" 
            placeholder="Unesite šifru" 
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-6">
          <Dugme text="Prijavi se" onClick={handleLogin} />
        </div>
        <p className="mt-4">
          Nemate račun? <a onClick={() => navigate("/registracija")} className="underline cursor-pointer">Registrujte se!</a>
        </p>
      </div>
    )
  );
};

export default Login;
