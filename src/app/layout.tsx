import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NextTopLoader from 'nextjs-toploader';

const inter = Outfit({ subsets: ['latin'], weight: ["700"] })

export const metadata: Metadata = {
  title: 'Muhammad Ashar',
  description: 'My Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader
            color='var(--primary)'
            height={4}
            initialPosition={0.10}
            showSpinner={false}
            crawlSpeed={50}
          />
          <div className="overflow-hidden relative">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html >
    </>
  )
}
