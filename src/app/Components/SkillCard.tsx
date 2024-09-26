'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import {motion} from 'framer-motion'

type PropType = {
    src: StaticImageData
    name: string
}
const SkillCard = (props: PropType) => {
    return (
        <motion.div
            className='flex justify-center'
            initial={{ y: '2rem', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <div className='bg-black flex flex-col items-center  justify-center  light w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[9rem] lg:h-[9rem] animate'>
                <Image className='w-[3rem] max-[575px]:w-[2.5rem] max-[446px]:w-[2rem]' alt='/' src={props.src} />
                <h1 className='text-white text-[11px] sm:text-[13px] text-center px-2'>{props.name}</h1>
            </div>
        </motion.div>
    )
}

export default SkillCard