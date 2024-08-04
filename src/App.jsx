import './App.css';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Skills from './Pages/Skills/Skills';

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
    </main>
    </>
  )
}

export default App
