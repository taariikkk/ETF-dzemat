import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./main-components/Home";
import Login from "./main-components/Login";
import ProtectedRoute from "./main-components/ProtectedRoute";
import PageNotFound from "./reusable/PageNotFound";
import Signup from "./main-components/Signup";
import Layout from "./main-components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/prijava" element={<Login />} />
          <Route path="/registracija" element={<Signup />} />
          <Route
            index
            path="/početna"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
