import React from 'react'
import Hero from '../components/common/Hero'
import Products from '../components/store/Products'

function Store() {
  return (
    <div>
      <Hero line1="Clan" line2="Store" />
      <Products />
    </div>
  )
}

export { Store }
