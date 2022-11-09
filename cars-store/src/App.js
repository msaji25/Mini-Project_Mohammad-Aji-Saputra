import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AllCars from "./pages/AllCars";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<AllCars />}></Route>
          <Route path="/add-car" element={<AddCar />}></Route>
          <Route path="/edit-car/:id" element={<EditCar />}></Route>
        </Routes>
      </Header>
    </>
  );
}

export default App;
