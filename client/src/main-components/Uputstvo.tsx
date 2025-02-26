import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { FaPlus, FaBook } from "react-icons/fa";
import { uputstvo } from "../data/pocetniPodaci";
import NaslovStranice from "../reusable/NaslovStranice";
import Podloga from "../reusable/Podloga";
import Input from "../reusable/Input";

interface Sekcija {
  id: number;
  naziv: string;
  stavke: string[];
  noviTekst: string;
}

const Uputstvo = () => {
  const [sekcije, setSekcije] = useState<Sekcija[]>(uputstvo);
  const [nazivNoveSekcije, setNazivNoveSekcije] = useState("");
  const { userInfo } = useAppSelector((s) => s.etfszm);

  const handleDodajSekciju = () => {
    if (nazivNoveSekcije.trim() !== "") {
      const novaSekcija: Sekcija = {
        id: Date.now(),
        naziv: nazivNoveSekcije,
        stavke: [],
        noviTekst: "",
      };
      setSekcije((s) => [...s, novaSekcija]);
      setNazivNoveSekcije("");
    }
  };

  const handleDodajStavku = (id: number) => {
    setSekcije((s) =>
      s.map((sekcija) =>
        sekcija.id === id && sekcija.noviTekst.trim() !== ""
          ? { ...sekcija, stavke: [...sekcija.stavke, sekcija.noviTekst], noviTekst: "" }
          : sekcija
      )
    );
  };

  const handlePromjenaUnosa = (id: number, tekst: string) => {
    setSekcije((s) => s.map((sekcija) => (sekcija.id === id ? { ...sekcija, noviTekst: tekst } : sekcija)));
  };

  return (
    <>
      <NaslovStranice naslovStranice="Uputstvo" />
      <Podloga>
        <div className="flex flex-col gap-4">
          {sekcije.map((sekcija) => (
            <div key={sekcija.id} className="bg-white p-4 rounded shadow-md mx-auto">
              <div className="flex items-center gap-1 text-left text-xl font-semibold">
                <FaBook className="mr-2" /> {sekcija.naziv}
              </div>

              <ul className="list-disc list-inside text-sm text-gray-700 mt-4">
                {sekcija.stavke.map((stavka, index) => (
                  <li key={index} className="text-left mt-2">
                    {stavka}
                  </li>
                ))}
              </ul>

              {userInfo.role === "admin" && (
                <div className="flex items-center mt-4">
                  <Input
                    type="text"
                    value={sekcija.noviTekst}
                    onChange={(e) => handlePromjenaUnosa(sekcija.id, e.target.value)}
                    className="border py-2 my-1"
                    placeholder="Dodaj stavku"
                  />
                  <button onClick={() => handleDodajStavku(sekcija.id)} className="text-blue-500 ml-2">
                    <FaPlus />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {userInfo.role === "admin" && (
          <div className="bg-white p-4 rounded shadow-md mx-auto mt-8">
            <div className="flex items-center text-lg font-semibold mb-2">
              <FaPlus className="mr-2" /> Dodaj novu sekciju
            </div>
            <div className="flex items-center mt-2">
              <Input
                type="text"
                value={nazivNoveSekcije}
                onChange={(e) => setNazivNoveSekcije(e.target.value)}
                className="border py-2 my-2"
                placeholder="Unesite naziv sekcije"
              />
              <button onClick={handleDodajSekciju} className="text-blue-500 ml-2">
                <FaPlus />
              </button>
            </div>
          </div>
        )}
      </Podloga>
    </>
  );
};

export default Uputstvo;
