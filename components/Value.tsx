import React, { useCallback, useEffect, useRef, useState } from 'react'

import { isInViewport } from '../utils'
import styles from '../styles/Value.module.scss'

const THRESHOLD = 70

const Value = () => {
  const [valueOneClass, setValueOneClass] = useState('')
  const [valueTwoClass, setValueTwoClass] = useState('')
  const [valueThreeClass, setValueThreeClass] = useState('')

  const valueOneRef = useRef<HTMLLIElement | null>(null)
  const valueTwoRef = useRef<HTMLLIElement | null>(null)
  const valueThreeRef = useRef<HTMLLIElement | null>(null)

  const handleScroll = useCallback(() => {
    isInViewport(valueOneRef.current, THRESHOLD)
      ? setValueOneClass(styles['value-entered'])
      : setValueOneClass('')

    isInViewport(valueTwoRef.current, THRESHOLD)
      ? setValueTwoClass(styles['value-entered'])
      : setValueTwoClass('')

    isInViewport(valueThreeRef.current, THRESHOLD)
      ? setValueThreeClass(styles['value-entered'])
      : setValueThreeClass('')
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <section className={styles['value-section']}>
      <div>
        <ul>
          <li ref={valueOneRef} className={valueOneClass}>
            New Apple Originals every month.
          </li>

          <li ref={valueTwoRef} className={valueTwoClass}>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.
          </li>

          <li ref={valueThreeRef} className={valueThreeClass}>
            Share Apple TV+ with your family.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Value
