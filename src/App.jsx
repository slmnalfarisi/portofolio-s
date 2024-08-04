import './App.css';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Skills from './Pages/Skills/Skills';
import Qualification from './Pages/Qualification/Qualification';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';

Aos.init({
  // mirror: false,
})

function App() {
  return(
    <>
    <Header/>
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
