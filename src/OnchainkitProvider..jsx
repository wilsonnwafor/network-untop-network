'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { WagmiProvider } from 'wagmi'; 
import { base } from 'viem/chains';
import { wagmiConfig } from './wagmi';

// Remove TypeScript types and use plain JavaScript
const queryClient = new QueryClient();

function OnchainProviders({ children }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={import.meta.env.VITE_ONCHAINKIT_API_KEY}
          chain={base}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider> 
  );
}

export default OnchainProviders;


