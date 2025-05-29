import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AiInterviewMockerStretch from '../../../public/Images/AiInterviewMockerStretch.png'
import AmericanHitecPestControl2 from '../../../public/Images/AmericanHitecPestControl2.png'
import TimeStoreStretch from '../../../public/Images/TimeStoreStretch2.png'
import TimeStore2 from '../../../public/Images/TimeStore2.png'
import BusinessGrowth from '../../../public/Images/BusinessGrowth2.png'
import AiAcademyStretch2 from '../../../public/Images/AiAcademyStretch3.png'
import DineMarketUpdated from '../../../public/Images/DineMarketUpdated6.png'
import Button from '../Components/button/Button'

const page = () => {
  return (
    <section className="relative z-0">
      <header className='pt-40 pb-20 relative'>
        <span className='w-full bg-[url(/bg.jpg)] bg-center bg-cover absolute inset-0 -z-10 -scale-x-100'></span>
        <span className='w-full bg-gradient-to-b from-backgroundColorDark via-backgroundColorDark/90 to-backgroundColorDark absolute inset-0 z-0'></span>

        <div className='relative z-20'>
          <h2 className='text-[--Secondary-Color] xl:text-3xl text-2xl w-fit m-auto z-20 relative border-b border-white'>
            Our Projects
          </h2>
          <div className='flex w-fit m-auto gap-4 text-gray-400 z-20 relative mt-4'>
            <Link href={'/'} className='hover:text-white'>Home</Link>
            <h2>/</h2>
            <h2>Skills</h2>
          </div>
        </div>
      </header>
      <section className=' relative px-4 sm:px-10 py-24 md:pb-32 md:pt-20'>
        <span className='w-full bg-[url(/Images/bg2.jpg)] bg-center bg-cover absolute inset-0 -z-10 -scale-x-100'></span>
        <span className='w-full bg-backgroundColorDark/75 absolute inset-0 z-0'></span>


        <main className='w-full max-w-5xl m-auto relative z-20'>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-5 h-[150vw] lg:h-[50rem]">
            <Link target='_blank' href={'https://asharmeraj.github.io/React-Typescript-App/'} className="overflow-y-hidden hidden lg:flex  items-center justify-center relative aboutDiv row-span-2 lg:row-span-1">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Business Growth</h2>
                  <p className='text-sm text-center'>Boost your business with powerful SEO & marketing strategies</p>
                </div>
              </span>
              <Image src={BusinessGrowth} alt='/' className='w-full h-full ' />
            </Link>
            <Link target='_blank' href={'https://asharmeraj-ai-academy.vercel.app/'} className="overflow-y-hidden flex lg:hidden items-center justify-center relative aboutDiv row-span-2 lg:row-span-1">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Ai Academy</h2>
                  <p className='text-sm text-center'>Effortlessly create detailed notes on any topic with AI-powered precision.</p>
                </div>
              </span>
              <Image src={AiAcademyStretch2} alt='/' className='w-full h-full ' />
            </Link>



            <Link target='_blank' href={'https://americanhitecpestcontrol-asharmeraj.vercel.app/'} className="overflow-y-hidden lg:col-start-3 lg:row-start-1 bg-gray-400 flex items-center justify-center relative aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Pest Control</h2>
                  <p className='text-sm text-center'>Eliminate pests with precision—advanced, reliable, and effective pest control solutions.</p>
                </div>
              </span>
              <Image src={AmericanHitecPestControl2} alt='/' className='w-full h-full' />
            </Link>

            <Link target='_blank' href={'https://asharmeraj-ai-academy.vercel.app/'} className="overflow-y-hidden col-start-2 lg:col-start-3 row-start-2 lg:row-span-2 bg-gray-500 hidden lg:flex items-center justify-center relative aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Ai Academy</h2>
                  <p className='text-sm text-center'>Effortlessly create detailed notes on any topic with AI-powered precision.</p>
                </div>
              </span>
              <Image src={AiAcademyStretch2} alt='/' className='w-full h-full' />
            </Link>
            <Link target='_blank' href={'https://time-store.vercel.app/'} className="overflow-y-hidden col-start-2 lg:col-start-3 row-start-2 lg:row-span-2 bg-gray-500 flex lg:hidden items-center justify-center relative aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Time Store</h2>
                  <p className='text-sm text-center'>Elevate your style with premium hand watches, crafted for every moment.</p>
                </div>
              </span>
              <Image src={TimeStore2} alt='/' className='w-full h-full' />
            </Link>

            <Link target='_blank' href={'https://ai-interview-mocker-aim.vercel.app/'} className="overflow-y-hidden col-start-2 lg:col-start-1 row-start-3 lg:row-start-2 row-span-2 bg-gray-600 flex items-center justify-center relative aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Ai Interview</h2>
                  <p className='text-sm text-center'>Get AI-powered interviews tailored to your niche, anytime, anywhere.</p>
                </div>
              </span>
              <Image src={AiInterviewMockerStretch} alt='/' className='w-full h-full' />
            </Link>

            <Link target='_blank' href={'https://time-store.vercel.app/'} className="overflow-y-hidden col-start-1 lg:col-start-2 row-start-3 lg:row-start-1 lg:row-span-2 bg-gray-700 hidden lg:flex items-center justify-center relative aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Time Store</h2>
                  <p className='text-sm text-center'>Elevate your style with premium hand watches, crafted for every moment.</p>
                </div>
              </span>
              <Image src={TimeStoreStretch} alt='/' className='w-full h-full' />
            </Link>
            <Link target='_blank' href={'https://asharmeraj.github.io/React-Typescript-App/'} className="overflow-y-hidden col-start-1 lg:col-start-2 row-start-3 lg:row-start-1 lg:row-span-2 bg-gray-700 flex lg:hidden items-center justify-center relative aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Business Growth</h2>
                  <p className='text-sm text-center'>Boost your business with powerful SEO & marketing strategies</p>
                </div>
              </span>
              <Image src={BusinessGrowth} alt='/' className='w-full h-full' />
            </Link>

            <Link target='_blank' href={'https://dinemarket-blue.vercel.app/'} className="overflow-y-hidden lg:col-start-2 row-start-4 lg:row-start-3 bg-gray-800 flex items-center justify-center relative aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Dine Market</h2>
                  <p className='text-sm text-center'>Redefine your style with premium fashion, designed for every occasion.</p>
                </div>
              </span>
              <Image src={DineMarketUpdated} alt='/' className='w-full h-full' />
            </Link>
          </div>
          <div className="md:hidden grid grid-cols-1 grid-rows-9 gap-6 h-full">

            <Link target='_blank' href={'https://asharmeraj.github.io/React-Typescript-App/'} className="bg-red-400 flex items-center justify-center relative overflow-hidden aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500 aboutSpan'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Business Growth</h2>
                  <p className='text-sm text-center'>Boost your business with powerful SEO & marketing strategies</p>
                </div>
              </span>
              <Image src={BusinessGrowth} alt='/' className='w-full h-full ' />
            </Link>

            <Link target='_blank' href={'https://asharmeraj-ai-academy.vercel.app/'} className="bg-blue-400 row-span-2 row-start-2 flex items-center justify-center aboutDiv overflow-hidden relative">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Ai Academy</h2>
                  <p className='text-sm text-center'>Effortlessly create detailed notes on any topic with AI-powered precision.</p>
                </div>
              </span>
              <Image src={AiAcademyStretch2} alt='/' className='w-full h-full ' />
            </Link>

            <Link target='_blank' href={'https://americanhitecpestcontrol-asharmeraj.vercel.app/'} className="bg-green-400 row-start-4 flex items-center justify-center overflow-hidden relative aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500 aboutSpan'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Pest Control</h2>
                  <p className='text-sm text-center'>Eliminate pests with precision—advanced, reliable, and effective pest control solutions.</p>
                </div>
              </span>
              <Image src={AmericanHitecPestControl2} alt='/' className='w-full h-full' />
            </Link>

            <Link target='_blank' href={'https://dinemarket-blue.vercel.app/'} className="bg-pink-400 col-start-1 row-start-7 flex items-center justify-center relative overflow-hidden aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500 aboutSpan'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Dine Market</h2>
                  <p className='text-sm text-center'>Redefine your style with premium fashion, designed for every occasion.</p>
                </div>
              </span>
              <Image src={DineMarketUpdated} alt='/' className='w-full h-full' />
            </Link>

            <Link target='_blank' href={'https://ai-interview-mocker-aim.vercel.app/'} className="bg-purple-400 row-span-2 col-start-1 row-start-5 flex items-center justify-center overflow-hidden relative aboutDiv">
              <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500 aboutSpan'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Ai Interview</h2>
                  <p className='text-sm text-center'>Get AI-powered interviews tailored to your niche, anytime, anywhere.</p>
                </div>
              </span>
              <Image src={AiInterviewMockerStretch} alt='/' className='w-full h-full' />
            </Link>
            <Link target='_blank' href={'https://time-store.vercel.app/'} className="bg-yellow-400 row-span-2 col-start-1 row-start-8 flex items-center justify-center relative overflow-hidden aboutDiv">
            <span className='w-full bg-gradient-to-b bg-black/70 absolute inset-0 z-0 aboutSpan translate-y-full duration-500 aboutSpan'>
                <div className='w-full h-full m-auto text-white flex flex-col justify-center gap-4 py-6 px-4'>
                  <h2 className='text-xl text-[--Secondary-Color] text-center'>Time Store</h2>
                  <p className='text-sm text-center'>Elevate your style with premium hand watches, crafted for every moment.</p>
                </div>
              </span>
              <Image src={TimeStoreStretch} alt='/' className='w-full h-full' />
            </Link>
          </div>
        </main>
      </section>
    </section >
  )
}

export default page