import HomePage from './Components/HomePage'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Work from './Components/Work'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Skills />
      <Work />
    </div>
  )
}
