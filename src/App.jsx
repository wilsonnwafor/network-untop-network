import { useState } from "react";
import Landing from "./components/landing page/Landing";
import Login from "./components/auth/Login";
import Reg from "./components/auth/reg";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Deposit from "./components/Deposit/Deposit";
import Withdraw from "./components/withdraw/withdraw";
import Approved_deposit from "./components/approval/approved_deposit";
import Home from "./components/home/Home";





function App() {
  return (
    <>

      {/* <Dashboard/> */}
      <Deposit/>
      {/* <Approved_deposit/> */}
      {/* <Withdraw/> */}
      {/* <Home/> */}
{/* 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Reg" element={<Reg />} />
        <Route path="/Home" element={<Home />} />
      </Routes> */}

      {/* <Reg/> */}
    </>
  );
}

export default App;
