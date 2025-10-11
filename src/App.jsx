import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar className="sticky"></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </>
  )
}

export default App
