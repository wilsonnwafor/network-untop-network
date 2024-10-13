import React from "react";
import Nav from "../Nav";
import "./dashboard.css";
import "../general.css";
import {
  FaAward,
  FaBeer,
  FaDiscord,
  FaEyeSlash,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaUser,
  FaWallet,
} from "react-icons/fa"; // Font Awesome icon
import { FaGear, FaGears } from "react-icons/fa6";
import Menu from "../Menu/Menu";

export default function Dashboard() {
  return (
    <main className="dash-main">
      <Nav />
      <div className="dash-flex">
<Menu/>

        {/* Deposit, Withdraw, and Swap Sections */}
        <main className="transaction">
          <menu className="transact-menu">
            <div className="transact-block">
              <h3>Deposit</h3>
              <input type="number" placeholder="Amount" />
              <button>Continue</button>
            </div>

            <div className="transact-block">
              <h3>Withdraw NGN</h3>
              <input type="number" placeholder="Amount" />
              <button>Continue</button>
            </div>
          </menu>

          <menu className="unstake-menu">
            <div className="unstake-block">
              <h2>Goals</h2>
              <div className="unstake-item">
                <p>
                  <div className="unstake-p">
                    <header>Vacation</header>
                    <h3>$ 500.00</h3>
                    <samp className="apy-gained">
                      <span>APY</span> <span>39%</span>
                    </samp>
                  </div>

                  <button className="unstake-btn">Unstake</button>
                </p>
              </div>

              <div className="unstake-item">
                <p>
                  <div className="unstake-p">
                    <header>Vacation</header>
                    <h3>$ 500.00</h3>
                    <samp className="apy-gained">
                      <span>APY</span> <span>39%</span>
                    </samp>
                  </div>

                  <button className="unstake-btn">Unstake</button>
                </p>
              </div>

              <div className="unstake-item">
                <p>
                  <div className="unstake-p">
                    <header>Vacation</header>
                    <h3>$ 500.00</h3>
                    <samp className="apy-gained">
                      <span>APY</span> <span>39%</span>
                    </samp>
                  </div>

                  <button className="unstake-btn">Unstake</button>
                </p>
              </div>
              
            </div>


          </menu>


        </main>

        {/* Goals Section */}
        {/* Stake Amount Section */}
        <section className="stake-sector">
          <div className="stake-amt-wrap">
            <div className="staked-amt-ctn">
              <div className="stake-amount">
                <p>Staking amount</p>
                <div className="stake-amount-flex">
                  <h2>USDC</h2>
                  <h2>10,000.00</h2>
                </div>
              </div>
              <p className="apy-p">
                <span>APY</span>
                <span>39%</span>
              </p>
            </div>
            <p className="power">Powered by Yellow Card</p>
          </div>

          {/* Form Section */}
          <form className="goal-form">
            <header className="goal-form-header">Stake to create Goal</header>
            <p className="goal-form-p1">
              <div> Amount to stake</div>
              <select className="stake-select">
                <option value="0">USDC 0.00</option>
              </select>
            </p>

            {/* <div> Stake date</div> */}
            <input type="date" className="date-picker" />

            <p className="goal-form-p2">
              <header>Additional details</header>
              <input type="text" placeholder="Name your goal" />

              <textarea placeholder="Notes"></textarea>
            </p>

            <button className="stake-button" type="submit">
              Stake
            </button>
          </form>

          {/* Saved Goals Section */}
          <div className="saved-goals">
            <h3>Saved Goals</h3>
            <div className="goal-list">
              <div className="goal-item">
                <FaAward />
                <p>Dream</p>
              </div>

              <div className="goal-item">
                <FaAward />
                <p>Dream</p>
              </div>

              <div className="goal-item">
                <FaAward />
                <p>Dream</p>
              </div>
            </div>
            <p className="all-history">See all</p>
          </div>
        </section>
      </div>
    </main>
  );
}
