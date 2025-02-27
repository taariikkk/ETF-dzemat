import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";
import Navigacija from "./Navigacija";
import Logout from "../reusable/Logout";
import Modal from "../reusable/Modal";
import { useState } from "react";
import { setPrijavljen } from "../redux/etfdzemat";
import { signout } from "../helper-functions/fetch-functions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute = () => {
  const [modal, setModal] = useState(false);
  const { prijavljen } = useAppSelector((s) => s.etfszm);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signout();
    dispatch(setPrijavljen(false));
    navigate("/prijava");
  };

  const handleModalOpen = () => {
    setModal(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleModalClose = () => {
    setModal(false);
    document.body.classList.remove("overflow-hidden");
  };

  return prijavljen ? (
    <>
      <Outlet />
      <div onClick={handleModalOpen} style={{ cursor: "pointer" }}>
        <Logout />
      </div>
      {modal && (
        <Modal closeModal={handleModalClose} headerTitle="Da li ste sigurni da se želite odjaviti?" openModal={modal} hideCloseButton={true}>
        <div className="flex justify-end gap-4 mt-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={handleLogout}>
            Da
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={handleModalClose}>
            Ne
          </button>
        </div>
      </Modal>      
      )}
      <Navigacija />
    </>
  ) : (
    <Navigate to="/prijava" replace />
  );
};

export default ProtectedRoute;
