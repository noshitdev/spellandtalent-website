import React from 'react'

import { QUICK_LINKS } from 'constants/links'
import { LOOT_BAGS, N_BAGS, ST_BAGS } from 'constants/bags'

import { Button, Layout } from 'components'

import 'styles/global.scss'

import * as styles from 'styles/pages/Home.module.scss'

const Home = () => {
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

  const getRandomBag = (bags) => {
    const shuffled = bags.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 1);
  }

  const renderBag = (bags, name, address) => {
    return (
      <React.Fragment>
        {getRandomBag(bags).map(({ id, attributes }, i) => (
          <a
            href={`https://opensea.io/assets/${address}/${id}`}
            target='_blank'
            rel='noopener noreferrer'
            key={i}
            className={styles.home__bag}
          >
            <div className={styles.home__bag_attributes}>
              <div className={styles.home__bag_project}>
                <span>{name}</span>
              </div>
              <span>#{id}</span>
              <ul>
                {attributes.map((attribute, i) => (
                  <li key={i}>
                    <span>{attribute}</span>
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </React.Fragment>
    )
  }

  const renderMixes = () => {
    return (
      <div className={styles.home__feature}>
        <span>Example Mixes:</span>
        {renderBag(LOOT_BAGS, 'Loot', '0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7')}
        {renderBag(ST_BAGS, 'Spell & Talent')}
        {renderBag(N_BAGS, 'N Project', '0x05a46f1e545526fb803ff974c790acea34d1f2d6')}
      </div>
    )
  }

  return (
    <Layout title='Welcome'>
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
            info="Be hurry! Only first 4,000 holders are eligible to claim free Spell & Talent!"
            label="Loot and N Project holders! Claim your Spell & Talent!" 
            link="/claim" 
          />
          <br />
          <Button label="Adventurers! Mint your Spell & Talent!" link="/claim" />
        </div>

        {/* Sample mixes */}
        {renderMixes()}
    </Layout>
  )
}

export default Home
