import React, { useEffect, useRef, useState } from 'react'
import useWallet, { ConnectionRejectedError } from 'use-wallet'
import Web3 from 'web3'
import { Button, Layout } from 'components'

import * as styles from 'styles/pages/Claim.module.scss'

const config = process.env.PRODUCTION ? require('data/contract/mainnet.json') : require('data/contract/rinkeby.json')

const nameFromMethod = (method) => {
  const name = method.slice(0, -9)

  return name.charAt(0).toUpperCase() + name.slice(1);
}

const message = (msg) => {
  alert(msg);
}

const getAssetUrl = (tokenId) => {
  return `https://${process.env.PRODUCTION ? '' : 'testnets.'}opensea.io/assets/${config.contractAddr}/${tokenId}`
}

// Claim page
const Claim = () => {
  const wallet = useWallet()
  const { current: web3 } = useRef(new Web3(window.ethereum))
  const { current: contract } = useRef(new web3.eth.Contract(config.abi, config.contractAddr))
  const [isLoot, setIsLoot] = useState(true)
  const [bags, setBags] = useState([])

  useEffect(() => {
    if (!wallet.account) {
      return
    }

    const subscriber = contract.events.Transfer({
      filter: { to: wallet.account },
      fromBlock: 'latest'
      // fromBlock: 0
    })
      .on('data', async ({ returnValues }) => {
        const { tokenId } = returnValues
        if (!tokenId) {
          return
        }

        let tokenURI
        try {
          tokenURI = await contract.methods.tokenURI(tokenId).call()
        } catch (e) {
          console.error(e)
          return
        }

        const json = atob(tokenURI.substring(29))
        const result = JSON.parse(json)

        setBags((bags) => [{ name: result.name, image: result.image, url: getAssetUrl(tokenId) }, ...bags])
      })

    return () => subscriber.unsubscribe()
  }, [wallet.account, wallet.chainId, contract])

  const mint = async (name, price, numberOfTokensOrTokenId) => {
    const gasPrice = await web3.eth.getGasPrice()
    const estimatedGas = await contract.methods[name](numberOfTokensOrTokenId).estimateGas({
      value: price,
      from: wallet.account
    })

    return contract.methods[name](numberOfTokensOrTokenId).send({
      gas: parseInt(estimatedGas),
      gasPrice: parseInt(1.13 * gasPrice),
      from: wallet.account,
      value: price
    })
  }

  const handleSubmit = (method) => async (e) => {
    e.preventDefault()

    if (parseInt(process.env.CHAIN_ID) !== wallet.chainId) {
      message(`You are not on the ${process.env.CHAIN_NAME} network.`)
      return
    }

    let value = e.target.value.value
    let price = 0

    if ('mint' === method) {
      value = parseInt(value)
      price = parseInt(await contract.methods.price(value).call());
    }

    try {
      await mint(method, price, value)
    } catch (e) {
      switch (true) {
        case e.message.includes('insufficient funds'):
        case e.message.includes('E:INVALID_ETH_VALUE'):
          message('You don\'t have enough ETH on your wallet.');
          break;
        case e.message.includes('denied transaction'):
          message('You denied transaction signature.');
          break;
        case e.message.includes('E:TOKEN_EXISTS'):
          message('S&T token was minted on this token ID.');
          break;
        case e.message.includes('E:MAX_PURCHASE'):
          message('You can only mint 20 tokens at a time.');
          break;
        case e.message.includes('nonexistent token'):
        case e.message.includes('E:INVALID_TOKEN'):
          message('Token ID not found.');
          break;
        case e.message.includes('E:INVALID_SUPPLY'):
          message('Purchase would exceed max supply of tokens.');
          break;
        case e.message.includes('E:NO_MORE'):
          message(`Tokens for ${nameFromMethod(method)} owners have been distributed but you can still to claim in other way.`);
          break;
        case e.message.includes('E:WRONG_OWNER'):
          message('You are not owner of the Token Id.');
          break;
        default:
          message('Unexpected error. Please refresh the page.');
          break;
      }
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
          <input name="value" type="number" min="0" placeholder="NFT ID" required />

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

      <div className={styles.claim__cta}>
        {bags.map(({ image, name, url }) => (
          <a key={name} href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} />
          </a>
        ))}
      </div>
    </Layout>
  )
}

export default Claim
