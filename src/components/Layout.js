import React from 'react'
import { Helmet } from 'react-helmet'

import * as styles from 'styles/components/Layout.module.scss'

const Head = ({ title }) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Spell and Talent - {title}</title>
      <meta name='title' content='Spell & Talent' />
      <meta
        name='description'
        content='Spell & Talent is randomized generated power for adventurers! Combine them with other #loot...and gain powers beyond imagination!'
      />

      {/* OG + Faceook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.noshit.dev/' />
      <meta property='og:title' content='Spell & Talent' />
      <meta
        property='og:description'
        content='Spell & Talent is randomized generated power for adventurers! Combine them with other #loot...and gain powers beyond imagination!'
      />
      <meta property='og:image' content='https://www.noshit.dev/meta.png' />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://www.noshit.dev/spellandtalent' />
      <meta property='twitter:title' content='Spell & Talent' />
      <meta
        property='twitter:description'
        content='Spell & Talent is randomized generated power for adventurers! Combine them with other #loot...and gain powers beyond imagination!'
      />
      <meta property='twitter:image' content='https://www.noshit.dev/spellandtalent/meta.png' />
    </Helmet>
  )
}

const Header = () => {
  const pathname = '/'
  const links = [
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
        This website is an {' '}
        <a
          href='https://github.com/noshitdev'
          target='_blank'
          rel='noopener noreferrer'
        >
          open-source
        </a>
        {' '}project.
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
