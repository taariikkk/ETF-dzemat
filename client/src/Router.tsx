import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./main-components/Home";
import Login from "./main-components/Login";
import ProtectedRoute from "./main-components/ProtectedRoute";
import PageNotFound from "./reusable/PageNotFound";
import Signup from "./main-components/Signup";
import Layout from "./main-components/Layout";
import Guide from "./main-components/Guide";
import ShoppingList from "./main-components/ShoppingList";
import Donation from "./main-components/Donation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/prijava" element={<Login />} />
          <Route path="/registracija" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/početna" element={<Home />} />
            <Route path="/uputstva" element={<Guide />} />
            <Route path="/shopping-lista" element={<ShoppingList />} />
            <Route path="/donacija" element={<Donation />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
