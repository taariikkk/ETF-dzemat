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
      <div onClick={handleModalOpen}>
        <Logout />
      </div>
      <Modal closeModal={handleModalClose} headerTitle="Da li ste" openModal={modal}>
        <button onClick={handleLogout}>ok</button>
        <button onClick={handleModalClose}>no</button>
      </Modal>
      <Navigacija />
    </>
  ) : (
    <Navigate to="/prijava" replace />
  );
};

export default ProtectedRoute;
