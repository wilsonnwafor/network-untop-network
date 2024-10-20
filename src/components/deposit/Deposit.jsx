import React, { useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import "./deposit.css";
import Menu from "../Menu/Menu";

export default function Deposit() {

  const[depo, setDepo] = useState("")
  const[rate, setRate] = useState("")

  // converting of curremcy

async function converter() {
    let url = await fetch( `https://v6.exchangerate-api.com/v6/685a771ad3dfff4aed89cd28/pair/USD/NGN/${depo}`)
    let data = await url.json()

    setRate("$" + data.conversion_result)
}



converter()

  return (
    <>
      <main className="deposit-main">
        <Menu />
        <section className="deposit-sector">
          <form>
          <p>{depo}</p>
            <h3>Deposit</h3>
            <div className="from-block">
              <header>From:</header>
              <select name="" id="">
                <option value="1">
                  <FaMoneyBillTransfer />
                  Bank Card
                </option>
              </select>
            </div>

            <div className="amount-block">
              <div>Amount</div> <input type="number" onChange={(e)=>setDepo(e.target.value)} />
            </div>
            <p className="convert-usdt ">
              <header>USDT</header>
              <span>{ rate}</span>
            </p>
            <div className="action-block">
              <button>Cancel</button>
              <button>Deposit</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
