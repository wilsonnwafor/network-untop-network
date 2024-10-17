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

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import OnchainProviders from "./OnchainkitProvider..jsx";
// // import "./index.css";
// // import "@coinbase/onchainkit/styles.css";
// // import "@coinbase/onchainkit/styles.css";
// // import OnchainProviders from "./OnchainkitProvider.jsx";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <OnchainProviders>
//   <BrowserRouter>

//    <App />
//   </BrowserRouter>
//     </OnchainProviders>
//   </React.StrictMode>
// );
