import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import LogoHeader from "../components/LogoHeader/LogoHeader";
import Home from "../pages/Home";
import Category from "../pages/Category";
import ItemDetails from "../pages/ItemDetails";
import Contacto from "../pages/Contacto";

const MainRouter = () => {
  return (
    <Router>
      <LogoHeader />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:itemId" element={<ItemDetails />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
