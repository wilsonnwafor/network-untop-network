import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./reg.css";
import "../general.css";
import Nav from "../nav/Nav";
import Login from "./Login";

export default function Reg() {
  const [log_inp, setLogInp] = useState({
    firstName: "",
    lastMame: "",
    phone: "",
    pin: "",
    comfirmPin: "",
  });
  return (
    <>
      <main className="reg-main">
        {/* <Nav /> */}
        <div className="reg-flex">
          <form className="reg-form">
            <div className="form-block">
              {/* <h2>{log_inp.phone} {log_inp.pin}{log_inp.firstName}{log_inp.lastMame} {log_inp.comfirmPin}</h2> */}

              <p className="input-p1">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName-inp"
                    onChange={(e) =>
                      setLogInp({ ...log_inp, firstName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName-inp"
                    onChange={(e) =>
                      setLogInp({ ...log_inp, lastMame: e.target.value })
                    }
                  />
                </div>
              </p>

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
              <p className="input-p2">
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

                <div>
                  <label htmlFor="comfirmPin-inp">Confirm Pin</label>
                  <input
                    type="number"
                    id="comfirmPin-inp"
                    onChange={(e) =>
                      setLogInp({ ...log_inp, comfirmPin: e.target.value })
                    }
                  />
                </div>
              </p>

              <p className="forget-p">FORGOT PASSWORD</p>
              <button className="login-btn">SIGN UP</button>

              <span className="or">or</span>

              <p className="other-opt">
                <button>
                  <Link className="link"> Google</Link>
                </button>
                <button>
                  {" "}
                  <Link className="link">Wallet Connect</Link>{" "}
                </button>
                <button className="toLogin">
                  {" "}
                  <Link className="link" to="/Login">
                    {" "}
                    Login
                  </Link>
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
