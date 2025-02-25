import { useState } from "react";
import NaslovStranice from "../reusable/NaslovStranice";
import Podloga from "../reusable/Podloga";
import { FaClock, FaUserPlus, FaUserMinus, FaCheckSquare, FaRegSquare } from "react-icons/fa";

const Pocetna = () => {
  const [aktivnosti, setAktivnosti] = useState([
    {
      id: 1,
      naziv: "Usisavanje (jednom sedmično)",
      datum: "Jun 10, 2024",
      vrijeme: "9:41 AM",
      trajanje: "25min",
      prijavljeni: ["Tarik", "Anand"],
      zavrseno: false,
    },
    {
      id: 2,
      naziv: "Pranje serdžada (jednom sedmično)",
      datum: "Jun 10, 2024",
      vrijeme: "9:41 AM",
      trajanje: "25min",
      prijavljeni: ["Tarik", "Anand"],
      zavrseno: false,
    },
  ]);

  const username = "Anand"; // hard kodirano

  const chekirano = (id: number) => {
    setAktivnosti(aktivnosti.map((a) => (a.id === id ? { ...a, zavrseno: !a.zavrseno } : a)));
  };

  const chekiranUser = (id: number) => {
    setAktivnosti(
      aktivnosti.map((a) => {
        if (a.id === id) {
          const jePrijavljen = a.prijavljeni.includes(username);
          return {
            ...a,
            prijavljeni: jePrijavljen ? a.prijavljeni.filter((p) => p !== username) : [...a.prijavljeni, username],
          };
        }
        return a;
      })
    );
  };

  return (
    <>
      <NaslovStranice naslovStranice={`Dobrodošao, ${username}`} />
      <Podloga>
        {aktivnosti.map((aktivnost) => (
          <div key={aktivnost.id} className="bg-white p-4 rounded shadow-md mx-auto mb-4 relative">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">Datum i vrijeme termina</div>
              <button onClick={() => chekirano(aktivnost.id)} className="text-blue-500 text-lg">
                {aktivnost.zavrseno ? <FaCheckSquare /> : <FaRegSquare />}
              </button>
            </div>

            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">{aktivnost.datum}</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">{aktivnost.vrijeme}</span>
            </div>

            <div className="mt-2 text-left">
              <strong className="text-sm text-gray-700">Prijavljeni:</strong>
              <span className="text-sm text-gray-700 ml-2">{aktivnost.prijavljeni.join(", ")}</span>
            </div>

            <div className="flex items-center mt-2">
              <FaClock className="text-gray-500 mr-1" />
              <span className="text-gray-700">{aktivnost.trajanje}</span>
            </div>

            <div className="text-blue-600 mt-2 text-left">{aktivnost.naziv}</div>

            <button
              onClick={() => chekiranUser(aktivnost.id)}
              className="absolute bottom-5 right-4 text-blue-500 text-lg"
            >
              {aktivnost.prijavljeni.includes(username) ? <FaUserMinus /> : <FaUserPlus />}
            </button>
          </div>
        ))}
      </Podloga>
    </>
  );
};

export default Pocetna;
