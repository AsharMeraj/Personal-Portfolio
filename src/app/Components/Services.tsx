import React from 'react'
import Button from './button/Button'
import { MdOutlineLaptopWindows } from "react-icons/md";
import { MdAnimation } from "react-icons/md";
import { IconType } from 'react-icons/lib';
import { SiHostinger } from "react-icons/si";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";

interface PropType {
    logo: IconType
    head: string
    para: string
}

export const ServicesCard = (props: PropType) => {
    return (
        <div className='flex gap-5 flex-col rotateDiv'>
            <div className='relative w-fit'>
                <div className='border border-primary p-8 md:p-10 w-fit rotateBox duration-500'>
                </div>
                <props.logo color='white' size={30} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <h2 className='text-white font-semibold text-xl md:text-2xl font-mono'>{props.head}</h2>
            <p className='font-sans text-sm text-gray-400 max-w-72'>{props.para}</p>
        </div>
    )
}


const Services = () => {
    return (
        <section className='grid px-10 place-items-center relative py-24 md:py-32'>
            <span className='w-full bg-[url(/Images/bg2.jpg)] bg-center bg-cover absolute inset-0 -z-10 -scale-x-100'></span>
            <span className='w-full bg-gradient-to-b from-backgroundColorDark/70 via-backgroundColorDark/70 to-backgroundColorDark/70 absolute inset-0 z-0'></span>
            <main className='flex gap-10 md:gap-7 flex-col md:flex-row z-20'>
                {/* Left Section */}
                <div className='flex flex-col gap-14 '>
                    <h2 className='text-2xl w-fit border-b text-[--Secondary-Color] tracking-wide'>Our Services</h2>
                    <h2 className='text-white text-3xl md:text-4xl w-fit -mt-6'>What We Do?</h2>
                    <p className='text-gray-400 max-w-96 '>From development to hosting and animations, we build high-performance websites with seamless deployment and interactive motion.</p>
                    <div className='hidden md:block '><Button>View All Services</Button></div>
                </div>

                {/* Right Section */}
                <div className='grid lg:grid-cols-2 gap-16 md:gap-10'>
                    <ServicesCard logo={MdOutlineLaptopWindows} head='Website Development' para='Whether you&apos;re midway or just starting, our web development services add the perfect finishing touch.'/>

                    <ServicesCard logo={MdAnimation} head='Web Animations' para='From concept to execution, our web animation adds seamless motion and interactivity to your site.'/>

                    <ServicesCard logo={SiHostinger} head='Web Hosting' para='From code to launch, our web development and hosting ensure a seamless experience.'/>

                    <ServicesCard logo={HiMiniSquare3Stack3D} head='3D Model Implementation' para='Whether you&apos;re midway or just starting, our web development services add the perfect finishing touch.'/>
                </div>
                <div className='block md:hidden'><Button>View All Services</Button></div>
            </main>
        </section>
    )
}

export default Services