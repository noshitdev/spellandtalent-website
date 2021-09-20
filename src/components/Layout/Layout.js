import React from 'react'
import { Helmet } from 'react-helmet'

import * as styles from 'styles/components/Layout.module.scss'

const Head = ({ title }) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Spell & Talent - {title}</title>
      <meta name='title' content='Spell & Talent' />
      <meta
        name='description'
        content='Spell & Talent is randomized generated power for adventurers! Combine them with other nft...and gain powers beyond imagination!'
      />

      {/* OG + Faceook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.spellandtalent.noshit.dev/' />
      <meta property='og:title' content='Spell & Talent' />
      <meta
        property='og:description'
        content='Spell & Talent is randomized generated power for adventurers! Combine them with other nft...and gain powers beyond imagination!'
      />
      <meta property='og:image' content='https://www.spellandtalent.noshit.dev/meta.png' />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://www.spellandtalent.noshit.dev/' />
      <meta property='twitter:title' content='Spell & Talent' />
      <meta
        property='twitter:description'
        content='Spell & Talent is randomized generated power for adventurers! Combine them with other nft...and gain powers beyond imagination!'
      />
      <meta property='twitter:image' content='https://www.spellandtalent.noshit.dev/meta.png' />

      {/* Google */}
      <meta name="google-site-verification" content="zG_J8sUptIazra8oWtoEAxp8Cr6mnxBDIvlDO0Zt2Yw" />
    </Helmet>
  )
}

const Header = () => {
  const pathname = '/'
  const links = [
    { name: 'Claim for Loot & N Holders', path: '/claim' },
    { name: 'Mint', path: '/mint' },
    { name: 'FAQ', path: '/faq' },
  ]

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <a href="/">Spell & Talent</a>
      </div>

      {/* Navigation */}
      <div className={styles.header__links}>
        <ul>
          {links.map(({ name, path }, i) => (
            <li key={i}>
              <a href={path} className={pathname === path ? styles.header__links_active : undefined}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        This website has been inspired by an open-source {' '}
        <a
          href='https://www.lootproject.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          loot project
        </a>
        .
      </p>
      <p>
        The code of this website is available on the {' '}
        <a
          href='https://github.com/noshitdev'
          target='_blank'
          rel='noopener noreferrer'
        >
         github.
        </a>
      </p>
    </div>
  )
}

const Layout = ({ children, title }) => (
  <div>
    <Head title={title} />
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
