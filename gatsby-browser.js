import React from 'react'
import { UseWalletProvider } from 'use-wallet'

export const wrapRootElement = ({ element }) => (
  <UseWalletProvider
    chainId={process.env.CHAIN_ID}
    connectors={{
      walletconnect: { rpcUrl: process.env.RPC_URL },
    }}
  >
    {element}
  </UseWalletProvider>
)

