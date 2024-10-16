import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import "/src/components/auth/Login.jsx";
import "/src/components/auth/Reg.jsx";

export default function Landing() {
  return (
    <main className="landing_bg">
      <div className="select_block">
        <select name="" id="" className="lang_select">
          <option value="lang_opt">choose language</option>
        </select>
      </div>

      <div className="landing_logo_block">
        <img
          className="landing_logo"
          src="src/assets/imgs/nun-logo2.png"
          alt="Logo"
        />
        <p className="logo_text">SIMPLE FAST AND SAFE STAKING</p>
      </div>

      <div className="login_block">
        <Link to="/Login">
          {" "}
          <button onClick={(e) => {}} className="login_btn">
            LOGIN
          </button>
        </Link>

        <Link to="/Reg">
          {" "}
          <button className="sign_btn">SIGN UP</button>
        </Link>
      </div>
    </main>
  );
}

// import React from 'react'

// export default function landing() {
//   return (
//     <div>

//     </div>
//   )
// }
