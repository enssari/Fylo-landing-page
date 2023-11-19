import React from 'react';
import files from '../assets/illustration-intro.png';
import curve from '../assets/bg-curvy-mobile.svg';

export const Header = () => {
  return (
    <div className='m-auto w-[29.8rem] sm:w-[34.4rem] md:w-[39.4rem] xl:w-[43rem] 2xl:w-[50rem] relative z-[1000]' id='header-container'>
        <div className="flex flex-col items-center" id="header-content">
            <div className="p-10" id="header-img">
                <img src={files} alt="files" className='xl:w-[40rem] 2xl:w-[45rem]'/>
            </div>
            <div className="flex flex-col text-center items-center w-[29rem] lg:w-[37rem] m-auto 2xl:w-[45rem]" id="header-text">
                <h1 className='text-white font-bold px-[3rem] lg:text-[2.1rem] xl:text-[2.5rem]'>
                    All your files in one secure location, accessible anywhere.
                </h1>

                <p className='text-white leading-relaxed font-sans px-[3rem] lg:text-[1rem] lg:w-[31rem]'>
                    Fylo stores all your most important files in one secure location.
                    Access them wherever you need, share and collaborate with friends
                    family, and co-workers
                </p>
            </div>

            <div className="mt-10" id="header-button">
                <button className='bg-gradient-to-r from-lighter-cyan to-cyan
                text-white font-medium rounded-full w-[15rem] h-[3rem] font-sans
                hover:from-lighter-cyan hover:to-lighter-cyan hover:animate-pulse'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}
