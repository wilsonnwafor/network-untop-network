import React, { useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import "./withdraw.css";
import Menu from "../Menu/Menu";
import { FaWallet } from "react-icons/fa";
import Nav from "../nav/Nav";
import Approved_withraw from "../approval/Approved_withraw";
import { useNavigate } from "react-router-dom";

export default function Withdraw() {
let nav = useNavigate()
  const[err, setErr] = useState("")
  const[withdraw, setWith] = useState("")

  function sendFunds(e){
e.preventDefault()
    if(withdraw == ""){
      setErr("inputs cannot be empty")
    } else{
nav("../Approved_withraw")

    }
  }


  return (
    <>
    
      {/* <Nav /> */}
      <main className="withdraw-main">
        <Menu />
        <section className="withdraw-sector">
          <form>
          <p className="err-msg">{err}</p>
            <h3>Withdraw</h3>
            <div className="from-block">
              <header>Select withdrawal source:</header>
              <select name="" id="">
                <option value="1">
                  <FaWallet />
                  Funding Account
                </option>
              </select>
            </div>

            <div className="from-block">
              <header>To:</header>
              <select name="" id="">
                <option value="1">
                  <FaWallet />
                  Bank Account
                </option>
              </select>
            </div>

            <div className="amount-block">
              <div>Amount</div> <input type="number" onChange={(e)=>setWith(e.target.value)} />
            </div>
            <p className="convert-usdt">
              <header>USDT</header>
              <span>1.00</span>
            </p>
            <div className="action-block">
              <button>Cancel</button>
              <button onClick={(e)=>sendFunds(e)}>Withdraw</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
