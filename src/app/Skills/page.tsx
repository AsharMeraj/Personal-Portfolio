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
import { BoldFont } from '../Components/Font';
import { HomeAnimateWrap } from '../Components/AnimateWrap';
import SkillCard from '../Components/SkillCard';

const Skills = () => {
    return (
        <section id='skills' className='w-full bg-black/70 h-full relative py-[5rem] md:py-[8rem]'>
            <HomeAnimateWrap>

            <h2 className='text-xl text-[--Secondary-Color] w-fit m-auto mb-12'>My Skills</h2>

            <main className='flex items-center justify-center'>
                <div className='w-fit justify-items-center gap-12 grid grid-cols-2 md:grid-cols-3 '>

                    <motion.div className='flex justify-center'>
                        <SkillCard src={html} name='HTML' />
                    </motion.div>
                    <motion.div className='flex justify-center'>
                        <SkillCard src={css} name='CSS' />
                    </motion.div>
                    <motion.div className='flex justify-center'>
                        <SkillCard src={javascript} name='Javascript' />
                    </motion.div>
                    <motion.div className='flex justify-center'>
                        <SkillCard src={typescript} name='Typescript' />
                    </motion.div>
                    <motion.div className='flex justify-center'>
                        <SkillCard src={react} name='React.js' />
                    </motion.div>
                    <motion.div className='flex justify-center'>
                        <SkillCard src={next} name='Next.js' />
                    </motion.div>
                    <motion.div className='flex justify-center'>
                        <SkillCard src={tailwind} name='Taildwind CSS' />
                    </motion.div>
                    <motion.div className='flex justify-center'>
                        <SkillCard src={framer} name='Framer Motion' />
                    </motion.div>
                    <motion.div className='flex justify-center'>
                        <SkillCard src={shadcn} name='Shadcn UI' />
                    </motion.div>
                </div>
            </main>
            </HomeAnimateWrap>
        </section>
    )
}

export default Skills