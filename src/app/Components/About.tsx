"use client";
import React from "react"
import Image from "next/image";
import AboutImage from "@/app/Images/AboutImage.png"
import { motion } from "framer-motion";
import { BoldFont } from "./Font";
import { Button } from "@/components/ui/button";



export default function About() {
  return (
    <main id="about" className="bg-gradient relative top-0 w-full py-[8rem] flex items-center flex-col">
      <motion.h1
        className="text-[1.8rem] text-[--Secondary-Color] max-[1200px]:mb-[3rem] "
        key="heading2"
        initial={{ y: "8rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <BoldFont>About Me</BoldFont>
      </motion.h1>
      <motion.main className="flex justify-between items-center w-fit gap-[4rem]  mx-10 max-[840px]:mx-[1rem] max-[1079px]:gap-[2rem] max-[934px]:flex-col max-[934px]:gap-[4rem] max-[400px]:gap-[4rem]">
        <motion.div
          className="text-white w-[30rem] flex flex-col gap-6 text-[15px] max-[1200px]:w-[26rem] max-[1079px]:w-[24rem] max-[1079px]:text-[13px] max-[520px]:w-[22rem] max-[400px]:w-[20rem] max-[380px]:w-full"
          key="Para"
          initial={{ y: "8rem", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <p>Hello, I am Muhammad Ashar - Your Web Development Partner</p>
          <p>I am a dedicated web developer with a deep love for crafting exceptional online experiences. </p>
          <p> Revolutionize online education with a custom-built LMS. I design user-friendly platforms that make learning a seamless and engaging experience.</p>
          <p> From web applications to interactive dashboards, I create dynamic and responsive solutions tailored to your unique requirements</p>
          <p>Whether you need a personal portfolio to showcase your talents or a feature-rich Learning Management System (LMS) to educate the world, I have got you covered.</p>
        </motion.div>
        <motion.div
          className="w-[36rem] h-[30rem] max-[1200px]:w-[32rem] max-[1200px]:h-[16rem] max-[1004px]:w-[29rem] max-[1004px]:h-[13rem] max-[520px]:w-[22rem] max-[520px]:h-[11rem] max-[400px]:w-full max-[400px]:h-full flex-col  flex items-center justify-center"
          key="ResumeBtn"
          initial={{ y: "8rem", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Image className="relative max-[934px]:mt-[2rem] max-[400px]:" alt="/" src={AboutImage} />
          <div className="mt-2">
            <a href='Resume.pdf' download='Resume.pdf'>
              <Button variant={'outline'}>Download Resume</Button>
            </a>
          </div>
        </motion.div>
      </motion.main>
    </main>
  )
}