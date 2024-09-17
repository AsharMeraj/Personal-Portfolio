'use client'
import React from 'react'
import Image from 'next/image'
import MyPic from '@/app/Images/MyPic3.png'
import TypeAnimate from './TypeAnimate'
import LightFont from './Font'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { HomeAnimateWrap } from './AnimateWrap'



export default function HomePage() {
  return (
    <section>
      <HomeAnimateWrap>

      
      <main className='w-full height flex items-center justify-center z-10'>
        <div className='w-[70rem] relative top-[2rem] max-[840px]:top-0 max-[840px]:flex-col b flex justify-between items-center mx-10 max-[840px]:mx-[1rem]'>
          <div
            className='w-fit  h-fit max-[840px]:absolute  max-[840px]:top-[30%] z-20 relative'
          >
            <motion.h1
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-[--Secondary-Color] text-[1.5rem] max-[840px]:text-center'>
              HI THERE!
            </motion.h1>

            <motion.h1
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='text-white text-[4rem] max-[934px]:text-[2.5rem] max-[840px]:text-center max-[420px]:text-[2rem] max-[323px]:text-[1.6rem] font-semibold drop-shadow-2xl'>
              I am Web Developer

            </motion.h1>
            <motion.h1
              initial={{ x: '-3rem', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='text-[3rem] text-white max-[934px]:text-[2.5rem] max-[840px]:text-center max-[420px]:text-[2rem] max-[323px]:text-[1.6rem] mb-6 font-semibold drop-shadow-2xl'>
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
            <Image className=' shadow-bottom relative max-[840px]:bottom-[2rem] mr-[0rem] border-b-[5px] border-[--Primary-Color] rounded-full w-[25rem] max-[1200px]:w-[26rem] max-[840px]:w-[16rem]   max-[840px]:order-first z-10 ' alt='/' src={MyPic} />
          </motion.div>
        </div>
      </main>
            </HomeAnimateWrap>
    </section>
  )
}
