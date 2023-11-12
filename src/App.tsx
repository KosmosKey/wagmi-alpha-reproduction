import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import HookProvider from "./components/HookProvider/HookProvider";
import { injected } from "wagmi/connectors";

// @ts-ignore
const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

function App() {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <HookProvider>
          <ConnectWallet />
        </HookProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
