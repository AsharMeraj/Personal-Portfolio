import React from 'react'
import Image, { StaticImageData } from 'next/image'

type PropType = {
    src: StaticImageData
    name: string
}
const SkillCard = (props: PropType) => {
    return (
        <div className='bg-black flex flex-col items-center  justify-center rounded-full light w-[9rem] h-[9rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] max-[446px]:w-[5rem] max-[446px]:h-[5rem] animate'>
            <Image className='w-[3rem] max-[575px]:w-[2.5rem] max-[446px]:w-[2rem]' alt='/' src={props.src} />
            <h1 className='text-white text-[11px] sm:text-[13px] text-center px-2'>{props.name}</h1>
        </div>
    )
}

export default SkillCard