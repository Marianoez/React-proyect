import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import NavBar from "./components/NavBar/NavBar";
import LogoHeader from "./components/LogoHeader/LogoHeader";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Axios } from "axios";

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
