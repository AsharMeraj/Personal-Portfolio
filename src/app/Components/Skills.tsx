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
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <section id='skills' className='w-full relative h-full bg-black pb-[13rem] max-[840px]:pb-[8rem] '>
            <motion.h1
                className='text-[2rem] text-[--Secondary-Color] md:mb-[2rem] mb-[0rem]  w-fit m-auto'
                initial={{ y: '2rem', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{once: true}}
            >
                <BoldFont>Skills</BoldFont></motion.h1>
            <motion.main
                className='mt-16 gap-8 md:gap-12 grid grid-cols-2 md:grid-cols-3 w-fit m-auto'>

                <SkillCard src={html} name='HTML' />
                <SkillCard src={css} name='CSS' />
                <SkillCard src={javascript} name='Javascript' />
                <SkillCard src={typescript} name='Typescript' />
                <SkillCard src={react} name='React.js' />
                <SkillCard src={next} name='Next.js' />
                <SkillCard src={tailwind} name='Taildwind CSS' />
                <SkillCard src={framer} name='Framer Motion' />
                <SkillCard src={shadcn} name='Shadcn UI' />

            </motion.main>
        </section>
    )
}

export default Skills