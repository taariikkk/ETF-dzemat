import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";
import Navigacija from "./Navigacija";
import Logout from "../reusable/Logout";
import Info from "../reusable/Info";

const ProtectedRoute = () => {
  const { prijavljen } = useAppSelector((s) => s.etfszm);

  return prijavljen ? (
    <>
      <Outlet />
      <Logout />
      <Info />
      <Navigacija />
    </>
  ) : (
    <Navigate to="/prijava" replace />
  );
};

export default ProtectedRoute;
