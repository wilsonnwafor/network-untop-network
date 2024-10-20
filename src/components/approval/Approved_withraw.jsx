import React from 'react'
import { FaCheckCircle, FaMoneyBill, FaMoneyBillAlt } from 'react-icons/fa'
import { FaMoneyBills, FaMoneyBillTransfer } from 'react-icons/fa6'
import "./aprd_dep.css"

export default function Approved_withraw() {
    // let dep = "DEPOSITED"
  return (
    <>
<main className='approve-main'>
    <section className='approve-block'>
        <form className='approve-form'>
        <h1 className='success'>Success!</h1>
      <div className='suc-block'>
      <h3 className='suc-msg'>FUNDS HAVE BEEN SUCCESSFULLY WITHRAWED </h3> <FaMoneyBills className='bill-icon'/>   
    </div> 
         <FaCheckCircle className='check-icon'/>
  

        </form>
  </section>
</main>
    </>
  )
}
