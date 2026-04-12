import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import { App } from "./components/app";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
);
