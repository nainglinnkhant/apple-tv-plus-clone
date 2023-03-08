import React, { useEffect, useState } from 'react'

import { isInViewport } from '../utils'
import styles from '../styles/Value.module.scss'

const THRESHOLD = 70

const Value = () => {
  const [valueOneClass, setValueOneClass] = useState('')
  const [valueTwoClass, setValueTwoClass] = useState('')
  const [valueThreeClass, setValueThreeClass] = useState('')

  const handleScroll = () => {
    const valueOne = document.getElementById('value-one')
    const valueTwo = document.getElementById('value-two')
    const valueThree = document.getElementById('value-three')

    isInViewport(valueOne, THRESHOLD)
      ? setValueOneClass(styles['value-entered'])
      : setValueOneClass('')

    isInViewport(valueTwo, THRESHOLD)
      ? setValueTwoClass(styles['value-entered'])
      : setValueTwoClass('')

    isInViewport(valueThree, THRESHOLD)
      ? setValueThreeClass(styles['value-entered'])
      : setValueThreeClass('')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles['value-section']}>
      <div>
        <ul id='value-list'>
          <li id='value-one' className={valueOneClass}>
            New Apple Originals every month.
          </li>

          <li id='value-two' className={valueTwoClass}>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.
          </li>

          <li id='value-three' className={valueThreeClass}>
            Share Apple TV+ with your family.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Value
