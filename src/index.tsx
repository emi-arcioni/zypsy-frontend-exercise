import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import App from "./components/App";
import { CategoryProvider } from "./providers/CategoryProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <CategoryProvider>
      <App />
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        closeOnClick
        theme="colored"
      />
    </CategoryProvider>
  </BrowserRouter>
);
