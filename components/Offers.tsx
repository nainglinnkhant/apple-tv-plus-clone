import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { isInViewport } from '../utils'
import styles from '../styles/Offers.module.scss'

const OFFERS = [
  {
    title: 'Buy an Apple device',
    price: '3 months free.',
    description: (
      <p>
        Apple TV+ is included for 3 months when you purchase an Apple device and redeem
        the offer within 90 days.
        <sup>
          <Link href='/'>1</Link>
        </sup>
      </p>
    ),
    action: 'Check eligibility',
  },
  {
    title: 'Free 7-day trial',
    price: '$6.99/mo.',
    description: (
      <p>
        A monthly subscription is just $6.99 per month after a free 7-day trial. Share
        Apple TV+ with your family.
        <sup>
          <Link href='/'>2</Link>
        </sup>
      </p>
    ),
    action: 'Try it free',
  },
  {
    title: 'Free 1-month trial',
    price: 'Apple One',
    description: (
      <p>
        Bundle Apple TV+ with up to five other great services for one low monthly price.
        And enjoy more for less. <Link href='/'>Learn more</Link> <span>&#62;</span>
      </p>
    ),
    action: 'Try Apple One free',
  },
]

const THRESHOLD = 50

const Offers = () => {
  const [offerOneEntered, setOfferOneEntered] = useState(false)
  const [offerTwoEntered, setOfferTwoEntered] = useState(false)
  const [offerThreeEntered, setOfferThreeEntered] = useState(false)

  const handleScroll = () => {
    const offerOne = document.getElementById('offer-1')
    const offerTwo = document.getElementById('offer-2')
    const offerThree = document.getElementById('offer-3')

    setOfferOneEntered(isInViewport(offerOne, THRESHOLD))
    setOfferTwoEntered(isInViewport(offerTwo, THRESHOLD))
    setOfferThreeEntered(isInViewport(offerThree, THRESHOLD))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const calClass = (index: number) => {
    switch (index) {
      case 1:
        return offerOneEntered ? styles['offer-entered'] : ''
      case 2:
        return offerTwoEntered ? styles['offer-entered'] : ''
      case 3:
        return offerThreeEntered ? styles['offer-entered'] : ''
    }
  }

  return (
    <section className={styles['offers-section']}>
      <div>
        <div className={styles['offer-list']}>
          {OFFERS.map(({ title, price, description, action }, index) => (
            <div
              id={`offer-${index + 1}`}
              key={title}
              className={`${styles['offer-item']} ${calClass(index + 1)}`}
            >
              <h2>{title}</h2>

              <h3>{price}</h3>

              {description}

              <button>{action}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
