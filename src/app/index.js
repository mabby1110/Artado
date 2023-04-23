import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// AuthProvider
import { AuthProvider } from "./context/authContext"

import App from './App'

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

