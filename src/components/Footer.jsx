import React, { useState } from "react";
import logo from "../assets/logo.svg";
import location from "../assets/icon-location.svg";
import call from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const [input, setInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const checkValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setIsValid(emailRegex.test(input));

    setIsEmpty(input.trim() === "");
  };

  return (
    <div id="footer-container">
      <div
        className="flex flex-col justify-center items-center bg-footerblue lg:px-6"
        id="footer-content"
      >
        <div
          className="flex flex-col items-center space-y-8 pb-[3rem] bg-darkblue
                rounded-xl shadow-xl w-[27rem] border-solid border-[1px] border-heroblue
                mt-[-14rem] z-[1001] lg:w-[55rem]"
          id="early-access-section"
        >
          <div className="text-center p-5 px-[3rem]" id="text-wrapper">
            <h1 className="text-white font-bold font-sans text-[1.5rem] xl:text-[2rem]">
              Get early access today
            </h1>

            <p className="font-sans text-[#dfdede] leading-relaxed 2xl:text-[1.2rem]">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>

          <div
            className={`flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-9
          ${!isValid ? "space-y-[.8rem] lg:space-x-[-5.2rem]" : ""} ${
              isEmpty ? "lg:space-x-[-2.9rem]" : ""
            }`}
            id="input-and-button"
          >
            <input
              onBlur={checkValid}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="w-[25rem] h-[4rem] rounded-full
                        pl-8 font-sans text-[.9rem] focus:outline-none
                        lg:w-[30rem]"
              placeholder="email@example.com"
            />

            {!isValid && !isEmpty ? (
              <h4
                className="text-lightred font-sans text-[.8rem] relative top-[-.5rem] pl-8
              font-bold lg:top-[4.3rem] lg:pl-0 lg:left-[-22.7rem]"
              >
                Please enter a valid email address
              </h4>
            ) : (
              isEmpty && (
                <h4
                  className="text-lightred font-sans text-[.8rem] relative top-[-.5rem] pl-8
              font-bold lg:top-[4.3rem] lg:pl-0 lg:left-[-25rem]"
                >
                  Please enter an email
                </h4>
              )
            )}

            <button
              className="text-white font-sans font-bold bg-gradient-to-r
                        from-lighter-cyan to-cyan w-[25rem] h-[4rem] rounded-full text-[1.1rem]
                        hover:animate-pulse hover:from-lighter-cyan hover:to-lighter-cyan
                        lg:w-[18rem]"
            >
              Get Started For Free
            </button>
          </div>
        </div>

        <div className="pb-[3rem]" id="footer-section">
          <div
            className="flex items-start flex-col pt-[5rem] pl-[3.7rem] pb-[1rem] lg:pl-[2rem]"
            id="logo"
          >
            <img src={logo} alt="logo" className="xl:w-[13rem]" />
          </div>

          <div
            className="lg:flex lg:flex-row items-center justify-center align-middle 2xl:space-x-[10rem]"
            id="under-logo-content"
          >
            <div
              className="flex flex-col space-y-10 text-[#cac9c9] p-10
                    font-sans items-center lg:flex-row lg:space-x-10
                    lg:space-y-0 lg:mt-[-4.3rem] xl:mt-[-6rem] xl:space-x-[4rem]"
              id="contact-info"
            >
              <div
                className="lg:flex lg:flex-row lg:space-x-3 flex flex-row"
                id="left-side-contact"
              >
                <div className="flex flex-row space-x-6" id="location">
                  <img
                    src={location}
                    alt="location"
                    className="w-[1.2rem] h-[1.4rem] mt-3"
                  />
                </div>

                <p
                  className="leading-relaxed w-[21.3rem] md:w-[23rem] lg:w-[19rem] xl:w-[25rem] 2xl:w-[22rem] m-auto
                pl-7"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  saepe corporis sed impedit ipsam minima in quae quis molestias
                </p>
              </div>

              <div
                className="lg:space-y-5 relative lg:top-[-1.1rem] xl:top-[-.3rem] 2xl:pl-5
              space-y-4"
                id="right-side-contact"
              >
                <div
                  className="flex flex-row space-x-6 w-[22.3rem] md:w-[24rem] lg:w-[11rem]"
                  id="phone"
                >
                  <img src={call} alt="call" className="h-[1rem] mt-1" />

                  <p className="leading-relaxed">+1-543-123-4567</p>
                </div>

                <div
                  className="flex flex-row space-x-6 w-[22.3rem] lg:w-[11rem]"
                  id="email"
                >
                  <img src={email} alt="email" />

                  <p>example@fylo.com</p>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col space-y-12 text-start items-start p-10 
              pb-[5rem] lg:flex-row lg:space-y-0 lg:space-x-5 xl:space-x-10
              2xl:space-x-[3rem]"
              id="linked-items"
            >
              <div className="" id="row-1">
                <ul>
                  <li
                    className="text-[#cac9c9] font-sans space-y-5 flex flex-col items-start
                  lg:w-[5rem]"
                  >
                    <button className="hover:text-white">About Us</button>
                    <button className="hover:text-white">Jobs</button>
                    <button className="hover:text-white">Press</button>
                    <button className="hover:text-white">Blog</button>
                  </li>
                </ul>
              </div>

              <div className="" id="row-2">
                <ul>
                  <li
                    className="text-[#cac9c9] font-sans flex flex-col space-y-5 items-start
                  lg:w-[5rem]"
                  >
                    <button className="hover:text-white">Contact Us</button>
                    <button className="hover:text-white">Terms</button>
                    <button className="hover:text-white">Privacy</button>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="flex items-center justify-center space-x-3 lg:mt-[-8.5rem] xl:space-x-5
              2xl:relative 2xl:left-[-4rem]"
              id="social-links"
            >
              <button
                className="rounded-full border-solid border-[1px] w-[1.8rem]
            h-[1.8rem] flex items-center flex-col justify-center text-white
            hover:text-lighter-cyan hover:border-lighter-cyan
            hover:animate-bounce"
                id="face"
              >
                <FaFacebookF size={14} />
              </button>

              <button
                className="rounded-full border-solid border-[1px] w-[1.8rem]
            h-[1.8rem] flex items-center flex-col justify-center text-white
            hover:text-lighter-cyan hover:border-lighter-cyan 
            hover:animate-bounce"
                id="twit"
              >
                <FaTwitter size={14} />
              </button>

              <button
                className="rounded-full border-solid border-[1px] w-[1.8rem]
            h-[1.8rem] flex items-center flex-col justify-center text-white
            hover:text-lighter-cyan hover:border-lighter-cyan 
            hover:animate-bounce"
                id="insta"
              >
                <FaInstagram size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
