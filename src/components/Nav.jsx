import React from "react";
import "./nav.css";
import "./general.css";
import { FaBell, FaQuestionCircle, FaSearch, FaUser } from "react-icons/fa";

import { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

import { 
  ConnectWallet, 
  Wallet, 
  WalletDropdown, 
  WalletDropdownDisconnect, 
} from '@coinbase/onchainkit/wallet'; 
import {
  Address,
  Avatar,
  Name,
  Identity,
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';



export default function Nav() {

   
  const wagmiConfig = createConfig({
    chains: [baseSepolia],
    connectors: [
      coinbaseWallet({
        appName: 'onchainkit',
      }),
    ],
    ssr: true,
    transports: {
      [baseSepolia.id]: http(),
    },
  });
   
  function App1({ children }, { children: ReactNode }) {
    return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
  }



  return (
    <nav className="nav">
 
      <header className="nav-header">
        <img className="nav-logo" src="src/assets/imgs/nun-logo2.png" alt="" />
        <ul className="nav-list">
          <button>
            CONNECT WALLET



          </button>

          <Wallet>
        {/* <ConnectWallet>
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet> */}
        {/* <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address className={color.foregroundMuted} />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown> */}
      </Wallet>

          <FaSearch />
          <FaQuestionCircle />
          <FaBell />
          <FaUser />
        </ul>
      </header>
    </nav>
  );
}
