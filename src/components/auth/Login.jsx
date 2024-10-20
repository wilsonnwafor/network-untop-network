import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import "../general.css";
import Nav from "../nav/Nav";
import Reg from "./reg";
import Asset from "../asset-comp/Asset";
import Home from "../home/Home";

export default function Login() {
  const navigate = useNavigate();
  // const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState("");
  const [log_inp, setLogInp] = useState({
    phone: "",
    pin: "",
  });

  let numb = 12345;
  let mypin = 123;

  function AuthCheck(e) {
    e.preventDefault();
    if (log_inp.phone == numb && log_inp.pin == mypin) {
      navigate("/home");
    } else if (log_inp.phone == "" && log_inp.pin == "") {
      setInvalid("Please fill all inputs");
    } else if (log_inp.phone != numb && log_inp.pin != mypin) {
      setInvalid("Please enter a valid number or pin");
    }
  }
  function handleChange(e) {}

  return (
    <>
      <main className="login-main">
        {/* <Nav /> */}
        <div className="login-flex">
          <form className="login-form">
            <div className="form-block">
              {invalid ? <p className="err-text">{invalid}</p> : ""}
              {/* <h2>{log_inp.phone} {log_inp.pin}</h2> */}
              <div>
                <label htmlFor="numb-inp">Phone</label>
                <input
                  type="number"
                  id="numb-inp"
                  onChange={(e) =>
                    setLogInp({ ...log_inp, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="pin-inp">Pin</label>
                <input
                  type="number"
                  id="pin-inp"
                  onChange={(e) =>
                    setLogInp({ ...log_inp, pin: e.target.value })
                  }
                />
              </div>
              <p className="forget-p">FORGOT PASSWORD</p>
              <button onClick={(e) => AuthCheck(e)} className="login-btn">
                LOGIN
              </button>

              <span className="or">or</span>

              <p className="other-opt">
                <button>Google</button>
                <button>Wallet Connect</button>
                <button>
                  <Link className="link" to="/Reg">
                    {" "}
                    Sign Up
                  </Link>{" "}
                </button>
              </p>
            </div>
          </form>
          <div className="logo-block">
            <img
              className="form-logo"
              src="src/assets/imgs/nun-logo2.png"
              alt=""
            />
            <p className="logo-text">SIMPLE FAST AND SAFE STAKING</p>
          </div>
        </div>
      </main>
    </>
  );
}
