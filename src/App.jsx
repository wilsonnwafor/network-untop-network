import { useState } from "react";
import Landing from "./components/landing page/Landing";
import Login from "./components/auth/Login";
// import Reg from "./components/auth/reg";
import { Route, Routes } from "react-router-dom";
import Deposit from "./components/Deposit/Deposit";
import Withdraw from "./components/withdraw/withdraw";
import Approved_deposit from "./components/approval/approved_deposit";
import Home from "./components/home/Home";
import Asset from "./components/asset-comp/Asset";
import Approved_withraw from "./components/approval/Approved_withraw";
import Reg from "./components/auth/reg";





function App() {
  return (
    <>
  {/* Managed imports */}
    {/* all components */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/Reg" element={<Reg />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Asset" element={<Asset />} />
        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Withdraw" element={<Withdraw />} />
        <Route path="/Approved_deposit" element={<Approved_deposit />} />
        <Route path="/Approved_withraw" element={<Approved_withraw />} />
        <Route path="/Reg" element={<Reg />} />

      </Routes>

      {/* <Reg/> */}
    </>
  );
}

export default App;
