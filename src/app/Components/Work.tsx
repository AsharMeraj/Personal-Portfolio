'use client';
import React from 'react'
import Image from 'next/image';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Button from './button/Button';
import Link from 'next/link';

const Work = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const portfolioItems = [
        {
            image: "/Images/AmericanHitecPestControl.png"
        },
        {
            image: "/Images/AiAcademy.png"
        },
        {
            image: "/Images/TimeStore.png"
        },
        {
            image: "/Images/AiInterviewMocker.png"
        },
        {
            image: "/Images/BusinessGrowth.png"
        },
        {
            image: "/Images/DineMarket.png"
        },
    ]
    return (
        <section className='flex items-center justify-center flex-col py-24 md:py-40 px-14 relative'>
            <span className='w-full bg-[url(/Images/bg2.jpg)] bg-center bg-cover absolute inset-0 -z-10 scale-x-100'></span>
            <span className='w-full bg-gradient-to-b from-backgroundColorDark/70 via-backgroundColorDark/70 to-backgroundColorDark/70 absolute inset-0 z-0'></span>
            <div className='max-w-5xl w-full flex justify-between items-start md:items-end flex-col md:flex-row relative z-20'>
                <div>
                    <h2 className='text-2xl w-fit border-b text-[--Secondary-Color] tracking-wide'>Our Projects</h2>
                    <h2 className='text-white text-3xl md:text-4xl w-fit mt-6'>Projects Successfully Done</h2>
                </div>
                <Link className='mt-6 md:mt-0' href={'/Work'}>
                    <Button>View all Projects</Button>
                </Link>
            </div>
            <div className='mt-12 mx-4 md:mx-0 z-20'>
                <Carousel setApi={setApi}
                    className="w-full max-w-5xl   "
                >
                    <CarouselContent className=''>
                        {portfolioItems.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-fit opacity-65 hover:opacity-100 duration-200 cursor-pointer">
                                <div className="flex items-center justify-center">
                                    <Image src={item.image} className='' width={1280} height={500} alt='/' />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='text-white' />
                    <CarouselNext />
                </Carousel>
                <div className='flex gap-3 items-center w-fit m-auto mt-6'>
                    {Array.from({ length: count }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current - 1 ? 'bg-primary scale-125' : 'bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work