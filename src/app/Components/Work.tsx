'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { BoldFont } from './Font';
import SlidePage from './SlidePage';

const Work = () => {
    return (
        <section id='work' className='w-full relative h-fit bg-[rgb(0,0,0)]/70 pb-[12rem]'>
            <motion.h1 className='text-[2rem] text-[--Secondary-Color] max-[1079px]:mb-[2rem] max-[840px]:mb-[0rem] max-[840px]:text-[1.5rem]  w-fit m-auto mb-4'
                // key="heading3"
                // initial={{ y: '6rem', opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // transition={{ duration: 0.6 }}
                // viewport={{ once: true }}
                >
                <BoldFont>Works</BoldFont></motion.h1>
            <SlidePage/>
        </section>
    )
}

export default Work