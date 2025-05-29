import HomePage from './Components/HomePage'
import About from './Components/About'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Cto from './Components/Cta'

export default function Home() {
  return (
    <div className=''>
      <HomePage />
      <About />
      <Services/>
      <Skills />
      <Work />
      <Testimonials/>
      <Cto/>
    </div>
  )
}
