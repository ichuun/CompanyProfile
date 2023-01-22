import React from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero'
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
