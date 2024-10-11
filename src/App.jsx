import { useState } from 'react'
import Landing from './components/landing page/Landing'
import Login from './components/auth/login'
import Reg from './components/auth/reg'
import Dashboard from './components/dashboard/dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
<Dashboard/>

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
