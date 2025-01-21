import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";
import Navigacija from "./Navigacija";
import Logout from "../reusable/Logout";

const ProtectedRoute = () => {
  const { prijavljen } = useAppSelector((s) => s.etfszm);

  return prijavljen ? (
    <>
      <Outlet />
      <Logout />
      <Navigacija />
    </>
  ) : (
    <Navigate to="/prijava" replace />
  );
};

export default ProtectedRoute;
