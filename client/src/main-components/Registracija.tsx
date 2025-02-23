import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import NaslovStranice from "../reusable/NaslovStranice";
import Dugme from "../reusable/Dugme";
import Input from "../reusable/Input";
import Podloga from "../reusable/Podloga";

const inputPolja = [
  { type: "text", placeholder: "Korisničko ime" },
  { type: "text", placeholder: "Email" },
  { type: "password", placeholder: "Šifra" },
  { type: "password", placeholder: "Potvrdite šifru" },
];

const Registracija = () => {
  const [registracija, setRegistracija] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { prijavljen } = useAppSelector((s) => s.etfszm);

  useEffect(() => {
    if (prijavljen) navigate("/početna", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRegister = () => {
    if (Object.values(registracija).some((value) => value === "")) setError("Sva polja moraju biti popunjena");
    else if (registracija.password !== registracija.confirmPassword) setError("Šifre se ne podudaraju");
    else navigate("/prijava");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistracija((s) => ({
      ...s,
      [name]: value,
    }));
  };

  return (
    !prijavljen && (
      <>
        <NaslovStranice naslovStranice="Registracija" />
        <Podloga classname="bg-transparent px-0 py-0 max-w-72">
          <form>
            {inputPolja.map((props, i) => {
              return <Input key={i} onChange={handleChange} {...props} />;
            })}
          </form>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mt-4">
            <Dugme text="Registruj se" onClick={handleRegister} />
          </div>
          <p className="mt-4">
            Već ste registrovani?{" "}
            <a onClick={() => navigate("/prijava")} className="underline cursor-pointer">
              Prijavite se!
            </a>
          </p>
        </Podloga>
      </>
    )
  );
};

export default Registracija;
