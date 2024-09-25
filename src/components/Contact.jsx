import React from 'react';
import { FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa';

const ReachOutSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-[rgba(0,181,116,1)] mb-12">Reach Out</h2>

                <div className="flex flex-col lg:flex-row justify-between ">
                    {/* Left Side: Form and Social Icons */}
                    <div className="w-3/6">
                        <p className="text-lg text-gray-600 mb-6">
                            Let’s create something extraordinary together. Whether you have a project in mind or just want to chat, feel free to reach out!
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-6 mb-8">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-3xl text-[rgba(0,181,116,1)] hover:text-gray-800" />
                            </a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                                <FaDribbble className="text-3xl text-[rgba(0,181,116,1)] hover:text-gray-800" />
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                                <FaBehance className="text-3xl text-[rgba(0,181,116,1)] hover:text-gray-800" />
                            </a>
                        </div>

                        {/* Reach Out Form */}
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button className=" bg-[rgba(0,181,116,1)] text-whiterounded-lg font-bold hover:bg-blue-500 transition duration-300 w-38 px-9 py-2.5">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Thank You Message */}
                    <div className=" flex justify-center relative">
                        <p className="text-9xl font-bold text-gray-800 relative">Thank</p>
                        <span className="absolute left-[40%] top-[50%] text-9xl font-bold text-[rgba(0,181,116,1)]">
                            YOU.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReachOutSection;
