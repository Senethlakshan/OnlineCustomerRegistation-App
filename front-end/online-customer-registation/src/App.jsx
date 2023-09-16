import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerRegister from "./components/CustomerRegister";
import AdminView from "./components/AdminView";
import Home from "./components/Home";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/Register" element={<CustomerRegister />} />
        <Route path="/Dashbord" element={<AdminView />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
