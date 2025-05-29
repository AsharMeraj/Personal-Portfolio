import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Button from './button/Button'

const Testimonials = () => {
    const ClientList = [
        {
            name: "Stephanie Byrd-Grimes",
            review: "Thank you, Ashar, for your professionalism and creativity in designing my website. I appreciate your patience and dedication to client satisfaction. The site looks modern and has a great vibe. Wishing you success in your future endeavors!",
            icon: '/Images/woman.png'

        },
        {
            name: "Arsalan",
            review: "Hey Ashar, I truly appreciate your expertise and creativity in designing my website. Your attention to detail made the process seamless, resulting in a sleek and modern design",
            icon: '/Images/man.png'

        },
    ]

    return (
        <section className='flex items-center justify-center flex-col py-24 md:py-40 px-14 overflow-hidden relative'>
            <span className='w-full bg-[url(/Images/bg2.jpg)] bg-center bg-cover absolute inset-0 -z-10 -scale-x-100'></span>
            <span className='w-full bg-gradient-to-b from-backgroundColorDark via-backgroundColorDark/90a to-backgroundColorDark absolute inset-0 z-0'></span>
            <div className='max-w-5xl w-full z-20'>
                <div>
                    <h2 className='text-2xl w-fit border-b text-[--Secondary-Color] tracking-wide'>Clients Reviews</h2>
                    <h2 className='text-white text-3xl md:text-4xl w-fit mt-6'>What Our Clients Say</h2>
                </div>
            </div>
            <div className=' w-full max-w-5xl mt-12 z-20'>
                <Carousel className="mx-4 md:mx-0" opts={{ loop: true }}>
                    <CarouselContent >
                        {ClientList.map((item, index) => (
                            <CarouselItem key={index} className='h-fit'>
                                <main className='flex flex-col md:flex-row justify-center gap-2 md:gap-6 max-w-4xl w-full m-auto'>
                                    <div className='relative w-fit'>
                                        <div className='border-2 border-primary p-16 md:p-24 rounded-full w-fit rotateBox duration-500 '>
                                        </div>
                                        <Image src={item.icon} alt='/' height={512} width={512} className='max-w-[100px] md:max-w-[150px] lg:max-w-[150px] absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' />
                                    </div>
                                    <div className='flex items-center w-full'>
                                        <div className='flex flex-col gap-3'>
                                            <h2 className='text-[--Secondary-Color] text-xl sm:text-2xl w-full'>{item.name}</h2>
                                            <q className='text-gray-300 text-sm md:text-base w-full'>{item.review}</q>
                                        </div>
                                    </div>
                                </main>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}

export default Testimonials