import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { loggedIn } = useAppSelector((s) => s.etfszm);

  useEffect(() => {
    if (!loggedIn) navigate("/prijava", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

export default ProtectedRoute;
