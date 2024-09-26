import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import { BoldFont } from '../Components/Font'
import AboutImage from "@/app/Images/AboutImage.png"
import { HomeAnimateWrap } from '../Components/AnimateWrap'

const page = () => {
    return (
        <main id="about" className="relative bg-black  w-full py-[2rem] md:py-[8rem] flex items-center flex-col">
            <HomeAnimateWrap>
                <h2 className='text-2xl text-[--Secondary-Color] w-fit m-auto mb-4'>About Me</h2>

                <main className="flex justify-between items-center w-fit gap-[4rem]  mx-10 max-[840px]:mx-[1rem] max-[1079px]:gap-[2rem] max-[934px]:flex-col max-[934px]:gap-[4rem] max-[400px]:gap-[4rem]">
                    <div
                        className="text-white w-[30rem] flex flex-col gap-6 text-[15px] max-[1200px]:w-[26rem] max-[1079px]:w-[24rem] max-[1079px]:text-[13px] max-[520px]:w-[22rem] max-[400px]:w-[20rem] max-[380px]:w-full"
                    >
                        <p>Hello, I am Muhammad Ashar - Your Web Development Partner</p>
                        <p>I am a dedicated web developer with a deep love for crafting exceptional online experiences. </p>
                        <p> Revolutionize online education with a custom-built LMS. I design user-friendly platforms that make learning a seamless and engaging experience.</p>
                        <p> From web applications to interactive dashboards, I create dynamic and responsive solutions tailored to your unique requirements</p>
                        <p>Whether you need a personal portfolio to showcase your talents or a feature-rich Learning Management System (LMS) to educate the world, I have got you covered.</p>
                    </div>
                    <div
                        className="w-[36rem] h-[30rem] max-[1200px]:w-[32rem] max-[1200px]:h-[16rem] max-[1004px]:w-[29rem] max-[1004px]:h-[13rem] max-[520px]:w-[22rem] max-[520px]:h-[11rem] max-[400px]:w-full max-[400px]:h-full flex-col  flex items-center justify-center"
                    >
                        <Image className="relative max-[934px]:mt-[2rem] max-[400px]:" alt="/" src={AboutImage} />
                        <div className="mt-2">
                            <a href='Resume.pdf' download='Resume.pdf'>
                                <Button>Download Resume</Button>
                            </a>
                        </div>
                    </div>
                </main>
            </HomeAnimateWrap>
        </main>
    )
}

export default page