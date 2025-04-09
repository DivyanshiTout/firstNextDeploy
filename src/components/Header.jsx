'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = ({ openModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpened] = useState(false);

    const mobileView = () => {
        setIsOpened((prev) => !prev);
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md dark:bg-gray-900 rounded w-half' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">What'sNext</span>
                </a>

                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={mobileView}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                <div className="hidden w-full md:flex md:w-auto justify-center mx-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li><a href="#" className="block py-2 px-3 bg-purple-700 md:bg-transparent md:text-purple-700 dark:text-white md:dark:text-purple-500">Home</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-purple-700 dark:text-white">About</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-purple-700 dark:text-white">Services</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-purple-700 dark:text-white">Pricing</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-purple-700 dark:text-white">Contact</a></li>
                    </ul>
                </div>
                {isOpen && (
                    <div className="md:hidden md-visible w-full md:flex md:w-auto justify-center mx-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li><a href="#" className="block py-2 px-3 text-white bg-purple-700 md:bg-transparent md:text-purple-700 dark:text-white md:dark:text-purple-500">Home</a></li>
                            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-purple-700 dark:text-white">About</a></li>
                            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-purple-700 dark:text-white">Services</a></li>
                            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-purple-700 dark:text-white">Pricing</a></li>
                            <li><a href="#" className="block py-2 px-3 text-gray-900 hover:text-purple-700 dark:text-white">Contact</a></li>
                        </ul>
                    </div>
                )}

                <button className="hidden md:flex md:w-auto justify-end p-2 border rounded hover:bg-purple-400 text-white font-bold transition bg-purple-500 border-none" onClick={ openModal }>Start free trial</button>
            </div>
        </nav>
    );
};

export default Header;
