import React from 'react';
import logo from '../assets/logo.svg';

export const Navbar = () => {
  return (
    <div className='flex flex-row justify-center'>
        <div id="navbar-content">
            <nav className='flex flex-row space-x-[5rem] py-10 xl:p-10 sm:space-x-[13rem]
            md:space-x-[18rem] lg:space-x-[35rem] xl:space-x-[47rem] 2xl:space-x-[60rem]'>
                <div className="flex items-center" id="left-side">
                    <button>
                        <img src={logo} alt="logo" className='w-[8rem] lg:w-[10rem]'/>
                    </button>
                </div>

                <div className="flex items-center" id="right-side">
                    <ul>
                        <li className='text-white flex flex-row space-x-8 lg:text-[1.1rem]
                        xl:space-x-12 2xl:text-[1.2rem]'>
                            <button className='hover:font-bold hover:underline'>
                                Features
                            </button>

                            <button className='hover:font-bold hover:underline'>
                                Team
                            </button>

                            <button className='hover:font-bold hover:underline'>
                                Sign In
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

