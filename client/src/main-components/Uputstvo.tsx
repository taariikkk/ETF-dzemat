import { useState } from "react";
import NaslovStranice from "../reusable/NaslovStranice";
import { FaPlus, FaBook } from "react-icons/fa";

type Sekcija = {
  id: number;
  naziv: string;
  stavke: string[];
  noviTekst: string;
};

const Uputstva = () => {
  const [sekcije, setSekcije] = useState<Sekcija[]>([]);
  const [nazivNoveSekcije, setNazivNoveSekcije] = useState("");

  const handleDodajSekciju = () => {
    if (nazivNoveSekcije.trim() !== "") {
      const novaSekcija: Sekcija = {
        id: Date.now(),
        naziv: nazivNoveSekcije,
        stavke: [],
        noviTekst: "",
      };
      setSekcije([...sekcije, novaSekcija]);
      setNazivNoveSekcije("");
    }
  };

  const handleDodajStavku = (id: number) => {
    setSekcije((prevSekcije) =>
      prevSekcije.map((sekcija) =>
        sekcija.id === id && sekcija.noviTekst.trim() !== ""
          ? { ...sekcija, stavke: [...sekcija.stavke, sekcija.noviTekst], noviTekst: "" }
          : sekcija
      )
    );
  };

  const handlePromenaUnosa = (id: number, tekst: string) => {
    setSekcije((prevSekcije) =>
      prevSekcije.map((sekcija) =>
        sekcija.id === id ? { ...sekcija, noviTekst: tekst } : sekcija
      )
    );
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen w-[374px] mx-auto">
      <NaslovStranice naslovStranice="Uputstva" />

      <div className="bg-white p-4 rounded shadow-md w-[339px] mx-auto mb-4">
        <div className="flex items-center text-lg font-semibold mb-2">
          <FaPlus className="mr-2" /> Dodaj novu sekciju
        </div>
        <div className="flex items-center mt-2">
          <input
            type="text"
            value={nazivNoveSekcije}
            onChange={(e) => setNazivNoveSekcije(e.target.value)}
            className="border p-1 rounded w-full"
            placeholder="Unesite naziv sekcije"
          />
          <button onClick={handleDodajSekciju} className="text-blue-500 ml-2">
            <FaPlus />
          </button>
        </div>
      </div>

      {sekcije.map((sekcija) => (
        <div key={sekcija.id} className="bg-white p-4 rounded shadow-md w-[339px] mx-auto mb-4">
          <div className="flex items-center text-lg font-semibold mb-2">
            <FaBook className="mr-2" /> {sekcija.naziv}
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {sekcija.stavke.map((stavka, index) => (
              <li key={index}>{stavka}</li>
            ))}
          </ul>
          <div className="flex items-center mt-2">
            <button onClick={() => handleDodajStavku(sekcija.id)} className="text-blue-500 mr-2">
              <FaPlus />
            </button>
            <input
              type="text"
              value={sekcija.noviTekst}
              onChange={(e) => handlePromenaUnosa(sekcija.id, e.target.value)}
              className="border p-1 rounded w-full"
              placeholder="Dodaj stavku"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Uputstva;
