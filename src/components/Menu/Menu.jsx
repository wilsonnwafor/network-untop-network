import React from "react";
import "../general.css";
import "./menu.css";

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
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Home from "../home/Home";
import Asset from "../asset-comp/Asset";
import Deposit from "../Deposit/Deposit";
import Withdraw from "../withdraw/withdraw";

import "@coinbase/onchainkit/styles.css";
import {
  Avatar,
  Identity,
  Name,
  Badge,
  Address,
} from "@coinbase/onchainkit/identity";

export default function Menu() {
  return (
    <>
      {/* Sidebar Navigation */}
      <section className="navigation">
        {/* <Identity
          className="menu-wallet-id bg-blue "
          address="0x1AB850C0FFA3fe879B501fca9127f29d03464F46"
          schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
        >
          <Avatar className="menu-avatar bg-blue-80 text-center" />
          <Address className="menu-address bg-blue-80 text-center flex" />
          <Badge className="badge  w-4 " />
        </Identity> */}

        <menu className="dash-menu">
          <ul className="dash-list">
            <li>
              <Link to="/Home">
                Home
              </Link>
            </li>

            <li>
              <Link to='/Asset'>
                Assets
              </Link>
            </li>
            <li>
              <Link to="/Deposit">Deposit</Link>
            </li>
            <li>
              <Link to="/Withdraw">Withraw</Link>
            </li>
            <li>
              Profile
            </li>
            <li>
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
    </>
  );
}
