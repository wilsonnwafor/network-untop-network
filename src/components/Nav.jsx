import React from "react";
import "./nav.css";
import "./general.css";
import { FaBell, FaQuestionCircle, FaSearch, FaUser } from "react-icons/fa";

// import { WagmiProvider, createConfig, http } from 'wagmi';
// import { baseSepolia } from 'wagmi/chains';
// import { coinbaseWallet } from 'wagmi/connectors';

// const wagmiConfig = createConfig({
//   chains: [baseSepolia],
//   connectors: [
//     coinbaseWallet({
//       appName: 'onchainkit',
//     }),
//   ],
//   ssr: true,
//   transports: {
//     [baseSepolia.id]: http(),
//   },
// });

// function App({ children }) {
//   return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
// }

// import {
//   ConnectWallet,
//   Wallet,
//   WalletDropdown,
//   WalletDropdownDisconnect,
// } from '@coinbase/onchainkit/wallet';
// import {
//   Address,
//   Avatar,
//   Name,
//   Identity,
// } from '@coinbase/onchainkit/identity';
// import { color } from '@coinbase/onchainkit/theme';

export default function Nav() {
  return (
    <nav className="nav">
      <header className="nav-header">
        <img className="nav-logo" src="src/assets/imgs/nun-logo2.png" alt="" />
        <ul className="nav-list">
          <button> CONNECT WALLET </button>

          <FaSearch />
          <FaQuestionCircle />
          <FaBell />
          <FaUser />
        </ul>
      </header>
    </nav>
  );
}
