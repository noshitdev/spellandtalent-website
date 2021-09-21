import React, { useRef } from 'react'

import { QUICK_LINKS } from 'constants/links'
import { LOOT_BAGS, N_BAGS, ST_BAGS } from 'constants/bags'

import { Button, Layout } from 'components'

import 'styles/global.scss'

import * as styles from 'styles/pages/Home.module.scss'
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const rand = useRef(Math.random())
  const [bugRef, isBugVisible] = useInView({
    threshold: 0,
  })

  const renderQuickLinks = () => (
    <ul>
      {QUICK_LINKS.map(({ name, url }, i) => (
        <li key={i}>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )

  const getRandomBag = (bags) => bags[Math.floor(rand.current * bags.length)]

  const renderBag = (bags, name, address, ref) => {
    const getLink = (id) => address ? `https://opensea.io/assets/${address}/${id}` : '/'
    const { id, attributes } = getRandomBag(bags)
    const key = name+id

    return (
      <React.Fragment>
        <a
          href={getLink(id)}
          target={address ? '_blank' : ''}
          rel='noopener noreferrer'
          key={key}
          className={styles.home__bag + ' ' + (isBugVisible ? styles.animation : '')}
          ref={ref}
        >
          <div className={styles.home__bag_attributes}>
            <div className={styles.home__bag_project}>
              <span>{name}</span>
            </div>
            <span>#{id}</span>
            <ul>
              {attributes.map((attribute, i) => (
                <li key={key+i}>
                  <span>{attribute}</span>
                </li>
              ))}
            </ul>
          </div>
        </a>
      </React.Fragment>
    )
  }

  const renderMixes = () => {
    return (
      <div className={styles.home__feature}>
        <span>Example Mixes:</span>
        {renderBag(LOOT_BAGS, 'Loot', '0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7')}
        {renderBag(ST_BAGS, 'Spell & Talent', null, bugRef)}
        {renderBag(N_BAGS, 'N Project', '0x05a46f1e545526fb803ff974c790acea34d1f2d6')}
      </div>
    )
  }

  return (
    <Layout key="Welcome" title='Welcome'>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Spell & Talent</h1>

          {/* Quicklinks */}
          {renderQuickLinks()}

          {/* CTA Description */}
          <p>
            Spell & Talent is randomly generated skills for adventurers.
            <br />Combine them with any other <a href='https://www.lootproject.com/' target='_blank' rel="noreferrer">#loot </a> or <a href='https://twitter.com/the_n_project_' target='_blank' rel="noreferrer">#n </a>
            ... and gain power beyond the imagination!
            <br />Mixing them together let you overcome all the difficulties and create the greatest stories.
          </p>
        </div>

        {/* Claim */}
        <div className={styles.home__feature}>
          <Button
            info="Be hurry! Only first 8,000 holders are eligible to claim free Spell & Talent!"
            label="Loot and N Project holders! Claim your Spell & Talent!"
            link="/claim"
          />
          <br />
          <Button label="Adventurers! Mint your Spell & Talent!" link="/mint" />
        </div>

        {/* Sample mixes */}
        {renderMixes()}
    </Layout>
  )
}

export default Home
