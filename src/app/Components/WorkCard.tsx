import Image, { StaticImageData } from 'next/image'
import React from 'react'
import AiInterviewMocker from '@/app/Images/AiInterviewMocker.png'

type PropType = {
  src: StaticImageData,
  name: string,
  para: string
}

const WorkCard = (props: PropType) => {
  return (
    <main id='WorkCard' className='relative w-full h-full'>
      <div className='bg-black'>
        <h2 id='CheckOutWorkCard' className='text-white font-bold hidden absolute z-50 h-fit w-fit m-auto text-center left-[37%] top-[30%] opacity-0'>Check Out</h2>
        <Image id='WorkCardImage' className='rounded-2xl w-fit m-auto z-20' src={props.src} alt='/' width={400} height={400} />
      </div>
      <h2 className='text-[--Secondary-Color] mt-4 w-fit '>{props.name}</h2>
      <p className='text-gray-300 text-sm  max-w-[26rem]'>{props.para}</p>
    </main>
  )
}

export default WorkCard