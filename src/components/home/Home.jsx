import React, { useState } from "react";
import Menu from "../Menu/Menu";
import "./home.css";
import Nav from "../nav/Nav";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [deposit, setDeposit] = useState(false);
  const [assets, setAssets] = useState(false);
  const navigate = useNavigate();

  const handleDeposit =()=>{
    setDeposit(!deposit);
  }
  const handleAssets =()=>{
    setAssets(!assets);
  }
  if(deposit){
    navigate('/deposit')
  }else if(assets){
    navigate('/dashboard')
  }

  return (
    <>
      <Nav />
      <main className="home-main">
        <Menu />

        <div className="action-btn">
          <img
            className="home-logo"
            src="src/assets/imgs/nun-logo2.png"
            alt="Logo"
          />
          <p className="logo-text">SIMPLE FAST AND SAFE STAKING</p>
          <p className="home-btn">
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleAssets}>Assets</button>
          </p>
        </div>
      </main>
    </>
  );
}
