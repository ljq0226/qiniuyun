'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      const calculatedProgress = (currentTime / duration) * 100;
      setProgress(calculatedProgress);
    };

    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, []);
  const play = () => {
    console.log('play')
    togglePlay()
  }
  const pause = () => {
    console.log(' pause',)
    togglePlay()
  }

  const togglePlay = () => {
    if (isPlaying) {
      videoRef?.current?.pause();
    } else {
      videoRef?.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      Discover
      {/* <video src={'/video/v1.mp4'} className="w-[200px]"  controls  loop muted></video> */}
      {/* <video src={'/video/v2.mp4'} className="w-[200px]"  controls  loop muted></video> */}
      {/* <video src={'http://s34q2o4v2.hd-bkt.clouddn.com/v2.mp4'} className="w-[200px]"  controls  loop muted></video> */}

      <div className='w-[710px]'
      >
        {
          <div className='relative'>
            <div className='w-[710px]'>
              <video
                ref={videoRef}
                className='h-[400px] relative'
                style={{ zIndex: isPlaying ? 100 : -100 }}
              >
                {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> */}
                <source src="/video/v3.mp4" type="video/mp4" />
              </video>
              <div className="top-0 left-0 z-[111] absolute w-[100%]">
                <div className='absolute top-0 left-0 bg-transparent w-full bg-blue-400 h-4'>
                </div>
                <div
                  className='bg-[hsla(0,0%,100%,.4)] h-4 absolute top-0 left-0'
                  style={{ width: `${progress}%` }}
                >
                </div>
                <div
                  className='w-4 h-4 absolute top-0  rounded-full bg-[rgba(255,94,94,.304)] border-[0.5px] border-solid
                   -translate-x-1/2'
                  style={{ left: `${progress}%` }}
                >

                </div>
              </div>
            </div>
            <Image
              style={{ zIndex: !isPlaying ? 100 : -100 }}
              className='absolute top-0 left-0' src={'/img/img11.png'} alt='' height={400} width={710} />
            <div
              onMouseEnter={() => play()}
              onMouseLeave={() => pause()}
              onClick={(e) => {
                console.log(' e click', e)
                play()
              }}
              className='absolute top-0 left-0 z-[111] w-[710px] h-[400px] bg-transparent'>


            </div>
          </div>
        }

        <div>

        </div>

      </div>
    </div>
  )
}
export default Page
