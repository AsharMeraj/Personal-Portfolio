import React from 'react'
import { ContactAnimateWrap } from '../Components/AnimateWrap'
import { Button } from '@/components/ui/button'

function Contact() {
    return (
            <ContactAnimateWrap>
                <section className="h-full  flex items-center justify-center z-20 relative py-[2rem] md:py-[6rem]">
                    <div className="mx-auto  max-w-screen-md w-[40rem]">
                        <h2 className="text-2xl font-bold text-[--Secondary-Color] w-fit m-auto">Contact</h2>
                        <p className="mb-4 max-[840px]:mb-2 mx-[1.5rem] lg:mb-8 mt-4 max-[840px]:mt-2 font-light text-center text-white sm:text-[1.1rem] max-[840px]:text-[0.9rem]">Need details about our Business plan? Let us know.</p>
                        <form action="https://formspree.io/f/mpzvpeod"
                            method="POST" className="space-y-8 max-[840px]:space-y-4 mx-[1.5rem]">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-[1rem] font-medium max-[840px]:font-bold text-white max-[840px]:text-[0.9rem]">Your email</label>
                                <input type="email" id="email" name='email' className="font-medium  rounded-lg focus:outline-none block w-full p-2.5 placeholder:text-[0.85rem] placeholder:text-[rgb(60,60,60)] border-2 border-[rgb(30,0,0)]" placeholder="abc123@gmail.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-[1rem] font-medium text-white max-[840px]:font-bold max-[840px]:text-[0.9rem]">Subject</label>
                                <input type="text" id="subject" name='subject' className="block p-2.5 w-full font-medium  text-black rounded-lg shadow-sm focus:outline-none dark:bg-gray-700  placeholder:text-[0.85rem] placeholder:text-[rgb(60,60,60)] border-2 border-[rgb(30,0,0)]" placeholder="Let us know how we can help you" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-[1rem] font-medium text-white max-[840px]:font-bold max-[840px]:text-[0.9rem]">Your message</label>
                                <textarea id="message" name='message' rows={6} className="max-[840px]:h-[9rem] block p-2.5 w-full font-medium  text-black rounded-lg shadow-sm focus:outline-none dark:bg-gray-700  placeholder:text-[0.85rem] placeholder:text-[rgb(60,60,60)] border-2 border-[rgb(30,0,0)]" placeholder="Leave a comment..."></textarea>
                            </div>
                           <Button>Send Message</Button>
                        </form>
                    </div>
                </section>
            </ContactAnimateWrap>
    )
}

export default Contact