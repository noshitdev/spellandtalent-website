import React from 'react'
import { UseWalletProvider } from 'use-wallet'

const chainId = parseInt(process.env.CHAIN_ID)

export const wrapRootElement = ({ element }) => (
  <UseWalletProvider
    chainId={chainId}
    connectors={{
      walletconnect: { rpcUrl: process.env.RPC_URL, chainId },
    }}
  >
    {element}
  </UseWalletProvider>
)
