import React, { useEffect } from 'react'
import Hero from '../components/common/Hero'
import Products from '../components/store/Products'

function Store() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Hero line1="Clan" line2="Store" />
      <Products />
    </div>
  )
}

export { Store }
