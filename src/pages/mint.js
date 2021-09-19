import React from 'react'
import { Layout, MintForm } from 'components'

import * as styles from 'styles/pages/Claim.module.scss'

const Mint = () => {
  return (
    <Layout title='Claim S&T'>
      <div className={styles.claim__cta}>
        {/* CTA title */}
        <h1>Mint your S&T</h1>
        <br />
        {/* CTA Description */}
        <p>
          You can mint the Spell & Talent token just for <b>0,01 ETH</b> and the gas fee. The maximum number of Spell & Talent you can mint at once is <b>50</b>. 
          See our <a href="/faq" target='_blank' rel="noreferrer">faq </a>section for more details.
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
      <MintForm type={MintForm.TYPE_MINT} />
    </Layout>
  )
}

export default Mint
