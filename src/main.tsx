import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PositionContextProvider } from "./contexts/positionContext";
import "./assets/styles/allStyles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PositionContextProvider>
      <App />
    </PositionContextProvider>
  </React.StrictMode>
);
