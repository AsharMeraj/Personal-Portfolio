'use client'
import React from 'react'
import TypeAnimate from './TypeAnimate'
import { motion } from 'framer-motion'
import Button from './button/Button'
import Link from 'next/link'



export default function HomePage() {
  return (
    <section>
      {/* <VideoBg /> */}
      <main className='w-full h-[40rem] md:h-[55rem] relative top-0  flex items-center justify-center z-0 '>
        <span className='w-full h-[40rem] md:h-[55rem] bg-[url(/bg.jpg)] bg-center bg-cover -scale-x-100 absolute inset-0'></span>
        <span className='w-full h-[40rem] md:h-[55rem] bg-gradient-to-b from-backgroundColorDark via-backgroundColorDark/50 to-backgroundColorDark absolute inset-0'></span>
        <div className='w-full max-w-5xl relative max-[840px]:flex-col flex justify-between items-center md:mx-10 mt-20'>
          <div
            className='w-fit h-fit z-20 relative'
          >
            <motion.h1
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='text-[--Secondary-Color] text-4xl md:text-5xl xl:text-6xl font-bold  drop-shadow-[1px_1px_1px_rgb(0,0,0,0.2)] max-[840px]:text-center'>
              Hello
            </motion.h1>

            <motion.h1
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-white text-4xl mt-4 md:text-5xl xl:text-6xl max-[840px]:text-center font-semibold drop-shadow-2xl '>
              I&apos;m M.Ashar

            </motion.h1>
            {/* <motion.h1
                initial={{ x: '-3rem', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className=' text-white text-3xl lg:text-4xl xl:text-5xl  max-[840px]:text-center font-semibold drop-shadow-2xl '>
                using
              </motion.h1> */}

            <motion.p
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=' text-white text-center md:text-start text-xl mx-6 md:mx-0 my-10 tracking-wide max-w-[25rem] drop-shadow-2xl'>
              A full Stack web and generative Ai developer using <span className='text-[--Secondary-Color] text-xl'><TypeAnimate /></span>
            </motion.p>


            <motion.div
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='h-[3rem] flex items-center max-[840px]:justify-center'>
              {/* BUTTON */}
              <Link href={'/Contact'}><Button>Schedule A Call</Button></Link>
            </motion.div>
          </div>
        </div>
      </main>
    </section>
  )
}
