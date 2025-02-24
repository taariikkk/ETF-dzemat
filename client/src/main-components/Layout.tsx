import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/početna", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen w-screen bg-pozadinaEkrana text-center text-4xl pt-8 pb-24">
      <div className="max-w-96 relative mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
