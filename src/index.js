import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FavoriteContextProvider from "./context/FavoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FavoriteContextProvider>
    <App />
  </FavoriteContextProvider>,
);
