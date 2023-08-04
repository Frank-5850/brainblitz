import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BaseRouter from "./pages/BaseRouter/BaseRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BaseRouter />
  </React.StrictMode>
);
