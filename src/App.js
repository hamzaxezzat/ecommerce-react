// import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Products />} />
            </Routes>
        </>
    );
};
