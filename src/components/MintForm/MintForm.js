import React, { useEffect, useRef, useState } from 'react'
import useWallet, { ConnectionRejectedError } from 'use-wallet'
import Web3 from 'web3'

import * as styles from 'styles/components/MintForm.module.scss'

import Button from './../Button'

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

const MAX_PURCHASE = process.env.MAX_PURCHASE

const TYPE_CLAIM = 'claim'
const TYPE_MINT = 'mint'

const Mint = ({ type }) => {
  const wallet = useWallet()
  const { current: web3 } = useRef(new Web3(typeof window !== `undefined` ? window.ethereum : undefined))
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
  }, [wallet.account, wallet.chainId])

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

    try {
      if (TYPE_MINT === method) {
        value = parseInt(value)
        price = parseInt(await contract.methods.price(value).call());
      }

      await mint(method, price, value)
    } catch (e) {
      console.error(e)
      switch (true) {
        case e.message.includes('insufficient funds'):
        case e.message.includes('E:INVALID_ETH_VALUE'):
          message('You don\'t have enough ETH on your wallet.');
          break;
        case e.message.includes('denied transaction'):
          message('You denied transaction signature.');
          break;
        case e.message.includes('E:TOKEN_EXISTS'):
          message('S&T token was minted for this token ID.');
          break;
        case e.message.includes('E:MAX_PURCHASE'):
          message(`You can only mint ${MAX_PURCHASE} tokens at once.`);
          break;
        case e.message.includes('nonexistent token'):
        case e.message.includes('E:INVALID_TOKEN'):
          message('Token ID not found.');
          break;
        case e.message.includes('E:INVALID_SUPPLY'):
          message('Purchase would exceed the max supply of the tokens.');
          break;
        case e.message.includes('E:NO_MORE'):
          message(`There are no more free available tokens for ${nameFromMethod(method)} holders. 4000 already distributed. You can still mint them for 0,01 ETH.`);
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
    console.error(error)

    let message = '';
    switch (true) {
      case error instanceof ConnectionRejectedError:
        message = 'You rejected the activation.'
        break;
      case error.message.includes('No Ethereum provider'):
        message = 'You mast to install wallet extension.'
        break;
      case error.message.includes('Unsupported chain'):
        message = `You are not on the ${process.env.CHAIN_NAME} network.`
        break;
      case error?.code === -32002:
        message = 'Please wait, your wallet is already trying to connect to the website...'
        break;
      case error?.name:
        message = error?.name
        break;
      default:
        message = 'Unexpected error. Try refresh the page.'
        break;
    }

    return (
      <div>
        <p>
          {message}
        </p>
      </div>
    )
  }

  const renderConnecting = () => {
    return (
      <div>
        <p>
          Connecting...
        </p>
      </div>
    )
  }

  const renderConnected = () => {
    return (
      <div className={styles.claim__feature}>
        <p>Connected with ${wallet.account.substr(0, 6)}...</p>

        {TYPE_MINT === type && (
          <div className={styles.claim__btn__container}>
            <form onSubmit={handleSubmit(TYPE_MINT)}>
              <span>Number of Spell & Talent NFTs you would like to mint:</span>
              <input name="value" type="number" min="0" max={MAX_PURCHASE} defaultValue={MAX_PURCHASE} required />
              <Button
                label="Mint Spell & Talent"
                type="submit"
                variant={Button.VARIANT_BUTTON}
              />
            </form>
          </div>
        )}

        {TYPE_CLAIM === type && (
          <>
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
          </>
        )}
      </div>
    )
  }

  const renderDisconnected = () => {
    return (
      <div>
        <Button label="Connect to MetaMask" onClick={() => wallet.connect()} variant={Button.VARIANT_BUTTON} />
        <Button label="Connect to Wallet Connect" onClick={() => wallet.connect('walletconnect')} variant={Button.VARIANT_BUTTON} />
      </div>
    )
  }

  return (
    <>
      <div className={styles.claim__cta}>
        {wallet.status !== 'disconnected' && (
          <div>
            <Button label="Disconnect Wallet" onClick={() =>  wallet.reset()} variant={Button.VARIANT_BUTTON} />
          </div>
        )}

        {wallet.error && renderError(wallet.error)}
        {wallet.status === 'connected' && renderConnected()}
        {wallet.status === 'connecting' && renderConnecting()}
        {wallet.status === 'disconnected' && renderDisconnected()}
      </div>

      <div className={styles.claim__bags}>
        {bags.map(({ image, name, url }) => (
          <a key={name} href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={name} width="400" height="400" />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </>
  )
}

Mint.TYPE_MINT = TYPE_MINT
Mint.TYPE_CLAIM = TYPE_CLAIM

export default Mint
