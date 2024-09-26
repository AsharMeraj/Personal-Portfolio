import React from 'react'
import WorkCard from '../Components/WorkCard'
import TimeStore from '@/app/Images/TimeStore.png'
import DineMarket from '@/app/Images/Dinemarket.png'
import BusinessGrowth from '@/app/Images/BusinessGrowth.png'
import AiInterviewMocker from '@/app/Images/AiInterviewMocker.png'
import Link from 'next/link';
import { HomeAnimateWrap } from '../Components/AnimateWrap'

const page = () => {
  return (

    <section className='relative w-full h-full bg-black flex  flex-col items-center py-[2rem] md:py-[6rem]'>
      <HomeAnimateWrap>
        <h2 className='text-2xl z-30 text-[--Secondary-Color] w-fit m-auto mb-4'>My Work</h2>
        <main className='grid sm:mx-10 mx-5 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[71rem] p-4 gap-10 md:gap-8'>


          <Link
            target='_blank'
            href={"https://asharmeraj.github.io/React-Typescript-App/"}
            className=''>
            <WorkCard name={'BusinessGrowth'} src={BusinessGrowth} para={'This is a BusinessGrowth website where you can grow up your business with best seo services'} />
          </Link>

          <Link
            target='_blank'
            href={'https://ai-interview-mocker-aim.vercel.app/'}
            className=''>
            <WorkCard name={'AI Interview Mocker'} src={AiInterviewMocker} para={'This is an Ai Interview Mocker Application where Artifical Intellegence can take your Interview mock test'} />
          </Link>

          <Link
            target='_blank'
            href={'https://time-store.vercel.app/'}
            className=''>
            <WorkCard name={'TimeStore'} src={TimeStore} para={'This is a fully functional  ecommerce watch store with variaties of watches'} />
          </Link>

          <Link
            target='_blank'
            href={'https://dinemarket-blue.vercel.app/'}
            className=''>
            <WorkCard name={'DineMarket'} src={DineMarket} para={'This is a ecommerce application of a clothing brand called dinemarket where you can find varieties of dresses'} />
          </Link>

        </main>
      </HomeAnimateWrap>
    </section>
  )
}

export default page