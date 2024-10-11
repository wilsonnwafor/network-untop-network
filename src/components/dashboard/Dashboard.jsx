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

export default function Dashboard() {
  return (
    <main className="dash-main">
      <Nav />
      <div className="dash-flex">
        {/* Sidebar Navigation */}
        <section className="navigation">
          <menu className="dash-menu">
            <ul className="dash-list">
              <li>
                <i>
                  <FaHome />
                </i>
                Home
              </li>
              <li>
                <i>
                  <FaWallet />
                </i>{" "}
                Assets
              </li>
              <li>
                <i className="icon-account">
                  <FaUser />
                </i>{" "}
                Profile
              </li>
              <li>
                <i className="icon-settings">
                  <FaGears />
                </i>{" "}
                Settings
              </li>
            </ul>
          </menu>
          <div className="assets-overview">
            <div>
              <header className="asset-header">
                Assets Overview{" "}
                <i className="eye-icon">
                  <FaEyeSlash />
                </i>{" "}
              </header>
              <p>
                <samp className="asset-total">TOTAL:</samp>{" "}
                <samp className="asset-amount">10,000</samp>
              </p>
            </div>

            <div>
              <header className="stake-header">Stake Overview</header>
              <p>
                <samp className="stake-total">TOTAL:</samp>{" "}
                <samp className="stake-amount">10,000</samp>
              </p>
            </div>
          </div>
          <div className="social-links">
            <a href="#">
              <i className="icon-twitter"></i>
            </a>
            <a href="#">
              <i className="icon-discord"></i>
            </a>
          </div>
          {/* <p className="copyright">© 2024 NUN NUN</p> */}
          <div className="social-link">
            <i>
              <FaFacebook />
            </i>{" "}
            <i>
              <FaInstagram />
            </i>{" "}
            <i>
              <FaTwitter />
            </i>{" "}
            <i>
              <FaDiscord />
            </i>
          </div>
        </section>

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
