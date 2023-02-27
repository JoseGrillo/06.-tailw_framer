import Image from 'next/image'

//import { Poppins } from '@next/font/google'
import { About, Contacto, Cursos, Footer, Home, Profesor, Ztemporal } from '@/components/'



export default function App() {
  return (
    <div className='bg-Solitude'>
      {/* <Navbar /> */}
      {/* para probar framer motion */}
      {/* <Ztemporal /> */}
      <Home />
      <About />
      <Cursos />
      <Profesor />
      <Contacto />
      {/* <Footer /> */}
    </div>
  )
}
