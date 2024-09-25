import React from 'react';
import { FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa';

const ReachOutSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-[rgba(0,181,116,1)] mb-12">Reach Out</h2>

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Left Side: Form and Social Icons */}
                    <div className="lg:w-1/2">
                        <p className="text-lg text-gray-600 mb-6">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
                            <button className="w-full bg-[rgba(0,181,116,1)] text-white py-2 rounded-lg font-bold hover:bg-blue-500 transition duration-300">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Thank You Message */}
                    <div className="lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-gray-800">Thank</h3>
                        <h3 className="text-3xl font-bold text-[rgba(0,181,116,1)] ml-12">You.</h3>
                        <p className="text-lg text-gray-600 mt-4">
                            I appreciate you reaching out and look forward to connecting.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReachOutSection;
