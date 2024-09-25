import React from 'react';
import { FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa';

const ReachOutSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-[40px] w-[211px] h-[42px] font-Poppins font-bold text-left text-[#00B574] mb-12">Reach Out</h2>

                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Left Side: Form and Social Icons */}
                    <div className="w-[598px] h-[325px]">
                        <p className="text-lg text-[#474747] mb-6 leading-6.5 font-Poppins w-[590px] h-[54px] text-lg">
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
                                    className="bg-[#FAFAFA] w-[520px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-[#FAFAFA] w-[520px] px-6 py-4 h-25  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button className=" bg-[rgba(0,181,116,1)] text-[#FFFFFF] font-bold hover:bg-blue-500 transition duration-300 w-38 px-9 py-2.5 h-14">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Thank You Message */}
                    <div className="flex justify-center relative w-[467px] h-[317px] p-0">
                        <p className="text-[100px] font-bold font-lato text-[#000000] relative w-[367px] p-0 m-0">Thank</p>
                        <span className="p-0 m-0 absolute left-[20%] font-lato top-[40%] text-[100px] w-[367px] font-bold text-[rgba(0,181,116,1)]">
                            YOU.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReachOutSection;
