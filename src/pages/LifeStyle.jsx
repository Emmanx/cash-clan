import React, { useEffect } from 'react'
import Hero from '../components/common/Hero'
import Images from '../components/lifestyle/Images'

function LifeStyle() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero line1="Life" line2="Style" />
      <Images />
    </>
  )
}

export { LifeStyle }
