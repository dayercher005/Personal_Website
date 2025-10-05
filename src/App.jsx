import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar className="sticky"></Navbar>
      <Home></Home>
      <About></About>
    </>
  )
}

export default App
