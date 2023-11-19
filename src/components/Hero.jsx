import React, { useState } from 'react';
import curve from '../assets/bg-curvy-mobile.svg';
import Data from './features.json';
import access from '../assets/icon-access-anywhere.svg';
import security from '../assets/icon-security.svg';
import collab from '../assets/icon-collaboration.svg';
import store from '../assets/icon-any-file.svg';
import stayProductive from '../assets/illustration-stay-productive.png';
import arrow from '../assets/icon-arrow.svg';
import arrowHover from '../assets/icon-arrow-hover.svg';
import commentData from './comments.json';
import satish from '../assets/profile-1.jpg';
import bruce from '../assets/profile-2.jpg';
import iva from '../assets/profile-3.jpg';

export const Hero = () => {

  const [textHovered, setTextHovered] = useState(false);

  const featureImage = [access, security, collab, store];

  const profiles = [satish, bruce, iva];

  const features = Data.map(data => {
    return (
      <div className='flex flex-col items-center p-8 xl:pb-[3rem] xl:relative xl:top-[-7rem]
      ' id={`feature-${data.id}`}>
        <div id={`${data.name}-img`}>
          <img src={featureImage[data.id]} alt={data.name} className='md:w-[7rem] lg:w-[5rem]
          xl:w-[9rem]'/>
        </div>

        <div className="text-center w-[25rem] sm:w-[23rem] lg:w-[18rem] xl:w-[25rem] 2xl:text-[1.05rem]
        xl:text-[.9rem] 2xl:w-[30rem]" id={`${data.name}-text-wrapper`}>
          <h1 className='font-bold text-white'>{data.title}</h1>

          <p className='font-sans leading-relaxed text-[#cac9c9]'>{data.text}</p>
        </div>
      </div>
    );
  });

  const comments = commentData.map(info => {
    return (
      <div className='flex flex-col space-y-[2rem] shadow-sm shadow-shadowblue p-7 rounded-lg sm:w-[23rem]
      lg:w-[40rem] xl:w-[60rem] border-solid border-[1px] border-shadowblue bg-shadowblue' id='comments'>
        <div className="text-start" id="comment">
          <p className='font-sans text-[.9rem] leading-loose text-[#dfdede]'>
            {info.text}
          </p>
        </div>

        <div className="flex flex-row" id="profile-section">
          <div id={`profile-pic-${info.id}`} className='flex items-center'>
            <img src={profiles[info.id]} alt={info.id} className='w-[3rem] rounded-full mt-1' />
          </div>

          <div className="ml-3 text-white" id="user-info-text">
            <h1 className='font-sans font-bold text-[1rem] tracking-wide'>{info.name}</h1>

            <p className='font-sans font-medium text-[#cac9c9] text-[.7rem] mt-[-.4rem]'>{info.job}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='flex flex-col z-[1] relative mt-[-27rem] sm:mt-[-24rem] lg:mt-[-15rem] 2xl:mt-[-13rem]
    ' id='container'>
      <img src={curve} alt="curve" className='w-full' />

      <div className="bg-heroblue flex flex-col items-center justify-center align-middle
      space-y-[4rem] pt-[23rem] sm:pt-[15rem] md:pt-[12rem] lg:pt-[0rem] pb-[20rem]
      lg:space-y-[0rem]"
        id='hero-content'>
        <div className='lg:grid lg:grid-cols-2 2xl:space-x-[5rem]' id='features-section'>
          {features}
        </div>

        <div className="flex flex-col lg:flex-row p-[2.5rem] pt-[6.5rem] lg:space-x-[4rem] lg:pt-[5rem]
        xl:pt-[0rem] 2xl:space-x-[7rem]" id="stay-productive-section">
          <div className="flex items-center flex-col justify-center" id="stay-productive-bg">
            <img src={stayProductive} alt="stayProductive" className='w-[20rem] lg:w-[26rem]
            sm:w-[26rem] xl:w-[35rem] 2xl:w-[42rem] md:w-[32rem]'/>
          </div>

          <div className="text-white pt-[3rem] space-y-5 w-[24rem] sm:m-auto lg:pt-[1rem] xl:text-[1.1rem]
          xl:w-[30rem] xl:pt-[2rem] 2xl:w-[40rem] 2xl:text-[1.2rem] 2xl:space-y-10 lg:w-[30rem] sm:w-[28rem]
          " id="text-and-button-wrapper">
            <h1 className='font-bold'>Stay productive, wherever you are</h1>

            <div className="flex flex-col space-y-5 text-[#cac9c9] font-sans" id="paragraphs">
              <p>
                Never let location be an issue when accessing your files. Fylo has you covered for
                all of your file storage needs.
              </p>

              <p>
                Securely share files and folders with friends, family and colleagues for live collaboration.
                No email attachments required.
              </p>
            </div>

            <div className="border-b-solid border-b-2 border-b-lighter-cyan w-[9.9rem] 2xl:w-[11rem] pb-1
            hover:border-b-[#cac9c9] hover:cursor-pointer"
              id="stay-productive-button"
              onMouseEnter={() => setTextHovered(true)}
              onMouseLeave={() => setTextHovered(false)}>
              <button className='text-lighter-cyan flex flex-row items-center text-[.9rem] font-sans 2xl:text-[1rem]'>
                <span className={`${textHovered ? 'text-[#cac9c9]' : 'text-lighter-cyan'}`}>
                  See how Fylo works
                </span>

                {!textHovered ? (
                  <img src={arrow} alt="arrow" className='ml-2 w-[1.5rem]' />
                ) : (
                  <img src={arrowHover} alt="arrowHover" className='ml-2 w-[1.5rem]' />
                )}

              </button>
            </div>
          </div>
        </div>

        <span className='text-lighter-cyan text-[4rem] relative top-[7.5rem] left-[-8.8rem] lg:top-[5.5rem]
        lg:left-[-28.5rem] xl:left-[-34.5rem] 2xl:left-[-41rem]'>
          ❛❛
        </span>
        
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-8 px-[1.1rem] w-[23rem] sm:w-[25.3rem]
        lg:w-[63rem] lg:pt-[2rem] xl:w-[75rem] xl:space-x-[2rem] 2xl:w-[88rem] 2xl:space-x-[4rem] lg:space-x-[1rem]
        pb-[3rem] " id="comments-section">
          {comments}
        </div>
      </div>


    </div>
  );
};
