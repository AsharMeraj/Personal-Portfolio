import React from 'react'

function VideoBg() {
    return (
        <div className='w-full h-full'>
            <div className='absolute w-full h-full top-0 left-0 right-0 bg-gradient-to-b object from-transparent to-black/5 z-0'></div>
            <video className='absolute -z-10 top-0 left-0 right-0 w-full h-full object-cover object' autoPlay muted loop >
                <source src="/Videos/video4.mp4"  type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoBg