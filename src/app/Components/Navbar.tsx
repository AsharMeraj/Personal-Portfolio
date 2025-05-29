'use client';
import { useState } from 'react';
import MobileNavbar from '@/app/Components/MobileNavbar'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import CustomLink from './CustomLink';

export const NavLink = ({ name }: { name: string }) => {
  return (
    <Link href={`/${String(name).charAt(0).toUpperCase() + String(name).slice(1)}`} className='names tracking-wider text-white cursor-pointer text-xs font-medium hover:text-[--Secondary-Color] duration-300'>
      <h2>{name}</h2>
    </Link>
  )
}

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  const path = usePathname()

  const NavLinks = [
    {
      name: "Home",
      path: '/'
    },
    {
      name: "About",
      path: '/About'
    },
    {
      name: "Services",
      path: '/Services'
    },
    {
      name: "Skills",
      path: '/Skills'
    },
    {
      name: "Work",
      path: '/Work'
    },
    {
      name: "Contact",
      path: '/Contact'
    },
  ]

  return (
    <div id='navbar' className='z-40 absolute w-full'>
      <nav className='z-10 w-full flex justify-center items-center py-8'>
        <div className='w-full max-w-5xl flex items-center justify-between mx-10 max-sm:mx-[1rem]'>
          <div className='flex items-center'>
            <div className='flex w-fit'>
              <h2 className='text-[1.5rem] text-primary font-extrabold flex items-center max-lg:text-[1.2rem] tracking-widest cursor-pointer'>Ashar</h2>
              <h1 className='text-[1.5rem] text-[--Secondary-Color] font-extrabold flex items-center max-lg:text-[1.2rem] tracking-widest'>.</h1>
            </div>
          </div>
          <div id='namebox' className='flex items-center justify-between gap-8 max-lg:gap-8 max-[840px]:hidden'>
            {
              NavLinks.map((item, index) => (
                <CustomLink key={index} href={`${item.path}`} className={`names tracking-wider ${path === item.path? 'text-[--Secondary-Color]': 'text-white'}  cursor-pointer text-sm font-medium hover:text-[--Secondary-Color] duration-300`}>
                  <h2>{item.name}</h2>
                </CustomLink>
              ))
            }
          </div>
          <div className='max-[840px]:hidden flex gap-4'>
            <Link target='_blank' href={'https://www.facebook.com/profile.php?id=61551418963760'} className='max-[840px]:hidden hover:scale-110'>
              <FaFacebookF color='var(--primary)' />
            </Link>
            <Link target='_blank' href={'https://www.instagram.com/frontend_webdeveloper/'} className='max-[840px]:hidden hover:scale-110'>
              <FaInstagram color='var(--primary)' />
            </Link>
            <Link target='_blank' href={'https://www.linkedin.com/in/ashar-meraj-244059273/'} className='max-[840px]:hidden hover:scale-110'>
              <FaLinkedin color='var(--primary)' />
            </Link>
            <Link target='_blank' href={'https://github.com/AsharMeraj'} className='max-[840px]:hidden hover:scale-110'>
              <FaGithub color='var(--primary)' />
            </Link>
          </div>
          <Image alt='/' src={'/Images/menuRed.png'} width={24} height={24} onClick={() => { setShowMobileNav(true) }} className='hidden w-[1.5rem] max-[840px]:block cursor-pointer' />

        </div>
      </nav>
      <main className={`flex items-center justify-center h-screen w-full fixed top-0 duration-700 z-30  ${showMobileNav ? 'translate-y-[0]' : 'translate-y-[-100%]'}`}>
      <span className='w-full h-screen backdrop-blur-sm bg-backgroundColorDark opacity-90 absolute inset-0 -z-10'></span>
        <MobileNavbar setShowMobileNav={setShowMobileNav} />
      </main>
    </div>
  )
}
export default Navbar