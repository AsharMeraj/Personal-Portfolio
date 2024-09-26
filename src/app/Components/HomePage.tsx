'use client'
import React from 'react'
import Image from 'next/image'
import MyPic from '@/app/Images/MyPic3.png'
import TypeAnimate from './TypeAnimate'
import LightFont from './Font'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { HomeAnimateWrap } from './AnimateWrap'
import VideoBg from '../VideoComponent/VideoBg'



export default function HomePage() {
  return (
    <section>
      <VideoBg />
      <HomeAnimateWrap>

      
      <main className='w-full height flex items-center justify-center z-10'>
        <div className='w-[70rem] relative top-[2rem] max-[840px]:top-0 max-[840px]:flex-col flex justify-between items-center mx-10 max-[840px]:mx-[1rem]'>
          <div
            className='w-fit h-fit max-[840px]:absolute  max-[840px]:top-[30%] z-20 relative'
          >
            <motion.h1
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-[--Secondary-Color] text-[1.2rem] font-bold  drop-shadow-[1px_1px_1px_rgb(0,0,0,0.2)] md:text-[1.5rem] max-[840px]:text-center'>
              HI THERE!
            </motion.h1>

            <motion.h1
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='text-white  text-[2rem] lg:text-[3rem] xl:text-[4rem] max-[840px]:text-center font-semibold drop-shadow-2xl'>
              I am Web Developer

            </motion.h1>
            <motion.h1
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className=' text-white text-[1.5rem] lg:text-[2rem] xl:text-[3rem]  max-[840px]:text-center mb-6 font-semibold drop-shadow-2xl'>
              using <TypeAnimate />
            </motion.h1>


            <motion.div 
            initial={{ x: '-3rem', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className='h-[3rem] flex items-center max-[840px]:justify-center'>
              {/* BUTTON */}
              <Button>Get Started</Button>
            </motion.div>
          </div>

          <motion.div
          initial={{ y: '2rem', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 , delay: 0.3}}
          >
            <Image className=' shadow-bottom relative max-[840px]:bottom-[2rem] mr-[0rem] border-b-[5px] border-[--Primary-Color] rounded-full w-[17rem] md:w-[22rem] lg:w-[25rem] max-[840px]:order-first z-10 ' alt='/' src={MyPic} />
          </motion.div>
        </div>
      </main>
            </HomeAnimateWrap>
    </section>
  )
}
