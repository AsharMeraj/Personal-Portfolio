'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
type ChildType = {
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}



const MobileNavbar: React.FC<ChildType> = ({ setShowMobileNav }) => {
    return (
        <main className='flex items-center justify-center '>
            <div className='flex flex-col justify-between gap-8 my-4 items-center h-fit'>
            <Image src={'/Images/closeRed.png'} width={27} height={27} alt='/' onClick={() => { setShowMobileNav(false) }} className='absolute top-0 w-[1.7rem] mt-10 mr-4 right-0' />
                <ul className='flex flex-col justify-between gap-12 items-center'>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link href='/' className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }} >HOME</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }} href='/About'>ABOUT</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }} href='/Services'>SERVICES</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }} href='/Skills'>SKILLS</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }} href='/Work'>WORK</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link href='/Contact' className='names tracking-wider text-white cursor-pointer text-[15px] hover:text-[--Secondary-Color] duration-300' onClick={() => { setShowMobileNav(false) }}>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default MobileNavbar