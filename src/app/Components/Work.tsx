'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Dinemarket from '@/app/Images/Dinemarket.png'
// import Porfolio from '@/app/Images/Portfolio.png'
import BusinessGrowth from '@/app/Images/BusinessGrowth.png'
import { Bold } from 'lucide-react';
import { BoldFont } from './Font';

const Work = () => {
    return (
        <section id='work' className='w-full h-fit bg-gradient-to-b from-black to-[rgb(30,0,0)] pb-[12rem]'>
            <div className='w-fit m-auto mb-[4rem] max-lg:mb-[3rem]'>
                <motion.h1
                    className="text-[1.8rem] font-bold text-[--Secondary-Color] w-fit m-auto"
                    key="heading"
                    initial={{ y: "4rem", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                   <BoldFont>My Works</BoldFont> 
                </motion.h1>
            </div>
            <main className='w-[60rem] max-[962px]:w-full m-auto flex flex-wrap justify-center gap-4 px-[1.5rem] max-[471px]:px-0'>
                <motion.div className='w-[26rem] max-[418px]:w-full h-[16rem] max-[418px]:h-[65vw] grid place-items-center'
                    key="image"
                    initial={{ y: "6rem", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{once: true}}
                >
                    <a href="https://asharmeraj.github.io/React-Typescript-App/" target='_blank'>
                        <Image className=' rounded-xl w-[24rem] max-[418px]:w-[90vw] h-[14rem] max-[418px]:h-[55vw] hover:scale-105 duration-500 cursor-pointer hover:shadow-black hover:shadow-2xl' alt='/' src={BusinessGrowth} />
                    </a>
                </motion.div>
                <motion.div className='w-[26rem] max-[418px]:w-full h-[16rem] max-[418px]:h-[65vw] grid place-items-center'
                    key="image2"
                    initial={{ y: "6rem", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{once: true}}
                >
                    <a href="https://dinemarket-blue.vercel.app/" target='_blank'>
                        <Image className=' rounded-xl w-[24rem] max-[418px]:w-[90vw] h-[14rem] max-[418px]:h-[55vw] hover:scale-105 duration-500 cursor-pointer hover:shadow-black hover:shadow-2xl' alt='' src={Dinemarket} />
                    </a>
                </motion.div>
            </main>
        </section>
    )
}

export default Work