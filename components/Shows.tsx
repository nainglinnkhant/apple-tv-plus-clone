import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { SHOWSLISTONE, SHOWSLISTTWO } from '../data'
import styles from '../styles/Shows.module.scss'

const Shows = () => {
  const [marqueeOneDuration, setMarqueeOneDuration] = useState(42)
  const [marqueeTwoDuration, setMarqueeTwoDuration] = useState(35)

  const slowDownMarqueeOne = () => {
    setMarqueeOneDuration(150)
  }

  const slowDownMarqueeTwo = () => {
    setMarqueeTwoDuration(150)
  }

  const resetMarqueeOne = () => {
    setMarqueeOneDuration(42)
  }

  const resetMarqueeTwo = () => {
    setMarqueeTwoDuration(35)
  }

  useEffect(() => {
    document
      .getElementById('marquee-1')
      ?.addEventListener('mouseenter', slowDownMarqueeOne)
    document
      .getElementById('marquee-2')
      ?.addEventListener('mouseenter', slowDownMarqueeTwo)
    document.getElementById('marquee-1')?.addEventListener('mouseleave', resetMarqueeOne)
    document.getElementById('marquee-2')?.addEventListener('mouseleave', resetMarqueeTwo)

    return () => {
      document
        .getElementById('marquee-1')
        ?.removeEventListener('mouseenter', slowDownMarqueeOne)
      document
        .getElementById('marquee-2')
        ?.removeEventListener('mouseenter', slowDownMarqueeTwo)
      document
        .getElementById('marquee-1')
        ?.removeEventListener('mouseleave', resetMarqueeOne)
      document
        .getElementById('marquee-2')
        ?.removeEventListener('mouseleave', resetMarqueeTwo)
    }
  }, [])

  return (
    <section className={styles['shows-section']}>
      <div className={styles['shows-marquee']}>
        <div
          className={styles['marquee-wrapper']}
          style={{ animationDuration: `${marqueeOneDuration}s` }}
        >
          <ul>
            {SHOWSLISTONE.slice(0, 5).map(({ poster }, index) => (
              <li key={index} style={{ backgroundImage: `url(${poster})` }}>
                <Link href='/' />

                <div className={styles.overlay} />

                <button>Stream now</button>
              </li>
            ))}

            {SHOWSLISTONE.slice(5).map(({ poster }, index) => (
              <li key={index} style={{ backgroundImage: `url(${poster})` }}>
                <Link href='/' />

                <div className={styles.overlay} />

                <button>Stream now</button>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={styles['marquee-wrapper']}
          style={{ animationDuration: `${marqueeTwoDuration}s` }}
        >
          <ul>
            {SHOWSLISTTWO.slice(0, 5).map(({ poster }, index) => (
              <li key={index} style={{ backgroundImage: `url(${poster})` }}>
                <Link href='/' />

                <div className={styles.overlay} />

                <button>Stream now</button>
              </li>
            ))}

            {SHOWSLISTTWO.slice(5).map(({ poster }, index) => (
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
