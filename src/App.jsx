import { useState } from 'react'
import Landing from './components/landing page/Landing'
import Login from './components/auth/Login'
import Reg from './components/auth/reg'
import Dashboard from './components/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Deposit from './components/Deposit/Deposit'
import Withdraw from './components/withdraw/withdraw'

function App() {


  return (
    <>
{/* <Dashboard/> */}
{/* <Deposit/> */}
{/* <Withdraw/> */}


 <Routes>

    <Route path="/" element={< Landing/>}/> 
   <Route path="/login" element={<Login />} />
   <Route path="/Reg" element={<Reg />} />
 <Route path="/Landing" element={<Landing />} />

 </Routes>

 {/* <Reg/> */}
 {/* <Stake_form/> */}
    </>
  )
}

export default App
