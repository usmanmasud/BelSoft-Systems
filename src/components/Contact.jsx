import React from 'react';
import { FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa';

const ReachOutSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-[40px] w-[211px] h-[42px] font-Poppins font-bold text-left text-[#00B574] mb-12">Reach Out</h2>

                <div className="flex  md:flex-row lg:flex-row flex-col gap-12 justify-between">
                    {/* Left Side: Form and Social Icons */}
                    <div className="h-[325px] lg:w-[50%]">
                        <p className=" text-[#474747] mb-6 leading-6.5 font-Poppins lg:w-[80%]text-lg">
                            Let's create something extraordinary together. Whether you have a project in mind or just want to chat, feel free to reach out!
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-6 mb-8">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-4xl text-[rgba(0,181,116,1)] hover:text-gray-800" />
                            </a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                                <FaDribbble className="text-4xl text-[rgba(0,181,116,1)] hover:text-gray-800" />
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                                <FaBehance className="text-4xl text-[rgba(0,181,116,1)] hover:text-gray-800" />
                            </a>
                        </div>

                        {/* Reach Out Form */}
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="bg-[#FAFAFA] lg:w-[520px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[100%]"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-[#FAFAFA] lg:w-[520px] px-6 py-4 h-25  focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[100%]"
                                />
                            </div>
                            <button onClick={(e) => {
                                e.preventDefault()
                                alert('')
                            }} className=" bg-[rgba(0,181,116,1)] text-[#FFFFFF] font-bold hover:bg-blue-500 transition duration-300 w-38 px-9 py-2.5 h-14">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Thank You Message */}
                    <div className="flex lg:justify-center md:justify-center md:relative lg:relative lg:w-[467px] md:w-[] md:h-[200px] h-[317px] p-0">
                        <p className="lg:text-[100px] md:text-[70px] font-bold font-lato text-[#000000] md:relative lg:relative lg:w-[367px] md:w-[367px] p-0 m-0 text-[50px]">Thank</p>
                        <span className="p-0 m-0 md:absolute lg:absolute md:left-[20%] lg:left-[20%] font-lato md:top-[40%] lg:top-[40%] text-[50px] lg:text-[100px] w-[367px] font-bold text-[rgba(0,181,116,1)] md:text-[70px]">
                            YOU.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReachOutSection;