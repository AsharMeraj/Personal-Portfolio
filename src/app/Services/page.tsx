import React from 'react'
import { MdOutlineLaptopWindows } from "react-icons/md";
import { MdAnimation } from "react-icons/md";
import { SiHostinger } from "react-icons/si";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import Link from 'next/link';
import { ServicesCard } from '../Services/_components/ServicesCard';
import Button from '../Components/button/Button';

const page = () => {
    return (
        <section className="relative z-0">
            <header className='pt-40 pb-20 relative'>
                <span className='w-full bg-[url(/bg.jpg)] bg-center bg-cover absolute inset-0 -z-10 -scale-x-100'></span>
                <span className='w-full bg-gradient-to-b from-backgroundColorDark via-backgroundColorDark/90 to-backgroundColorDark absolute inset-0 z-0'></span>

                <div className='relative z-20'>
                    <h2 className='text-[--Secondary-Color] xl:text-3xl text-2xl w-fit m-auto z-20 relative border-b border-white'>
                        Our Services
                    </h2>
                    <div className='flex w-fit m-auto gap-4 text-gray-400 z-20 relative mt-4'>
                        <Link href={'/'} className='hover:text-white'>Home</Link>
                        <h2>/</h2>
                        <h2>Services</h2>
                    </div>
                </div>
            </header>
            <section className='grid px-10 place-items-center relative py-24 md:py-32'>
            <span className='w-full bg-[url(/Images/bg2.jpg)] bg-center bg-cover absolute inset-0 -z-10 -scale-x-100'></span>
            <span className='w-full bg-gradient-to-b from-backgroundColorDark/70 via-backgroundColorDark/70 to-backgroundColorDark/70 absolute inset-0 z-0'></span>
            <main className='flex gap-10 md:gap-7 flex-col md:flex-row z-20'>
                {/* Left Section */}
                <div className='flex flex-col gap-14 '>
                    <h2 className='text-2xl w-fit border-b text-[--Secondary-Color] tracking-wide'>Our Services</h2>
                    <h2 className='text-white text-3xl md:text-4xl w-fit -mt-6'>What We Do?</h2>
                    <p className='text-gray-400 max-w-96 '>From development to hosting and animations, we build high-performance websites with seamless deployment and interactive motion.</p>
                    {/* <Link href={"/Services"} className='hidden md:block '><Button>View All Services</Button></Link> */}
                </div>

                {/* Right Section */}
                <div className='grid lg:grid-cols-2 gap-16 md:gap-10'>
                    <ServicesCard logo={MdOutlineLaptopWindows} head='Website Development' para='Whether you&apos;re midway or just starting, our web development services add the perfect finishing touch.' />

                    <ServicesCard logo={MdAnimation} head='Web Animations' para='From concept to execution, our web animation adds seamless motion and interactivity to your site.' />

                    <ServicesCard logo={SiHostinger} head='Web Hosting' para='From code to launch, our web development and hosting ensure a seamless experience.' />

                    <ServicesCard logo={HiMiniSquare3Stack3D} head='3D Model Implementation' para='Whether you&apos;re midway or just starting, our web development services add the perfect finishing touch.' />
                </div>
                {/* <Link href={"/Services"} className='block md:hidden'>
                    <Button>View All Services</Button>
                </Link> */}
            </main>
        </section>
        </section >
    )
}

export default page