import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import NaslovStranice from "../reusable/NaslovStranice";
import Dugme from "../reusable/Dugme";

const Registracija = () => {
  const navigate = useNavigate();
  const { prijavljen } = useAppSelector((s) => s.etfszm);
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (prijavljen) {
      navigate("/početna", { replace: true });
    }
  }, [prijavljen, navigate]);

  const handleRegister = () => {
    if (!ime || !prezime || !username || !password || !confirmPassword) {
      setError("Sva polja moraju biti popunjena");
      return;
    }
    if (password !== confirmPassword) {
      setError("Šifre se ne podudaraju");
      return;
    }
    navigate("/prijava");
  };

  return (
    !prijavljen && (
      <div className="flex flex-col items-center p-4">
        <NaslovStranice naslovStranice="Registracija" />
        <div className="mb-4 w-full max-w-xs">
          <input 
            type="text" 
            value={ime} 
            onChange={(e) => setIme(e.target.value)} 
            className="w-full p-2 border rounded-md" 
            placeholder="Unesite ime" 
          />
        </div>
        <div className="mb-4 w-full max-w-xs">
          <input 
            type="text" 
            value={prezime} 
            onChange={(e) => setPrezime(e.target.value)} 
            className="w-full p-2 border rounded-md" 
            placeholder="Unesite prezime" 
          />
        </div>
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
        <div className="mb-4 w-full max-w-xs">
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="w-full p-2 border rounded-md" 
            placeholder="Potvrdite šifru" 
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-6">
          <Dugme text="Registruj se" onClick={handleRegister} />
        </div>
        <p className="mt-4">
          Već imate račun? <a onClick={() => navigate("/prijava")} className="underline cursor-pointer">Prijavite se!</a>
        </p>
      </div>
      
      
    )
  );
};

export default Registracija;
