'use client';
import React from 'react'
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
import { HomeAnimateWrap } from '../Components/AnimateWrap';
import SkillCard from '../Components/SkillCard';

const Skills = () => {
    return (
        <section id='skills' className='w-full bg-black h-full relative py-[2rem] md:py-[6rem]'>
                <motion.h2
                    className='text-2xl text-[--Secondary-Color] w-fit m-auto mb-14'
                    initial={{ y: '2rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{once: true}}>
                    My Skills
                </motion.h2>

                <main className='flex items-center justify-center'>
                    <div className='w-fit justify-items-center gap-8 md:gap-12 grid grid-cols-2 md:grid-cols-3 '>

                        <SkillCard src={html} name='HTML' />
                        <SkillCard src={css} name='CSS' />
                        <SkillCard src={javascript} name='Javascript' />
                        <SkillCard src={typescript} name='Typescript' />
                        <SkillCard src={react} name='React.js' />
                        <SkillCard src={next} name='Next.js' />
                        <SkillCard src={tailwind} name='Taildwind CSS' />
                        <SkillCard src={framer} name='Framer Motion' />
                        <SkillCard src={shadcn} name='Shadcn UI' />

                    </div>
                </main>
        </section>
    )
}

export default Skills