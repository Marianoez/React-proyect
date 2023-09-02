import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import NavBar from "./components/NavBar/NavBar";
import LogoHeader from "./components/LogoHeader/LogoHeader";
import { Axios } from "axios";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <LogoHeader />
      <NavBar />
      <ItemListContainer />
    </div>
  );
};

export default App;
