import React from 'react'
import Image from 'next/image'
import MyPic from '@/app/Images/MyPic3.png'
import AnimateWrap from '../Contact/AnimateWrap'
import TypeAnimate from './TypeAnimate'
import LightFont from './Font'



export default function HomePage() {
  return (
    <>
      <AnimateWrap>

        <div id='home' className='w-full h-[5.5rem]'></div>

        <main className='w-full height flex items-center justify-center z-10'>

          <div className='w-[70rem] max-[840px]:flex-col b flex justify-between items-center mx-10 max-[840px]:mx-[1rem]'>

            <div
              className='w-fit  h-fit max-[840px]:absolute  max-[840px]:top-[40%] z-20 relative'
            >
              <LightFont>
                <h1 className='text-[--Secondary-Color] text-[16px] max-[840px]:text-center'>HI THERE!</h1>
                <h1 className='text-[3rem] text-white max-[934px]:text-[2.5rem] max-[840px]:text-center max-[420px]:text-[2rem] max-[323px]:text-[1.6rem]'>I am Web Developer</h1>
                <h1 className='text-[3rem] text-white max-[934px]:text-[2.5rem] max-[840px]:text-center max-[420px]:text-[2rem] max-[323px]:text-[1.6rem] mb-6'>using <TypeAnimate />
                </h1>
              </LightFont>

              <div className='h-[3rem] flex items-center max-[840px]:justify-center'>
                {/* BUTTON */}
                <button className='block cursor-pointer px-8 py-3 border-2 border-[--Primary-Color] text-white bg-[--Primary-Color] w-fit h-fit rounded-sm tracking-wide duration-200 font-bold shadow-[2px_8px_16px_black] active:scale-[0.9]  active:shadow-none'>Get Started</button>
              </div>
            </div>

            <div>
              <Image className='drop-shadow shadow-bottom relative max-[840px]:bottom-[2rem] mr-[0rem] border-b-[5px] border-[--Primary-Color] rounded-full w-[25rem] max-[1200px]:w-[26rem] max-[840px]:w-[16rem]   max-[840px]:order-first z-10 ' alt='/' src={MyPic} />
            </div>
          </div>
        </main>

      </AnimateWrap>
    </>
  )
}
