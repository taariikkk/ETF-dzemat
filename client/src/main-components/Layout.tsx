import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/početna", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
