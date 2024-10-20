import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import OnchainProviders from "./OnchainkitProvider..jsx";

createRoot(document.getElementById("root")).render(
  <OnchainProviders>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </OnchainProviders>
);
