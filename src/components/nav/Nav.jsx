import React from "react";
import "./nav.css";
// import "./general.css";
import { FaBell, FaQuestionCircle, FaSearch, FaUser } from "react-icons/fa";

import "@coinbase/onchainkit/styles.css";
import {
  Avatar,
  Identity,
  Name,
  Badge,
  Address,
} from "@coinbase/onchainkit/identity";
// import { WalletComponents } from './ConnectButton';

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { EthBalance } from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";

export default function Nav() {
  return (
    <nav className="nav">
      <header className="nav-header">
        <img className="nav-logo" src="src/assets/imgs/nun-logo2.png" alt="" />
        <ul className="nav-list">

 

          <Wallet className="wallet-block bg-blue-800 ">
            <ConnectWallet className="connect-wallet bg-blue-800 w-5">
              <Avatar className="h-6 w-6" />
              <Name />
            </ConnectWallet>
            <WalletDropdown className="walletD">
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
                <Address className={color.foregroundMuted} />
                <EthBalance />
              </Identity>
              <WalletDropdownLink
                icon="wallet"
                href="https://keys.coinbase.com"
              >
                Wallet
              </WalletDropdownLink>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>

          <FaSearch className="nav-icon"/>
          <FaQuestionCircle className="nav-icon"/>
          <FaBell className="nav-icon"/>
          <Identity className="wallet-id bg-blue-800"
            address="0x1AB850C0FFA3fe879B501fca9127f29d03464F46"
            schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
          >
              <Avatar className="avatar bg-blue-80 m-5" />
              <Badge className="badge bg-blue-80 w-4"/>
          </Identity>

        </ul>
      </header>
    </nav>
  );
}
