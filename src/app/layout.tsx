import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import VideoBg from './VideoComponent/VideoBg'
import Navbar from './Components/Navbar'
import { Suspense, useState } from 'react'





const inter = Poppins({ subsets: ['latin'], weight: ['500'] })

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
        <div className='overflow-y-hidden'>
          <div className='w-full h-screen bg-black fixed  -z-50'></div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
