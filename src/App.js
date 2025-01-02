import React from 'react';
import './App.css';
import Header from './Componets/Header';
import Hero from './Componets/Hero';
import About from './Componets/About';
import Projects from './Componets/Projects';
import Contact from './Componets/Contact'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects/>
      <Contact />

    </>
  );
}

export default App;
