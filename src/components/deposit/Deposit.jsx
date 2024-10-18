import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import "./deposit.css";
import Menu from "../Menu/Menu";

// import { useCallback } from "react";
// import { Avatar, Name } from "@coinbase/onchainkit/identity";
// import {
//   Transaction,
//   TransactionButton,
//   TransactionSponsor,
//   TransactionStatus,
//   TransactionStatusAction,
//   TransactionStatusLabel,
// } from "@coinbase/onchainkit/transaction";
// import { useAccount } from "wagmi";
// import { Wallet, ConnectWallet } from "@coinbase/onchainkit/wallet";
// import { contracts } from "./contracts";

export default function Deposit() {
//   const { address } = useAccount(); // Assuming 'address' is part of the account data

// async function converter() {
//     let url = await fetch("contract.js")
//     let data = await url.json()
//     console.log(data)
// }

  return (
    <>
      {/* address ? (
      <Transaction
        chainId={11155111}
        contracts={contracts}
        onStatus={'success'}
      >
        <TransactionButton />
        <TransactionSponsor />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
      ) : (
      <Wallet>
        <ConnectWallet>
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
      </Wallet> */}

      {/* ) ); */}


      <main className="deposit-main">
        <Menu />
        <section className="deposit-sector">
          <form>
            <h3>Deposit</h3>
            <div className="from-block">
              <header>From:</header>
              <select name="" id="">
                <option value="1">
                  <FaMoneyBillTransfer />
                  Bank Card
                </option>
              </select>
            </div>

            <div className="amount-block">
              <div>Amount</div> <input type="number" />
            </div>
            <p className="convert-usdt">
              <header>USDT</header>
              <span>1.00</span>
            </p>
            <div className="action-block">
              <button>Cancel</button>
              <button>Deposit</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
