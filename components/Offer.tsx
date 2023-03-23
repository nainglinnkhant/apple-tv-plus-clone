import { useEffect, useRef, useState } from 'react'

import type { OfferType } from './Offers'
import { isInViewport } from '../utils'
import styles from '../styles/Offers.module.scss'

interface OfferProps {
  offer: OfferType
}

const THRESHOLD = 50

const Offer = ({ offer }: OfferProps) => {
  const [hasEntered, setHasEntered] = useState(false)
  const offerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setHasEntered(isInViewport(offerRef.current, THRESHOLD))
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { title, price, description, action } = offer

  return (
    <div
      ref={offerRef}
      className={`${styles['offer-item']} ${hasEntered ? styles['offer-entered'] : ''}`}
    >
      <h2>{title}</h2>

      <h3>{price}</h3>

      {description}

      <button>{action}</button>
    </div>
  )
}

export default Offer
