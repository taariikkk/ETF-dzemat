import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = () => {
  const { loggedIn } = useAppSelector((s) => s.etfszm);

  return loggedIn ? <Outlet /> : <Navigate to="/prijava" replace />;
};

export default ProtectedRoute;
