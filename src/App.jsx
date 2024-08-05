import Aos from 'aos';
import 'aos/dist/aos.css'

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

Aos.init({
  // mirror: false,
})

function App() {
  return(
    <>
    <Header/>

    <ScrollActive/>
    <ScrollUp/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Project/>
      <Contact/>
    </main>
    
    <Footer/>
    </>
  )
}

export default App
