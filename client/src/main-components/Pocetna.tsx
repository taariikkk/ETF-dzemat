import { useMemo, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { FaClock, FaUserPlus, FaUserMinus, FaCheckSquare, FaRegSquare } from "react-icons/fa";
import { pocetneAktivnosti, motivacionePoruke } from "../data/pocetniPodaci";
import NaslovStranice from "../reusable/NaslovStranice";
import Logout from "../reusable/Logout";
import Info from "../reusable/Info";
import Modal from "../reusable/Modal";
import Podloga from "../reusable/Podloga";

const Pocetna = () => {
  const [aktivnosti, setAktivnosti] = useState(pocetneAktivnosti);
  const [openModal, setOpenModal] = useState(false);
  const { userInfo } = useAppSelector((s) => s.etfszm);

  const brPoruke = useMemo(() => {
    return Math.floor(Math.random() * motivacionePoruke.length);
  }, []);

  const chekirano = (i: number, j: number) => {
    setAktivnosti((s) =>
      s.map((aktivnost, index1) =>
        i === index1
          ? {
              ...aktivnost,
              termini: aktivnost.termini.map((termin, index2) =>
                j === index2 ? { ...termin, zavrseno: !termin.zavrseno } : termin
              ),
            }
          : aktivnost
      )
    );
  };

  const chekiranUser = (i: number) => {
    setAktivnosti((s) =>
      s.map((a, index) => {
        if (index === i) {
          return {
            ...a,
            prijavljeni:
              userInfo.username && a.prijavljeni.includes(userInfo.username)
                ? a.prijavljeni.filter((p) => p !== userInfo.username)
                : [...a.prijavljeni, userInfo.username || ""],
          };
        }
        return a;
      })
    );
  };

  const handleModalOpen = () => {
    setOpenModal(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleModalClose = () => {
    setOpenModal(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <NaslovStranice naslovStranice={`Dobrodošao ${userInfo.username}`} />
      <Logout />
      <Info onClick={handleModalOpen} />
      <Modal headerTitle="početna" openModal={openModal} closeModal={handleModalClose}>
        <div>Sadrzaj modala</div>
      </Modal>
      <Podloga>
        <p className="mb-2 text-lg">{motivacionePoruke[brPoruke].text}</p>
        <p className="text-sm">{motivacionePoruke[brPoruke].izvor}</p>
      </Podloga>
      <Podloga>
        <h2 className="text-3xl mb-7">
          Preglednik
          <br />
          aktivnosti
        </h2>
        {aktivnosti.map((aktivnost, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-md mx-auto mt-4">
            <h3 className="text-left text-xl font-semibold">{aktivnost.naziv}</h3>

            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">
                Dan i vrijeme
                <br /> aktivnosti
              </span>
              <span className="text-sm text-gray-500">Obavljeno</span>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              {aktivnost.termini.map((termin, j) => (
                <div key={j} className="flex justify-between items-center">
                  <span key={j} className="bg-blue-100 text-blue-700 rounded text-left px-2 py-2 w-36">
                    {termin.dan}, {termin.vrijeme}
                  </span>
                  <button onClick={() => chekirano(i, j)} className="text-blue-500">
                    {termin.zavrseno ? <FaCheckSquare /> : <FaRegSquare />}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <FaClock className="text-gray-500 mr-1" />
                <span className="text-gray-700">Trajanje: {aktivnost.trajanje}</span>
              </div>
            </div>

            <div className="flex text-left mt-4">
              <span className="text-sm text-gray-700">
                <strong className="text-sm text-gray-700">Prijavljeni: </strong>
                {aktivnost.prijavljeni.join(", ")}
              </span>
              <button onClick={() => chekiranUser(i)} className="text-blue-500 p-1 ml-auto">
                {userInfo.username && aktivnost.prijavljeni.includes(userInfo.username) ? (
                  <FaUserMinus />
                ) : (
                  <FaUserPlus />
                )}
              </button>
            </div>
          </div>
        ))}
      </Podloga>
    </>
  );
};

export default Pocetna;
