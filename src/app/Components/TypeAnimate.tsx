"use client"
import React from 'react'
import { ReactTyped } from 'react-typed'

const TypeAnimate = () => {
    return (
        <>
            <ReactTyped
                strings={['Next.js', 'React.js', 'Typescript']}
                typeSpeed={80}
                backSpeed={50}
                loop />
        </>
    )
}

export default TypeAnimate