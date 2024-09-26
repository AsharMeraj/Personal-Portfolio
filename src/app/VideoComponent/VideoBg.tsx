'use client'
import React, { useState } from 'react';
import Video from 'next-video';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/router';

const VideoBg = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleCanPlay = () => {
    setIsLoading(false); // Video is ready to play, hide loading UI
  };

  return (
    <div>
      {isLoading &&
        <div className='w-full h-screen top-0 overflow-y-hidden fixed z-50 flex items-center justify-center bg-black '>
          <ClipLoader size={100} color="#ff3e3e" />
        </div>
      }

      <div className='w-full h-full absolute -z-20 top-0'>
        <div className='absolute w-full h-full top-0 left-0 right-0 object z-0 bg-black/30'></div>
        <Video
          autoPlay
          muted
          loop
          playsInline  // Ensures inline playback without fullscreen or controls
          paused={false}
          controls={false}
          className='fixed scale-x-[-1] -z-10 top-0 left-0 right-0 w-full h-full  object-cover object'
          src="/Videos/Video.mp4"
          onCanPlay={handleCanPlay} // Trigger when video can play
        />
      </div>
    </div>
  );
};

export default VideoBg;
