import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = () => {
  const { prijavljen } = useAppSelector((s) => s.etfszm);

  return prijavljen ? <Outlet /> : <Navigate to="/prijava" replace />;
};

export default ProtectedRoute;
