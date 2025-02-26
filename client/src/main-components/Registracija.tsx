import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router";
import { registracijaInputPolja, registracijaKeys } from "../data/pocetniPodaci";
import NaslovStranice from "../reusable/NaslovStranice";
import Podloga from "../reusable/Podloga";
import Dugme from "../reusable/Dugme";
import Input from "../reusable/Input";
import { signup } from "../helper-functions/fetch-functions";
import { getErrorMessage } from "../helper-functions/error-functions";

export interface Registracija {
  [key: string]: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registracija = () => {
  const [registracija, setRegistracija] = useState<Registracija>({
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

  function validateEmailFormat(email: string) {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(email);
  }

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = registracija;
    if (Object.values(registracija).some((value) => value === "")) setError("Sva polja moraju biti popunjena");
    if (username.length < 2) setError("Korisniško ime mora imati više od dva znaka");
    else if (!validateEmailFormat(email) || !email.endsWith(".unsa.ba")) setError("Neispravan email");
    else if (password.length < 6) setError("Šifra mora biti 6 znakova duga");
    else if (/\s/.test(password)) setError("Šifra ne smije sadržavati praznine");
    else if (!confirmPassword || password !== confirmPassword) setError("Šifre se ne podudaraju");
    else
      signup(registracija)
        .then((res) => {
          if (res && "message" in res) {
            navigate("/prijava");
          } else setError(getErrorMessage(res));
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setRegistracija((s) => ({
      ...s,
      [value]: e.target.value,
    }));
  };

  return (
    !prijavljen && (
      <>
        <NaslovStranice naslovStranice="Registracija" />
        <Podloga classname="bg-transparent px-0 py-0 max-w-72">
          <form onSubmit={(e) => handleRegister(e)}>
            {registracijaInputPolja.map((props, i) => {
              return (
                <Input
                  key={i}
                  {...props}
                  value={registracija[registracijaKeys[i]]}
                  onChange={(e) => {
                    handleChange(e, registracijaKeys[i]);
                    setError("");
                  }}
                />
              );
            })}
            {error && <p className="text-red-500 leading-normal my-2">{error}</p>}
            <div className="mt-4">
              <Dugme text="Registruj se" type="submit" />
            </div>
          </form>
          <p className="mt-6">
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
