import { useState } from 'react'
import './App.css'
import Logo from './components/sections/Logo'
import Navbar from './components/sections/Navbar'
import Presentation from './components/sections/Presentation'
import Projects from './components/sections/Projects'
import Aboutme from './components/sections/Aboutme'
import Contact from './components/sections/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo></Logo>
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Projects></Projects>
      <Aboutme></Aboutme>
      <Contact></Contact>
    </>
  )
}

export default App
