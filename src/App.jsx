import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import NavBar from "./components/NavBar/NavBar";
import LogoHeader from "./components/LogoHeader/LogoHeader";
import { Axios } from "axios";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainRouter from "./routes/MainRouter";

const App = () => {
  return (
    <div>
      <MainRouter />
    </div>
  );
};

export default App;
