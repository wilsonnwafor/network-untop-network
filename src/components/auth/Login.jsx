import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import "../general.css";
import Nav from "../Nav";
import Reg from "./reg";

export default function Login() {
    const[log_inp, setLogInp ]= useState({
        phone:"",
        pin:""
    })
  return (
    <>
      <main className="login-main">
        {/* <Nav /> */}
        <div className="login-flex">
          <form className="login-form">
            <div className="form-block">
                {/* <h2>{log_inp.phone} {log_inp.pin}</h2> */}
              <div>
                <label htmlFor="numb-inp">Phone</label>
                <input type="number" id="numb-inp" onChange={(e)=> setLogInp({ ...log_inp,phone: e.target.value })}/>
              </div>

              <div>
                <label htmlFor="pin-inp">Pin</label>
                <input type="number" id="pin-inp" onChange={(e)=> setLogInp({...log_inp, pin: e.target.value})} />
              </div>
              <p className="forget-p">FORGOT PASSWORD</p>
              <button className="login-btn">LOGIN</button>

              <span className="or">or</span>

              <p className="other-opt">
                <button>Google</button>
                <button>Wallet Connect</button>
               <button><Link className="link" to="/Reg"> Sign Up</Link> </button>   
              </p>
            </div>
          </form>

          <img
            className="form-logo"
            src="src/assets/imgs/nun-logo2.png"
            alt=""
          />
        </div>
      </main>
    </>
  );
}
