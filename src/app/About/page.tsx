import React from 'react'
import { DiModernizr } from 'react-icons/di'
import { MdAnimation } from 'react-icons/md'
import { GrHostMaintenance } from 'react-icons/gr'
import Link from 'next/link'
import { AboutCard } from './_components/AboutCard'

const page = () => {
    return (
        <section className="relative z-0">
            <header className='pt-40 pb-20 relative'>
                <span className='w-full bg-[url(/bg.jpg)] bg-center bg-cover absolute inset-0 -z-10 -scale-x-100'></span>
                <span className='w-full bg-gradient-to-b from-backgroundColorDark via-backgroundColorDark/90 to-backgroundColorDark absolute inset-0 z-0'></span>

                <div className='relative z-20'>
                    <h2 className='text-[--Secondary-Color] xl:text-3xl text-2xl w-fit m-auto z-20 relative border-b border-white'>
                        About Us
                    </h2>
                    <div className='flex w-fit m-auto gap-4 text-gray-400 z-20 relative mt-4'>
                    <Link href={'/'} className='hover:text-white'>Home</Link>
                        <h2>/</h2>
                        <h2>About</h2>
                    </div>
                </div>
            </header>
            <main className='py-24 md:pt-32 md:pb-40 px-10 relative '>
                <span className='w-full bg-[url(/Images/bg2.jpg)] bg-center bg-cover absolute inset-0 -z-10 scale-x-100'></span>
                <span className='w-full bg-gradient-to-b from-backgroundColorDark/75 via-backgroundColorDark/75 to-backgroundColorDark/75 absolute inset-0 z-0'></span>
                <div className='relative z-20'>
                    <h2 className='text-white text-3xl md:text-4xl w-fit m-auto mt-6'>Why Choose Us?</h2>
                    <main className="flex flex-wrap w-fit m-auto mt-20 gap-20 md:gap-6 justify-center">
                        <AboutCard logo={DiModernizr} head="Modern Technology" para="Turning ideas into digital reality with modern tech—building innovative, high-performance websites that drive success and set you apart." />

                        <AboutCard logo={MdAnimation} head="Smooth Animations" para="Bringing websites to life with smooth animations and interactive content—creating engaging, dynamic experiences that captivate and connect. " />

                        <AboutCard logo={GrHostMaintenance} head="Hosting Services" para="Reliable hosting solutions for your website and brand—ensuring seamless performance, security, and scalability for your digital presence" />
                    </main>
                </div>
            </main>
        </section >
    )
}

export default page