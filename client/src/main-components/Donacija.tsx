import { useState } from "react";
import { donacijaInputPolja } from "../data/pocetniPodaci";
import NaslovStranice from "../reusable/NaslovStranice";
import Logout from "../reusable/Logout";
import Info from "../reusable/Info";
import Modal from "../reusable/Modal";
import Podloga from "../reusable/Podloga";
import Dugme from "../reusable/Dugme";
import Input from "../reusable/Input";

const Donacija = () => {
  const [openModal, setOpenModal] = useState(false);

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
      <NaslovStranice naslovStranice="Donacija" />
      <Logout />
      <Info onClick={handleModalOpen} />
      <Modal headerTitle="donacija" openModal={openModal} closeModal={handleModalClose}>
        <div>Sadrzaj modala</div>
      </Modal>
      <Podloga>
        <h2 className="text-left text-xl mb-4 font-semibold">Podaci o kartici</h2>
        <form>
          {donacijaInputPolja.map((props, i) => {
            return <Input key={i} {...props} />;
          })}
        </form>
        <h2 className="text-left text-xl mt-6 mb-4 font-semibold">Namjena donacije</h2>
        <textarea
          className="rounded-md px-2 py-2 my-2 w-full h-40 min-h-20 max-h-52 overflow-auto"
          placeholder="Uplaćujem u svrhu..."
        />
        <Dugme className="mt-2" text="Uplati" />
      </Podloga>
    </>
  );
};

export default Donacija;
