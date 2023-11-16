import Image from 'next/image'
import styles from './page.module.css'
import Nav from './nav/Nav'
import Slider from './Slider/Slider'
import About from './About/About'
import Footer from './Footer/Footer'


export default function Home() {
  return (
    <main  >
      <Nav />
      <Slider />
      <About/>
      <Footer />
    </main>
  )
}
