import React from 'react'
import { Layout, MintForm } from 'components'

import * as styles from 'styles/pages/Claim.module.scss'

// Claim page
const Claim = () => {
  return (
    <Layout title='Claim S&T'>
      <div className={styles.claim__cta}>
        {/* CTA title */}
        <h1>Claim your S&T</h1>
        <br />
        {/* CTA Description */}
        <p>
          Spell & Talent NFT can be claimed once by first 4,000 <a href='https://www.lootproject.com/' target='_blank' rel="noreferrer">#loot </a> project NFT
          <br />and 4,000 <a href='https://twitter.com/the_n_project_' target='_blank' rel="noreferrer">#n </a> project NFT. You only have to pay the gas fee.
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

      <MintForm type={MintForm.TYPE_CLAIM} />
    </Layout>
  )
}

export default Claim
