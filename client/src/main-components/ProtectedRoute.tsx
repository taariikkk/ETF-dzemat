import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";
import Navigacija from "./Navigacija";

const ProtectedRoute = () => {
  const { prijavljen } = useAppSelector((s) => s.etfszm);

  return prijavljen ? (
    <>
      <Outlet />
      <Navigacija />
    </>
  ) : (
    <Navigate to="/prijava" replace />
  );
};

export default ProtectedRoute;
