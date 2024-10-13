import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import "./withdraw.css";
import Menu from "../Menu/Menu";
import { FaWallet } from "react-icons/fa";
import Nav from "../Nav";

export default function Withdraw() {
  return (
    <>
    <Nav/>
      <main className="withdraw-main">
        <Menu />
        <section className="withdraw-sector">
          <form>
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
              <div>Amount</div> <input type="number" />
            </div>
            <p className="convert-usdt">
                <header>USDT</header>
                <span>1.00</span>
            </p>
            <div className="action-block">
              <button>Cancel</button>
              <button>Withdraw</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
