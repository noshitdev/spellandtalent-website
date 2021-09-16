import React from 'react'

import * as styles from 'styles/components/Button.module.scss'

export const VARIANT_INLINE = 'inline'
export const VARIANT_BUTTON = 'butto'

const Button = ({ active, info, label, link, variant = VARIANT_INLINE, onClick }) => {
  if (VARIANT_INLINE === variant) {
    return (
      <div className={styles.button__inline}>
        <a href={link}>{label}</a>
        {info && (
          <p>{info}</p>
        )}
      </div>
    )
  }

  const combinedStyles = [styles.button]
  if (active) {
    combinedStyles.push(styles.button__active)
  }

  return (
    <div>
      <a className={combinedStyles.join(' ')} href={link} onClick={onClick}>{label}</a>
      {info && (
        <p>{info}</p>
      )}
    </div>
  )
}

Button.VARIANT_BUTTON = VARIANT_BUTTON
Button.VARIANT_INLINE = VARIANT_INLINE

export default Button
