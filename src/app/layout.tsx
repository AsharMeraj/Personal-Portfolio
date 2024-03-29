import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import VideoBg from './VideoComponent/VideoBg'
import Navbar from './Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashar Dev',
  description: 'My Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <VideoBg />
        <div className='overflow-y-hidden'>
          {children}
        </div>
      </body>
    </html>
  )
}
