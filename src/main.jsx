import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4Yy6s_xUQkIjq4CPx3tXogBr43G5LwiE",
  authDomain: "mstalabarteria.firebaseapp.com",
  projectId: "mstalabarteria",
  storageBucket: "mstalabarteria.appspot.com",
  messagingSenderId: "833205723439",
  appId: "1:833205723439:web:5fecd77cd5a0e2529141da",
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
