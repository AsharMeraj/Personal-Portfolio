import React from 'react'
import { ContactAnimateWrap } from '../Components/AnimateWrap'
import Link from 'next/link'
import Button from '../Components/button/Button'
function Contact() {
    return (

        <section>
            <header className='pt-40 pb-20 relative'>
                <span className='w-full bg-[url(/bg.jpg)] bg-center bg-cover absolute inset-0 -z-10'></span>
                <span className='w-full bg-gradient-to-b from-backgroundColorDark via-backgroundColorDark/90 to-backgroundColorDark absolute inset-0 z-0'></span>

                <div className='relative z-20'>
                    <h2 className='text-[--Secondary-Color] xl:text-3xl text-2xl w-fit m-auto z-20 relative border-b border-white'>
                        Contact Us
                    </h2>
                    <div className='flex w-fit m-auto gap-4 text-gray-400 z-20 relative mt-4'>
                        <Link href={'/'} className='hover:text-white'>Home</Link>
                        <h2>/</h2>
                        <h2>Contact</h2>
                    </div>
                </div>
            </header>

            <main className="min-h-screen py-20 px-4 relative">
                <span className='w-full bg-[url(/Images/bg2.jpg)] bg-center bg-cover absolute inset-0 -z-10'></span>
                <span className='w-full bg-gradient-to-b from-backgroundColorDark/75 via-backgroundColorDark/75 to-backgroundColorDark/75 absolute inset-0 z-0'></span>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                        <p className="text-gray-300">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
                    </div>

                    <form action="https://formspree.io/f/mpzvpeod" method="POST"
                        className="bg-transparent backdrop-blur-sm p-8   border-2 border-primary">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Name</label>
                                <input type="text" name="name" required
                                    className="w-full px-4 py-2   bg-white border-2 border-primary text-black focus:outline-none "
                                    placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Email</label>
                                <input type="email" name="email" required
                                    className="w-full px-4 py-2   bg-white border-2 border-primary text-black focus:outline-none "
                                    placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-white text-sm font-medium mb-2">Subject</label>
                            <input type="text" name="subject" required
                                className="w-full px-4 py-2   bg-white border-2 border-primary text-black focus:outline-none "
                                placeholder="How can we help?" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-white text-sm font-medium mb-2">Message</label>
                            <textarea name="message" rows={6} required
                                className="w-full px-4 py-2   bg-white border-2 border-primary text-black focus:outline-none "
                                placeholder="Your message here..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 active:scale-95  transition-colors">
                            Send Message
                        </button>
                    </form>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6   border-2 border-primary hover:bg-primary/20 transition-colors">
                            <div className="text-[--Secondary-Color] text-2xl mb-3">📍</div>
                            <h3 className="text-white font-medium mb-2">Our Location</h3>
                            <p className="text-gray-400">Karachi, Pakistan</p>
                        </div>
                        <div className="text-center p-6   border-2 border-primary hover:bg-primary/20 transition-colors">
                            <div className="text-[--Secondary-Color] text-2xl mb-3">📧</div>
                            <h3 className="text-white font-medium mb-2">Email Us</h3>
                            <p className="text-gray-400">asharmeraj55@gmail.com</p>
                        </div>
                        <div className="text-center p-6   border-2 border-primary hover:bg-primary/20 transition-colors">
                            <div className="text-[--Secondary-Color] text-2xl mb-3">📞</div>
                            <h3 className="text-white font-medium mb-2">Call Us</h3>
                            <p className="text-gray-400">+92 312 2886730</p>
                        </div>
                    </div>
                </div>

            </main>
        </section>
    )
}

export default Contact