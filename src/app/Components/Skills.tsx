'use client';
import React from 'react'
import Image from 'next/image'
import html from '@/app/Images/html.png'
import css from '@/app/Images/css.png'
import tailwind from '@/app/Images/tailwind.png'
import javascript from '@/app/Images/javascript.png'
import typescript from '@/app/Images/typescript.png'
import react from '@/app/Images/react.png'
import next from '@/app/Images/next.png'
import framer from '@/app/Images/framer.png'
import shadcn from '@/app/Images/shadcn.png'
import { motion } from 'framer-motion'
import { BoldFont } from './Font';

const Skills = () => {
    return (
        <section id='skills' className='w-full relative h-full bg-[rgb(0,0,0)]/70 pb-[13rem] max-[840px]:pb-[8rem] '>
            <motion.h1 className='text-[2rem] text-[--Secondary-Color] max-[1079px]:mb-[2rem] max-[840px]:mb-[0rem]  w-fit m-auto'
                key="heading3"
                initial={{ y: '6rem', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}>
                <BoldFont>Skills</BoldFont></motion.h1>
                <main className='flex mt-16  gap-[4rem] max-[518px]:gap-[3rem] flex-wrap justify-center w-[38rem] max-[618px]:w-screen px-[3rem] max-[322px]:px-[1rem] m-auto max-[446px]:mt-[3rem]'>
                <motion.div className='bg-black flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'
                    key="logo1"
                    initial={{ y: '4rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}>
                    <Image className='w-[3rem] max-[575px]:w-[2.5rem] max-[446px]:w-[2rem]' alt='/' src={html} />
                    <h1 className='text-white text-[13px] max-[446px]:text-[10px] '>HTML</h1>
                </motion.div>
                <motion.div className='bg-black flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'
                    key="logo2"
                    initial={{ y: '4rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}>
                    <Image className='w-[3rem] max-[575px]:w-[2.5rem] max-[446px]:w-[2rem]' alt='/' src={css} />
                    <h1 className='text-white text-[13px] max-[446px]:text-[10px] '>CSS</h1>
                </motion.div>
                <motion.div className='bg-black flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'
                    key="logo3"
                    initial={{ y: '4rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}>
                    <Image className='w-[3rem] max-[575px]:w-[2.5rem] max-[446px]:w-[2rem]' alt='/' src={tailwind} />
                    <h1 className='text-white text-[13px] max-[446px]:text-[10px] text-center mx-4'>Tailwind CSS</h1>
                </motion.div>
                <motion.div className='bg-black flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'
                    key="logo4"
                    initial={{ y: '4rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <Image className='w-[3rem] max-[575px]:w-[2.5rem] max-[446px]:w-[2rem]' alt='/' src={javascript} />
                    <h1 className='text-white text-[13px] max-[446px]:text-[10px] '>JavaScript</h1>
                </motion.div>
                <motion.div className='bg-black flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'
                    key="logo5"
                    initial={{ y: '4rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}>
                    <Image className='w-[3rem] max-[575px]:w-[2.5rem] max-[446px]:w-[2rem]' alt='/' src={typescript} />
                    <h1 className='text-white text-[13px] max-[446px]:text-[10px] '>Typescript</h1>
                </motion.div>
                <motion.div className='bg-black flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'
                    key="logo6"
                    initial={{ y: '4rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}>
                    <Image className='w-[3rem] max-[575px]:w-[2.5rem]  max-[446px]:w-[2rem]' alt='/' src={react} />
                    <h1 className='text-white text-[13px] max-[446px]:text-[10px] '>React.js</h1>
                </motion.div>
                <motion.div className='bg-black flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'
                    key="logo7"
                    initial={{ y: '4rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}>
                    <Image className='w-[4rem] max-[575px]:w-[3.5rem]  max-[446px]:w-[2rem]' alt='/' src={next} />
                    <h1 className='text-white text-[13px] max-[446px]:text-[10px] '>Next.js</h1>
                </motion.div>
                <motion.div className='bg-black flex flex-col items-center justify-center rounded-full light  w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'
                    key="logo8"
                    initial={{ y: '4rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}>
                    <Image className='w-[2rem]  ' alt='/' src={framer} />
                    <h1 className='text-white text-center text-[13px] max-[446px]:text-[10px] mx-2'>Framer Motion</h1>
                </motion.div>
                <motion.div className='bg-black flex flex-col items-center justify-center rounded-full light  w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'
                    key="logo9"
                    initial={{ y: '4rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}>
                    <Image className='w-[3rem] max-[575px]:w-[2.5rem] max-[446px]:w-[2rem]' alt='/' src={shadcn} />
                    <h1 className='text-white text-center text-[13px] max-[446px]:text-[10px] '>Shadcn Ui</h1>
                </motion.div>
            </main>
        </section>
    )
}

export default Skills