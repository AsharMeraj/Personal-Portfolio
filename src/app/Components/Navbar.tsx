'use client';
import { useState } from 'react';
import MobileNavbar from '@/app/Components/MobileNavbar'
import { Link } from 'react-scroll';
import Linkq from 'next/link';
import Button from './Button';
import menu from '@/app/Images/menuRed.png'
import Image from 'next/image';
import ContactBtn from "@/app/Contact/ContactBtn"
import HomeBtn from './HomeBtn';
import Font from './Font';

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)



  return (
    <div id='navbar'>

      <nav className='absolute bg-gradient-to-b from-black to-transparent w-full flex justify-center z-20  items-center py-[1.5rem]'>
        <div className='w-[70rem] flex items-center justify-between mx-10 max-sm:mx-[1rem]'>
          <div className='flex items-center'>
            <div className='flex w-fit'>
                <Link to='' className='text-[1.5rem] text-[--Primary-Color] font-extrabold flex items-center max-lg:text-[1.2rem] tracking-widest cursor-pointer'>Ashar</Link>
                <h1 className='text-[1.5rem] text-[--Secondary-Color] font-extrabold flex items-center max-lg:text-[1.2rem] tracking-widest'>.</h1>
            </div>
          </div>
          <div id='namebox' className='flex items-center justify-between gap-[4rem] max-lg:gap-[2.5rem] max-[840px]:hidden'>

            <Linkq href='/' className='names tracking-wider text-white cursor-pointer text-[12px] hover:text-[--Secondary-Color] duration-300'>
              <h2>HOME</h2>
            </Linkq>
            <Link to='about' duration={800} smooth={true} className='names tracking-wider text-white cursor-pointer text-[12px] hover:text-[--Secondary-Color] duration-300'>
              <h2>ABOUT</h2>
            </Link>
            <Link to='skills' duration={800} smooth={true} className='names tracking-wider text-white cursor-pointer text-[12px] hover:text-[--Secondary-Color] duration-300'>
              <h2>SKILLS</h2>
            </Link>
            <Link to='work' duration={800} smooth={true} className='names tracking-wider text-white cursor-pointer text-[12px] hover:text-[--Secondary-Color] duration-300'>
              <h2>WORK</h2>
            </Link>


          </div>
          <ContactBtn />
          <Image alt='/' src={menu} onClick={() => { setShowMobileNav(true) }} className='hidden w-[1.5rem] max-[840px]:block cursor-pointer' />

        </div>
      </nav>
      <main className={`bg-black/80 flex items-center justify-center h-screen ml-2 navwidth fixed top-0 duration-700 z-30  ${showMobileNav ? 'translate-y-[0]' : 'translate-y-[-100%]'}`}>
        <MobileNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
      </main>
    </div>
  )
}
export default Navbar