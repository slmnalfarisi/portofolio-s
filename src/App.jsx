import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Qualification from './Pages/Qualification/Qualification';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ScrollActive from './Components/Models/ScrollActive/ScrollActive';
import ScrollUp from './Components/Models/ScrollUp/ScrollUp';
import Certificate from './Pages/certificate/Certificate';

Aos.init({
  // Add your AOS options here if needed
});

function App() {
  useEffect(() => {
    // Initialize AOS on component mount
    Aos.refresh();
  }, []);

  return (
    <>
      <Header />

      <ScrollActive />
      <ScrollUp />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Certificate/>
        <Project />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
