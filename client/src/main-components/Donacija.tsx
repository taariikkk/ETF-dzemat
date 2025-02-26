import { useState } from "react";
import { donacijaInputPolja, historijaDonacija, svrheDonacije } from "../data/pocetniPodaci";
import NaslovStranice from "../reusable/NaslovStranice";
import Logout from "../reusable/Logout";
import Modal from "../reusable/Modal";
import Podloga from "../reusable/Podloga";
import Dugme from "../reusable/Dugme";
import Input from "../reusable/Input";
import { useAppSelector } from "../redux/hooks";

const Donacija = () => {
  const [modal, setModal] = useState({
    type: "",
    title: "",
    open: false,
  });
  const [donacije] = useState(historijaDonacija);
  const [selectedOption, setSelectedOption] = useState("Kupovina stavki sa shopping liste");
  const [stanjeRacuna] = useState(127.25);
  // const [creditCard, setCreditCard] = useState({
  //   name: "",
  //   number: "",
  //   expiry: "",
  //   cvc: "",
  //   amount: "",
  //   svrha: "",
  // });
  const [save, setSave] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  const { userInfo } = useAppSelector((s) => s.etfszm);

  const handleModalOpen = (type: string, title: string) => {
    setModal({ type: type, title: title, open: true });
    document.body.classList.add("overflow-hidden");
  };

  const handleModalClose = () => {
    setModal({ type: "", title: "", open: false });
    setSave(false);
    clearTimeout(timeoutId);
    setTimeoutId(undefined);
    document.body.classList.remove("overflow-hidden");
  };

  const handleDoniraj = () => {
    // setStanjeRacuna((s) => s + iznos);
    setModal({ type: "static", title: "Obrada u toku, molimo sačekajte", open: true });
    setTimeoutId(
      setTimeout(() => {
        setSave(true);
      }, 3000)
    );
    document.body.classList.add("overflow-hidden");
  };

  return (
    <>
      <NaslovStranice naslovStranice="Donacija" />
      <Logout />

      <Modal type={modal.type} headerTitle={modal.title} openModal={modal.open} closeModal={handleModalClose}>
        {modal.type === "info" ? (
          <div>Sadrzaj modala</div>
        ) : modal.type === "static" ? (
          <div>
            <h3 className="text-2xl font-semibold">Obrada u toku</h3>
            <h3 className="text-2xl font-semibold">molimo sačekajte</h3>
            <div className="saving-wrapper mb-4">
              <div className={`saving-loader ${save ? "save-completed" : ""}`}>
                {save && <div className="checkmark"></div>}
              </div>
            </div>
            {save && <span className="text-xl">Donacija uspješno obavljena!</span>}
            <div>{save && <Dugme className="mt-10" text="Nazad" onClick={handleModalClose} />}</div>
          </div>
        ) : modal.type === "finansije" ? (
          <div className="flex flex-col gap-8 mt-4">
            <div className="flex flex-col">
              <h3 className="text-2xl">Stanje računa</h3>
              <span className="text-xl mt-2 italic underline">{stanjeRacuna} KM</span>
            </div>

            <div>
              <h3 className="text-2xl">Historija donacija</h3>
              <table className="mx-auto text-sm mt-2">
                <tr>
                  <th className="px-2 py-1">Datum</th>
                  <th className="px-2 py-1">Iznos</th>
                </tr>
                {donacije.map((donacija, i) => (
                  <tr key={i} className={`${i === donacije.length - 1 ? "border-b border-black" : ""}`}>
                    <td className="px-2 py-1">{donacija.datum.split(" ")[0]}</td>
                    <td className="px-2 py-1 text-right">{donacija.iznos} KM</td>
                  </tr>
                ))}
                <tr>
                  <td className="px-2 py-1 ">Zbirno:</td>
                  <td className="px-2 py-1 text-right font-semibold">
                    {donacije
                      .reduce((donacija1, donacija2) => ({
                        ...donacija2,
                        iznos: (Number(donacija1.iznos) + Number(donacija2.iznos)).toString(),
                      }))
                      .iznos.concat(".00")}{" "}
                    KM
                  </td>
                </tr>
              </table>
            </div>
          </div>
        ) : null}
      </Modal>

      {userInfo.role === "admin" && (
        <Podloga>
          <Dugme
            className=""
            text="Pregled finansija"
            onClick={() => handleModalOpen("finansije", "Pregled finansija")}
          />
        </Podloga>
      )}

      <Podloga>
        <h2 className="text-left text-xl mb-4 font-semibold">Podaci o kartici</h2>
        <form>
          {donacijaInputPolja.map((props, i) => {
            return <Input key={i} {...props} />;
          })}
          <h2 className="text-left text-xl mt-6 mb-4 font-semibold">Namjena donacije</h2>
          <div className="flex flex-col space-y-2 text-left">
            {svrheDonacije.map((option, index) => (
              <label key={index} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="donation"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="w-3.5 h-3.5 text-blue-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <textarea
            className="rounded-md px-2 py-2 my-4 w-full h-40 min-h-20 max-h-52 overflow-auto transition-colors duration-300 disabled:bg-gray-200 disabled:cursor-not-allowed"
            placeholder="Uplaćujem u svrhu..."
            disabled={selectedOption !== "Ništa od navedenog"}
          />
          <div className="flex flex-col w-min items-center mx-auto">
            <Dugme type="button" className="mt-2" text="Uplati" onClick={handleDoniraj} />
          </div>
        </form>
      </Podloga>
    </>
  );
};

export default Donacija;
