import { Link1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="w-full py-24 bg-backgroundColorDark">
    //   <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    //     {/* Grid */}
    //     <div className="py-10 flex justify-between items-center flex-col gap-8 lg:flex-row">
    //       <div className='flex w-fit'>
    //         <h2 className='text-[1.5rem] text-primary font-extrabold flex items-center max-lg:text-[1.2rem] tracking-widest cursor-pointer'>Ashar</h2>
    //         <h1 className='text-[1.5rem] text-[--Secondary-Color] font-extrabold flex items-center max-lg:text-[1.2rem] tracking-widest'>.</h1>
    //       </div>
    //       <ul className="text-sm text-center ">
    //         <p className="text-gray-400 text-sm">
    //           © {new Date().getFullYear()} Copyright Ashar Meraj. Powered by Next.js & Tailwind CSS.
    //         </p>
    //       </ul>
    //     </div>
    //     {/* Grid */}

    //   </div>
    // </footer>
    <footer className="bg-backgroundColorDark pt-20 pb-6 px-10 font-sans tracking-wide relative">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 ">
          <main className="flex justify-start sm:justify-center md:justify-start">
            <div className="w-full sm:max-w-[6rem]">
              <h2 className="text-white text-sm uppercase font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-3">
                <li>
                  <a href="javascript:void(0)" className="text-gray-400 hover:text-white text-sm transition-all">Newsroom</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-gray-400 hover:text-white text-sm transition-all">Tailwind CSS</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-gray-400 hover:text-white text-sm transition-all">Careers</a>
                </li>
              </ul>
            </div>
          </main>
          <main className="flex justify-start sm:justify-center">
            <div className="w-full sm:max-w-[6rem]">
              <h2 className="text-white text-sm uppercase font-semibold mb-4">Follow Us</h2>
              <ul className="space-y-3 flex flex-col">
                <Link href={'https://github.com/AsharMeraj'} className="text-gray-400 hover:text-white text-sm transition-all">
                  Github
                </Link>
                <Link href={'https://www.linkedin.com/in/ashar-meraj-244059273/'} className="text-gray-400 hover:text-white text-sm transition-all">
                  linkedin
                </Link>
                <Link href={'https://www.instagram.com/frontend_webdeveloper/'} className="text-gray-400 hover:text-white text-sm transition-all">
                  Instagram
                </Link>
              </ul>
            </div>
          </main>
          <main className="flex justify-start sm:justify-center">
            <div className="w-full sm:max-w-[6rem]">
              <h2 className="text-white text-sm uppercase font-semibold mb-4">Company</h2>
              <ul className="space-y-3">
                <li>
                  <a href="javascript:void(0)" className="text-gray-400 hover:text-white text-sm transition-all">Privacy Policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-gray-400 hover:text-white text-sm transition-all">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </main>


          <main className="flex justify-start sm:justify-center md:justify-end">
            <div className="w-full sm:max-w-[6rem]">
              <h2 className="text-white text-sm uppercase font-semibold mb-4">Features</h2>
              <ul className="space-y-3 flex flex-col">
                <Link href={'/About'} className="text-gray-400 hover:text-white text-sm transition-all">
                  About
                </Link>
                <Link href={'/Work'} className="text-gray-400 hover:text-white text-sm transition-all">
                  Work
                </Link>
                <Link href={'/Contact'} className="text-gray-400 hover:text-white text-sm transition-all">
                  Contact
                </Link>
              </ul>
            </div>
          </main>
        </div>


        <div className="flex justify-center sm:justify-between flex-wrap gap-12 mt-20">
          <div className="flex  space-x-4 sm:justify-center  ">
            <Link target="_blank" href={'https://www.facebook.com/profile.php?id=61551418963760'}>
              <FaFacebookF color="rgb(156,163,175)" className="hover:scale-110 cursor-pointer" />
            </Link>
            <Link target="_blank" href={'https://www.instagram.com/frontend_webdeveloper/'}>
              <FaInstagram color="rgb(156,163,175)" className="hover:scale-110 cursor-pointer" />
            </Link>
            <Link target="_blank" href={'https://www.linkedin.com/in/ashar-meraj-244059273/'}>
              <FaLinkedin color="rgb(156,163,175)" className="hover:scale-110 cursor-pointer" />
            </Link>
            <Link target="_blank" href={'https://github.com/AsharMeraj'}>
              <FaGithub color="rgb(156,163,175)" className="hover:scale-110 cursor-pointer" />
            </Link>
          </div>

          <p className='text-gray-400 text-sm text-center'>© {new Date().getFullYear()} Copyright Ashar Meraj. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute w-full px-4 left-0 bottom-[4.5rem]">
        <div className="border-t border-gray-700"></div>
      </div>
    </footer>
  );
};
{/* <div className="flex  space-x-4 sm:justify-center  ">
  <FaFacebookF color="rgb(156,163,175)" className="hover:scale-110 cursor-pointer" />
  <FaInstagram color="rgb(156,163,175)" className="hover:scale-110 cursor-pointer" />
  <FaLinkedin color="rgb(156,163,175)" className="hover:scale-110 cursor-pointer" />
  <FaGithub color="rgb(156,163,175)" className="hover:scale-110 cursor-pointer" />
</div> */}

export default Footer;
