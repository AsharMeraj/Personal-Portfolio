import React from 'react'

export const SkillsCard = ({ name }: { name: string }) => {
    return (
        <h2 className='px-5 py-2 h-fit text-white tracking-wider sm:tracking-normal sm:font-mono border border-primary w-fit sm:text-base text-sm text-center hover:bg-primary '>{name}</h2>
    )
}