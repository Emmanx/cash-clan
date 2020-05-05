import React from 'react';

import Hero from '../components/home/Hero';
import { Header } from '../components/home/Header';
import Biography from '../components/home/Biography';
import Subscribe from '../components/home/Subscribe';
import Releases from '../components/home/Releases';
import Footer from '../components/common/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Biography />
      <Releases />
      <Subscribe />
      <Footer />
    </>
  );
}

export { Home };
