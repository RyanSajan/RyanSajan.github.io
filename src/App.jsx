import Navbar from './sections/Navbar'
import Home from './sections/Home'
import Skills from './sections/Skills'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import './index.css'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'
function App() {
  return (
    <div className='relative gradient text-white'>
      <Navbar/>
      <CustomCursor/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
