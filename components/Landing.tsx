import React, { useEffect, useRef, useState } from 'react'

import styles from '../styles/Landing.module.scss'

const Landing = () => {
  const [playing, setPlaying] = useState(true)
  const [scrollTop, setScrollTop] = useState(0)
  const [hideControls, setHideControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const pauseVideo = () => {
    videoRef.current?.pause()
    setPlaying(false)
  }

  const playVideo = () => {
    videoRef.current?.play()
    setPlaying(true)
  }

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    setScrollTop(scrollTop)

    scrollTop > 530 ? setHideControls(true) : setHideControls(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const overlayOpacity = scrollTop / 1000 + 0.4
  const contentOpacity = scrollTop > 0 ? 0.1 - scrollTop / 1000 : 1

  return (
    <section className={styles['landing-section']}>
      <div className={styles['landing-video-wrapper']}>
        <div>
          <div
            className={`${styles['video-controls']} ${
              hideControls ? styles['hide-controls'] : ''
            }`}
          >
            {playing && <button className={styles['pause-btn']} onClick={pauseVideo} />}
            {!playing && <button className={styles['play-btn']} onClick={playVideo} />}
          </div>

          <div className={styles.overlay} style={{ opacity: overlayOpacity }} />

          <video
            ref={videoRef}
            src='https://www.apple.com/105/media/us/apple-tv-plus/2022/4114721e-12d2-4260-87c4-678589d5f804/anim/supercut/large.mp4'
            loop
            autoPlay
            muted
            className={styles['landing-video']}
          />
        </div>
      </div>

      <div className={styles['landing-content']} style={{ opacity: contentOpacity }}>
        <div>
          <h1>All Apple Originals.</h1>
          <h1>Only on Apple TV+.</h1>

          <button>Stream now</button>

          <p>
            Watch on the <span /> app
          </p>
        </div>
      </div>
    </section>
  )
}

export default Landing
