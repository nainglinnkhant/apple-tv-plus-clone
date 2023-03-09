import React from 'react'
import Link from 'next/link'

import { SHOWSLISTONE, SHOWSLISTTWO } from '../data'
import styles from '../styles/Shows.module.scss'

const Shows = () => {
  return (
    <section className={styles['shows-section']}>
      <div className={styles['shows-marquee']}>
        <div className={styles['marquee-wrapper']}>
          <ul className={styles['marquee-one']}>
            {SHOWSLISTONE.map(({ poster }, index) => (
              <li key={index} style={{ backgroundImage: `url(${poster})` }}>
                <Link href='/' />

                <div className={styles.overlay} />

                <button>Stream now</button>
              </li>
            ))}
          </ul>

          <ul className={styles['marquee-one']}>
            {SHOWSLISTONE.map(({ poster }, index) => (
              <li key={index} style={{ backgroundImage: `url(${poster})` }}>
                <Link href='/' />

                <div className={styles.overlay} />

                <button>Stream now</button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles['marquee-wrapper']}>
          <ul className={styles['marquee-two']}>
            {SHOWSLISTTWO.map(({ poster }, index) => (
              <li key={index} style={{ backgroundImage: `url(${poster})` }}>
                <Link href='/' />

                <div className={styles.overlay} />

                <button>Stream now</button>
              </li>
            ))}
          </ul>

          <ul className={styles['marquee-two']}>
            {SHOWSLISTTWO.map(({ poster }, index) => (
              <li key={index} style={{ backgroundImage: `url(${poster})` }}>
                <Link href='/' />

                <div className={styles.overlay} />

                <button>Stream now</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Shows
