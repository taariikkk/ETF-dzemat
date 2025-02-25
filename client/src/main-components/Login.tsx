import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setPrijavljen, setUserInfo } from "../redux/etfdzemat";
import NaslovStranice from "../reusable/NaslovStranice";
import Dugme from "../reusable/Dugme";
import Input from "../reusable/Input";
import Podloga from "../reusable/Podloga";
import { login } from "../helper-functions/fetch-functions";

const Login = () => {
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { prijavljen } = useAppSelector((s) => s.etfszm);

  useEffect(() => {
    if (prijavljen) navigate("/početna", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!usernameEmail || !password) {
      setError("Molimo popunite sva polja");
    } else
      login({ usernameEmail, password })
        .then((res) => {
          if (res && "message" in res) {
            dispatch(setPrijavljen(true));
            dispatch(setUserInfo({ username: res.username, role: res.role }));
            navigate("/početna");
            // dispatch(setUsername(res.username));
          } else setError("Pogrešni prijavni podaci");
        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (
    !prijavljen && (
      <>
        <NaslovStranice naslovStranice="Prijava" />
        <Podloga classname="bg-transparent px-0 py-0 max-w-72 text-4xl">
          <form onSubmit={(e) => handleLogin(e)}>
            <Input
              type="text"
              value={usernameEmail}
              onChange={(e) => {
                setUsernameEmail(e.target.value);
                setError("");
              }}
              placeholder="Korisničko ime ili email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Šifra"
            />
            {error && <p className="text-red-500 leading-normal my-2">{error}</p>}
            <div className="mt-4">
              <Dugme text="Prijavi se" type="submit" />
            </div>
          </form>
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
