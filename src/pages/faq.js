import React from 'react'

import { questions } from 'constants/faq'

import Layout from 'components/Layout'

import * as styles from 'styles/pages/FAQ.module.scss'

// FAQ page
const FAQ = () => {
  const renderQuestion = (item, index) => {
    console.log('#question', item)
    return (
      <div className={styles.faq__item} key={index}>
        <h3>{item.question}</h3>
        {item.content()}
      </div>
    )
  }

  return (
    <Layout title='FAQ'>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div>
          {questions.map(renderQuestion)}
        </div>
      </div>
    </Layout>
  )
}

export default FAQ
