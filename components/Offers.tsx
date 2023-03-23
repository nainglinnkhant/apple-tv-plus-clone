import Link from 'next/link'

import Offer from './Offer'
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

export type OfferType = typeof OFFERS[number]

const Offers = () => {
  return (
    <section className={styles['offers-section']}>
      <div>
        <div className={styles['offer-list']}>
          {OFFERS.map((offer) => (
            <Offer key={offer.title} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
