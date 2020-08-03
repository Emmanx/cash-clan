import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Subscribe from './components/common/Subscribe'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

import { Home, Artists, LifeStyle, Store, Feature, News } from './pages'

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/artists">
          <Artists />
        </Route>
        <Route exact path="/lifestyle">
          <LifeStyle />
        </Route>
        <Route exact path="/store">
          <Store />
        </Route>
        <Route exact path="/feature">
          <Feature />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </Switch>
      <Subscribe />
      <Footer />
    </Router>
  )
}

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <></>
}

export default App
