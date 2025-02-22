import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Router from "./Router.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);
