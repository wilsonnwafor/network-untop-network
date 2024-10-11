import React from 'react'
import "./nav.css"


export default function Nav() {
  return (
   <nav className='nav'>
    <header className='nav-header'>
        <img className='nav-logo' src="src/assets/imgs/nun-logo2.png" alt="" />
        <ul className='nav-list'>
<li>HOME</li>
<li>STAKING</li>
<li>ACCOUNT</li>
        </ul>
    </header>
   </nav>
  )
}
