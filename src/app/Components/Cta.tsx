import React from 'react'
import Button from './button/Button'
import Link from 'next/link'

const Cto = () => {
  return (
    <section className=' py-48 flex items-center justify-center px-10 relative'>
      <span className='w-full bg-[url(/Images/bg1.jpg)] bg-center bg-cover absolute inset-0 -z-10 scale-x-100'></span>
      <span className='w-full bg-gradient-to-b from-backgroundColorDark/70 via-backgroundColorDark/85 to-backgroundColorDark/70 absolute inset-0 z-0'></span>
      <main className='max-w-5xl w-full flex justify-between items-start md:items-center flex-col md:flex-row relative'>
        <div>
          <h2 className='text-2xl w-fit border-b text-[--Secondary-Color] tracking-wide'>Get In Touch</h2>
          <h2 className='text-white text-3xl md:text-4xl w-fit mt-6'>Ready To Get Started?</h2>
          <p className='text-gray-400 max-w-3xl mt-6'>Boost your online presence with cutting-edge web development and AI-powered solutions! Whether for personal or business use, we craft high-performance, user-friendly websites to drive growth. Let&apos;s build something amazing—reach out today!</p>
        </div>
        <span className='mt-6 md:mt-0'>
          <Link href={'/Contact'}>
            <Button>Contact Us</Button>
          </Link>
        </span>
      </main>
    </section>
  )
}

export default Cto