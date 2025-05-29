'use client';
import React from 'react'

export const SkillsCard = ({ name }: { name: string }) => {
    return (
        <h2 className='px-5 py-2 h-fit text-white tracking-wider sm:tracking-normal sm:font-mono border border-primary w-fit sm:text-base text-sm text-center hover:bg-primary '>{name}</h2>
    )
}

const Skills = () => {
    return (
        <section className=' relative px-10 py-24 md:pb-32 md:pt-20'>
            <span className='w-full bg-[url(/Images/bg2.jpg)] bg-center bg-cover absolute inset-0 -z-10 scale-x-100'></span>
            <span className='w-full bg-gradient-to-b from-backgroundColorDark via-backgroundColorDark/80 to-backgroundColorDark absolute inset-0 z-0'></span>
            <div className='max-w-5xl w-full m-auto relative'>
                <h2 className='text-2xl border-b w-fit m-auto border-white text-[--Secondary-Color] tracking-wide'>What We Can Do</h2>
                <h2 className='font-mono text-xl m-auto mt-8 text-white px-20 py-4 border border-[--Secondary-Color] w-fit'>My Skills</h2>
                <svg className="max-w-3xl w-full m-auto md:px-20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="744" height=""
                    viewBox="0 0 744 323" // lowering last value to 123
                    fill="none">
                    <path d="M2 133V86H258V0M366.5 600V0M741.5 133V86H481.5V0"
                        stroke="url(#paint0_linear_2101_768)"
                        strokeWidth="1" />
                    <defs>
                        <linearGradient id="paint0_linear_2101_768"
                            x1="371.963" y1="12"
                            x2="359.62" y2="600"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className=' z-20 -mt-16 min-[500px]:-mt-28 sm:-mt-32'>
                    <main className=' grid grid-cols-1 min-[300px]:grid-cols-[1fr_1fr]  gap-2 min-[380px]:gap-20 max-w-full'>
                        {/* left Side */}
                        <div className='flex flex-wrap gap-3 w-fit h-fit'>
                            <SkillsCard name='Next.js' />
                            <SkillsCard name='Tailwind CSS' />
                            <SkillsCard name='Typescript' />
                            <SkillsCard name='React.js' />
                            <SkillsCard name='Javascript' />
                            <SkillsCard name='Framer Motion' />
                            <SkillsCard name='Shadcn UI' />
                            <SkillsCard name='CSS' />
                            <SkillsCard name='HTML' />
                        </div>

                        {/* Right Side */}
                        <div className='flex flex-wrap gap-3 justify-end w-fit h-fit'>
                            <SkillsCard name='Gemini Ai' />
                            <SkillsCard name='OpenAi' />
                            <SkillsCard name='Postgres' />
                            <SkillsCard name='Drizzle ORM' />
                            <SkillsCard name='inngest' />
                        </div>
                    </main>

                    {/* Bottom Side */}
                    <main className='w-full flex flex-wrap justify-center mt-6 md:mt-12 gap-3 px-12'>
                        <SkillsCard name='Generative Ai' />
                        <SkillsCard name='Website Developemnt' />
                        <SkillsCard name='Web Hosting' />
                        <SkillsCard name='Web Animation' />
                        <SkillsCard name='3D Model Implementation' />
                    </main>
                </div>
            </div>
        </section>
    )
}

export default Skills

