import React from "react";
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
import Dashboard from "../dashboard/Dashboard";

export default function Menu() {
  return (
    <>
      {/* Sidebar Navigation */}
      <section className="navigation">
        <menu className="dash-menu">
            <ul className="dash-list">
                <Link to="/home">
                <i>
                    <FaHome />
                </i>
                Home
                </Link>
                <Link to="/dashboard">
                <i>
                    <FaWallet />
                </i>{" "}
                Assets
                </Link>
                <li>
                <i className="icon-account">
                    <FaUser />
                </i>{" "}
                Profile
                </li>
                <li>
                <i className="icon-settings">
                    <FaGear />
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
    </>
  );
}
