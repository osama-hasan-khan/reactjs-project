import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SideBarContextProvider from "./context/SideBarContext.jsx";
import CommunitiesContextProvider from "./context/CommunitiesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SideBarContextProvider>
      <CommunitiesContextProvider>
        <App />
      </CommunitiesContextProvider>
    </SideBarContextProvider>
  </React.StrictMode>
);
