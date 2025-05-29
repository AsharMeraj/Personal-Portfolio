"use client";
import React from "react"
import Image from "next/image";
import AboutImage from "@/app/Images/AboutImage.png"
import { motion } from "framer-motion";
import { BoldFont } from "./Font";
import Button from "./button/Button";
import { DiModernizr } from "react-icons/di";
import { IconType } from "react-icons/lib";
import { MdAnimation } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";

interface PropType {
  logo: IconType
  head: string
  para: string
}

export const AboutCard = (props: PropType) => {
  return (
    <div className=" relative p-8 border border-primary hover:bg-primary duration-300 hoverDiv">
      <span className="absolute left-1/2 -translate-x-1/2 -top-[13%] bg-backgroundColorDark border border-primary rounded-full p-4"><props.logo color="white" size={35} /></span>
      <div className="max-w-72 m-auto">
        <h2 className="text-white font-semibold text-xl md:text-2xl font-mono mt-4">{props.head}</h2>
        <p className="text-gray-500 paragraph duration-300 font-sans text-sm mt-4">{props.para}</p>
      </div>
    </div>
  )
}



export default function About() {
  return (
    <section className="bg-backgroundColorDark py-24 md:py-32 px-10 relative">
      <h2 className='text-2xl w-fit m-auto border-b text-[--Secondary-Color] tracking-wide'>About Us</h2>
      <h2 className='text-white text-3xl md:text-4xl w-fit m-auto mt-6'>Why Choose Us?</h2>
      <main className="flex flex-wrap w-fit m-auto mt-20 gap-20 md:gap-6 justify-center">

        <AboutCard logo={DiModernizr} head="Modern Technology" para="Turning ideas into digital reality with modern tech—building innovative, high-performance websites that drive success and set you apart." />

        <AboutCard logo={MdAnimation} head="Smooth Animations" para="Bringing websites to life with smooth animations and interactive content—creating engaging, dynamic experiences that captivate and connect. " />

        <AboutCard logo={GrHostMaintenance} head="Hosting Services" para="Reliable hosting solutions for your website and brand—ensuring seamless performance, security, and scalability for your digital presence" />
      </main>
    </section>
  )
}