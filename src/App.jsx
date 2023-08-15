import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import NavBar from "./components/NavBar/NavBar";
import LogoHeader from "./components/LogoHeader/LogoHeader";

const App = () => {
  return (
    <div>
      <LogoHeader />
      <NavBar />
    </div>
  );
};

export default App;
