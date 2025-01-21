import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/početna", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-screen bg-pozadina text-center text-4xl py-8 px-0">
      <Outlet />
    </div>
  );
};

export default Layout;
