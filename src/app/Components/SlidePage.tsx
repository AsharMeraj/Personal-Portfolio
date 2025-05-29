'use client';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TimeStore from '@/app/Images/TimeStore.png'
import DineMarket from '@/app/Images/Dinemarket.png'
import BusinessGrowth from '@/app/Images/BusinessGrowth.png'
import AiInterviewMocker from '@/app/Images/AiInterviewMocker.png'
import AmericanHitecPestControl from '@/app/Images/AmericanHitecPestControl.png'
import AiAcademy from '@/app/Images/AiAcademy.png'
import Image from 'next/image';
import Link from 'next/link';

const Responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1293, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 820, min: 0 },
        items: 1
    }
}


const SlidePage = () => {
    return (
        <section className='w-full grid place-items-center py-8 relative z-0'>
            <main className='flex flex-col gap-12'>
                <Carousel
                    responsive={Responsive}
                    containerClass='w-[80rem] max-[1293px]:w-[60rem] max-[975px]:w-[50rem] max-[820px]:w-[30rem] max-[525px]:w-[20rem] max-[333px]:w-[15rem] m-auto'
                    infinite={true}>
                    <Link target='_blank' href={"https://time-store.vercel.app/"}>
                        <Image alt='/' width={600} height={600} src={TimeStore} />
                    </Link>
                    <Link target='_blank' href={"https://dinemarket-blue.vercel.app/"}>
                        <Image alt='/' width={600} height={600} src={DineMarket} />
                    </Link>
                    <Link target='_blank' href={"https://asharmeraj.github.io/React-Typescript-App/"}>
                        <Image alt='/' width={600} height={600} src={BusinessGrowth} />
                    </Link>
                    <Link target='_blank' href={"https://ai-interview-mocker-aim.vercel.app/"}>
                        <Image alt='/' width={600} height={600} src={AiInterviewMocker} />
                    </Link>
                    <Link target='_blank' href={"https://americanhitecpestcontrol-asharmeraj.vercel.app/"}>
                        <Image alt='/' width={600} height={600} src={AmericanHitecPestControl} />
                    </Link>
                    <Link target='_blank' href={"https://asharmeraj-ai-academy.vercel.app/"}>
                        <Image alt='/' width={600} height={600} src={AiAcademy} />
                    </Link>
                </Carousel>
            </main>
        </section>
    )
}

export default SlidePage