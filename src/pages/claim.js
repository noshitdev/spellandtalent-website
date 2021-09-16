import React, { useState } from 'react'

import { Button, Layout } from 'components'

import * as styles from 'styles/pages/Claim.module.scss'

// remove after adding logic of connect
const WALLET_ADDRESS = '0x414A8899878'
// 

const TYPE_N = 'n'
const TYPE_LOOT = 'loot'

const Claim = () => {
  const [ selectedType, setSelectedType ] = useState()
  const [ walletConnected, setWalletConnected ] = useState(false)
  const [ inputField, setInputField ] = useState()

  const btnLabel = walletConnected ? 'Disconnect Wallet' : 'Connect Wallet'

  const handleSelectType = (type) => {
    if ((TYPE_N === selectedType && TYPE_N === type)
    || (TYPE_LOOT === selectedType && TYPE_LOOT === type)
    ) {
      return setSelectedType()
    }


    setSelectedType(type)
  }

  const handleConnectWallet = () => {
    setWalletConnected(!walletConnected)
  }

  const handleClaim = () => {
    console.log(inputField.value);
  }

  const renderConnectedWalletContent = () => {
    return (
      <div className={styles.claim__feature}>
        <p>Connected with ${WALLET_ADDRESS.substr(0, 6)}...</p>
        <p>Enter your Loot or N ID's:</p>
        <div className={styles.claim__radio}>
          <Button 
            active={TYPE_LOOT === selectedType}
            label="Loot ID's" 
            onClick={() => handleSelectType(TYPE_LOOT)}
            variant={Button.VARIANT_BUTTON} 
          />
          <Button 
            active={TYPE_N === selectedType}
            label="N ID's"
            onClick={() => handleSelectType(TYPE_N)} 
            variant={Button.VARIANT_BUTTON} 
          />
        </div>
        <div className={styles.claim__btn__container}>
          <input 
            disabled={!selectedType} 
            name="ids" 
            type="text"
            placeholder="NFT ID"
            ref={myinput => setInputField(myinput)} 
          />
          <Button 
            disabled={!selectedType}
            label="Claim Spell & Talent"
            onClick={handleClaim}
            variant={Button.VARIANT_BUTTON}
          />
        </div>
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
          Spell & Talent NFT can be claimed once by first 4,000 <a href='https://www.lootproject.com/' target='_blank'>#loot </a> project NFT
          <br />and 4,000 <a href='https://twitter.com/the_n_project_' target='_blank'>#n </a> project NFT.
          <br /> 
        </p>
      </div>

      <div className={styles.claim__cta}>
        {/* CTA title */}
        <p>
          Spell & Talent combined with <a href='https://www.lootproject.com/' target='_blank'>Loot</a>, <a href='https://twitter.com/the_n_project_' target='_blank'>N</a>, <a href='https://mapsproject.xyz/' target='_blank'>Maps</a> project and other related can be used as building blocks to create unique stories.
          Let our imagination speak and build something great by mixing all of them into one set.
        </p>
      </div>

      <div className={styles.claim__cta}>
        <div className={styles.claim__btn__container}>
          <Button label={btnLabel} onClick={handleConnectWallet} variant={Button.VARIANT_BUTTON} />
        </div>
        {walletConnected && renderConnectedWalletContent()}
      </div>

    </Layout>
  )
}

export default Claim
