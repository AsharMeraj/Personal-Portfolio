'use client';
import React from 'react'
import {Link} from 'react-scroll';
import Linkq from 'next/link'
import close from '@/app/Images/closeRed.png'
import Image from 'next/image';
type ChildType = {
    showMobileNav: boolean,
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}



const MobileNavbar: React.FC<ChildType> = ({ setShowMobileNav, showMobileNav }) => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex flex-col justify-between gap-8 my-4 items-center h-fit'>
            <Image src={close} alt='/' onClick={() => { setShowMobileNav(false) }} className='absolute top-0 w-[1.7rem] mt-6 mr-2 right-0' />
                <ul className='flex flex-col justify-between gap-12 items-center'>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Linkq href='/' className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }} >HOME</Linkq>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link to='about' duration={800} smooth={true} className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }} href='/'>ABOUT</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link to='skills' duration={800} smooth={true} className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }} href='/'>SKILLS</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link to='work' duration={800} smooth={true} className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }} href='/'>WORK</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Linkq href='/Contact' className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }}>CONTACT</Linkq>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default MobileNavbar