import React from 'react'

import { QUICK_LINKS } from 'constants/links'

import Layout from 'components/Layout'

import 'styles/global.scss'

import * as styles from 'styles/pages/Home.module.scss'

// markup
const IndexPage = () => {
  const renderQuickLinks = () => (
    QUICK_LINKS.map(({ name, url }, i) => (
      <li key={i}>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {name}
        </a>
      </li>
    ))
  )

  return (
    <Layout title='Welcome'>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Spell and Talent</h1>

          {/* Quicklinks */}
          <ul>
            {renderQuickLinks()}
          </ul>

          {/* CTA Description */}
          <p>
            Spell & Talent is randomly generated strengths for adventurers.
            <br />Combine them with any other <a href='https://www.lootproject.com/' target='_blank'>#loot </a> or <a href='https://twitter.com/the_n_project_' target='_blank'>#n </a>
            ... and gain power beyond the imagination!
            <br />Collecting them togheter let you create the most powerful character to fight and overcome the evil of this world!
            <br /> 
          </p>
        </div>

        {/* Rendering sample bags */}
        <div className={styles.home__feature}>
          <span>Example Bags:</span>
          {/* {getRandomThreeBags().map(({ id, attributes }, i) => (
            // For each loot bag, render item and link to OpenSea
            <a
              href={`https://opensea.io/assets/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7/${id}`}
              target='_blank'
              rel='noopener noreferrer'
              key={i}
              className={styles.home__bag}
            >
              <div className={styles.home__bag_attributes}>
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
          ))} */}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
