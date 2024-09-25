import React, { useState } from 'react';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}

                    <a href="#">
                        <Logo />
                    </a>


                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-4 ">
                        <li className='font-bold'><a href="#" className="text-black hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600">Services</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <a href="#" className="block text-sm px-2 py-4 text-gray-600 hover:bg-blue-50">Home</a>
                    <a href="#" className="block text-sm px-2 py-4 text-gray-600 hover:bg-blue-50">About</a>
                    <a href="#" className="block text-sm px-2 py-4 text-gray-600 hover:bg-blue-50">Services</a>
                    <a href="#" className="block text-sm px-2 py-4 text-gray-600 hover:bg-blue-50">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
