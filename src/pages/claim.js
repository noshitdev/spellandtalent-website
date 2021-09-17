import React, { useRef, useState } from 'react'
import useWallet, { ConnectionRejectedError } from 'use-wallet'
import Web3 from 'web3'
import { Button, Layout } from 'components'

import * as styles from 'styles/pages/Claim.module.scss'

const config = process.env.PRODUCTION ? require('data/contract/mainnet.json') : require('data/contract/rinkeby.json')

// Claim page
const Claim = () => {
  const wallet = useWallet()
  const { current: web3 } = useRef(new Web3(window.ethereum))
  const { current: contract } = useRef(new web3.eth.Contract(config.abi, config.contractAddr))
  const [isLoot, setIsLoot] = useState(true)

  const mint = async (name, price, numberOfTokensOrTokenId) => {
    const gasPrice = await web3.eth.getGasPrice()
    let estimatedGas

    try {
      estimatedGas = await contract.methods[name](numberOfTokensOrTokenId).estimateGas({
        value: price,
        from: wallet.account
      })
    } catch (e) {
      // TODO show popup "err: insufficient funds for gas * price + value: address 0xaFf6759a267582Be5c3fd5f6F228a8B8C9fC52dD have 7039098081794652 want 10000000000000000 (supplied gas 14995852)"
      console.error('mintErrorMint', e)
    }

    return contract.methods[name](numberOfTokensOrTokenId).send({
      gas: parseInt(estimatedGas),
      gasPrice: parseInt(1.13 * gasPrice),
      from: wallet.account,
      value: price
    })
  }

  const handleSubmit = (type) => async (e) => {
    e.preventDefault()

    let value = e.target.value.value
    let price = 0

    if ('mint' === type) {
      value = parseInt(e.target.value.value)
      price = value * (await contract.methods.price(value));
    }

    try {
      await mint(type, price, value)
    } catch (e) {
      // TODO RPC Error: MetaMask Tx Signature: User denied transaction signature.
      console.error('mintErrorMint', e)
    }
  }

  const handleChange = (isLoot) => {
    setIsLoot(isLoot)
  }

  const renderError = (error) => {
    let message = '';
    switch (true) {
      case error instanceof ConnectionRejectedError:
        message = 'Connection error: the user rejected the activation'
        break;
      case error?.code === -32002:
        message = 'Request Permissions already pending'
        break;
      case error?.name:
        message = 'Request Permissions already pending'
        break;
      default:
        message = 'Error. Try refresh the page.'
        break;
    }

    return (
      <div className={styles.connect__container}>
        <p>
          {message}
        </p>
      </div>
    )
  }

  const renderConnecting = () => {
    return (
      <div className={styles.connect__container}>
        <p>
          Connecting to {wallet.connector}...
        </p>
      </div>
    )
  }

  const renderConnected = () => {
    return (
      <div className={styles.claim__feature}>
        <p>Connected with ${wallet.account.substr(0, 6)}...</p>

        <div className={styles.claim__btn__container}>
          <form onSubmit={handleSubmit('mint')}>
            <input name="value" type="number" min="0" max={process.env.MAX_PURCHASE} defaultValue="5" required />
            <Button
              label="Claim Spell & Talent"
              type="submit"
              variant={Button.VARIANT_BUTTON}
            />
          </form>
        </div>

        <p>Enter your Loot or N ID's:</p>
        <div className={styles.claim__radio}>
          <Button
            active={isLoot}
            label="Loot ID's"
            onClick={() => handleChange(true)}
            variant={Button.VARIANT_BUTTON}
          />
          <Button
            active={!isLoot}
            label="N ID's"
            onClick={() => handleChange(false)}
            variant={Button.VARIANT_BUTTON}
          />
        </div>
        <form onSubmit={handleSubmit(isLoot ? 'lootOwnerMint' : 'nOwnerMint')}>
          <input name="value" type="text" placeholder="NFT ID" required />

          <Button
            label="Claim Spell & Talent"
            type="submit"
            variant={Button.VARIANT_BUTTON}
          />
        </form>
      </div>
    )
  }

  const renderDisconnected = () => {
    return (
      <div className={styles.connect__container}>
        <Button label="Connect to MetaMask" onClick={() => wallet.connect()} variant={Button.VARIANT_BUTTON} />
        <Button label="Connect to Wallet Connect" onClick={() => wallet.connect('walletconnect')} variant={Button.VARIANT_BUTTON} />
      </div>
    )
  }

  return (
    <Layout title='Claim S&T'>
      <div className={styles.claim__cta}>
        {/* CTA title */}
        <h1>Claim your S&T</h1>
        <br />
        {/* CTA Description */}
        <p>
          Spell & Talent NFT can be claimed once by first 4,000 <a href='https://www.lootproject.com/' target='_blank' rel="noreferrer">#loot </a> project NFT
          <br />and 4,000 <a href='https://twitter.com/the_n_project_' target='_blank' rel="noreferrer">#n </a> project NFT.
          <br />
        </p>
      </div>

      <div className={styles.claim__cta}>
        {/* CTA title */}
        <p>
          Spell & Talent combined with <a href='https://www.lootproject.com/' target='_blank' rel="noreferrer">Loot</a>, <a href='https://twitter.com/the_n_project_' target='_blank' rel="noreferrer">N</a>, <a href='https://mapsproject.xyz/' target='_blank' rel="noreferrer">Maps</a> project and other related can be used as building blocks to create unique stories.
          Let our imagination speak and build something great by mixing all of them into one set.
        </p>
      </div>

      <div className={styles.claim__cta}>
        {wallet.status !== 'disconnected' && (
          <div className={styles.connect__container}>
            <Button label="Disconnect Wallet" onClick={() =>  wallet.reset()} variant={Button.VARIANT_BUTTON} />
          </div>
        )}

        {wallet.error && renderError(wallet.error)}
        {wallet.status === 'connected' && renderConnected()}
        {wallet.status === 'connecting' && renderConnecting()}
        {wallet.status === 'disconnected' && renderDisconnected()}
      </div>
    </Layout>
  )
}

export default Claim
