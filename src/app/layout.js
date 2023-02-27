import { Footer, Navbar } from '@/components'

import './globals.css'

import { Nunito_Sans } from 'next/font/google'

// Fonts
const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-nunito'
})

// Page metadata
export const metadata = {
  title: 'NextJs 13 Guest Book',
  description: 'Welcome to NextJs 13 guest book built with the app router'
}

export default function RootLayout({ children }) {

  return (
    <html
      lang="es"
      className={`${nunito.className} h-full scroll-smooth antialiased`}
    >
      {/* <head /> */}
      <body>
        <Navbar />
        {children}
        <Footer />
        {/* <div className="flex-grow"> */}
        {/*  */}
        {/* </div> */}

      </body>
    </html>
  )
}