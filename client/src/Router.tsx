import { BrowserRouter, Route, Routes } from "react-router";
import Pocetna from "./main-components/Pocetna";
import Login from "./main-components/Login";
import ProtectedRoute from "./main-components/ProtectedRoute";
import PageNotFound from "./reusable/PageNotFound";
import Registracija from "./main-components/Registracija";
import Layout from "./main-components/Layout";
import Uputstvo from "./main-components/Uputstvo";
import ShoppingLista from "./main-components/ShoppingLista";
import Donacija from "./main-components/Donacija";
import ErrorBoundary from "./reusable/ErrorBoundary";

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/prijava" element={<Login />} />
            <Route path="/registracija" element={<Registracija />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/početna" element={<Pocetna />} />
              <Route path="/uputstvo" element={<Uputstvo />} />
              <Route path="/shopping-lista" element={<ShoppingLista />} />
              <Route path="/donacija" element={<Donacija />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
