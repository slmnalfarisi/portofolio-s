import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Aos from 'aos';
import 'aos/dist/aos.css'

Aos.init({
  // mirror: false,
})

function App() {
  return(
    <>
    <Header/>
    <main className='main'>
      <Home/>
    </main>
    </>
  )
}

export default App
