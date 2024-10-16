import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import "./deposit.css";
import Menu from "../Menu/Menu";

export default function Deposit() {
  return (
    <>
      <main className="deposit-main">
        <Menu />
        <section className="deposit-sector">
          <form>
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
              <div>Amount</div> <input type="number" />
            </div>
            <p className="convert-usdt">
              <header>USDT</header>
              <span>1.00</span>
            </p>
            <div className="action-block">
              <button>Cancel</button>
              <button>Pay</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
