import React from 'react'
import Menu from '../Menu/Menu'
import "./home.css"
import Nav from '../Nav'

export default function Home() {
  return (
    <>
    <Nav/>
      <main className='home-main'>
<Menu/>  


<div className='action-btn' >
<img className="home-logo" src="src/assets/imgs/nun-logo2.png" alt="Logo" />
<p className="logo-text">SIMPLE FAST AND SAFE STAKING</p>
<p className='home-btn'>
  <button>Deposit</button> <button>Assets</button>  
</p>

</div>

      </main>

    </>
  )
}
