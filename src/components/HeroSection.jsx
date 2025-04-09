'use client';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

const HeroSection = () => {
    return (
        <section className="pt-20 bg-white dark:bg-gray-900 ">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={2000}
                    showArrows={false}
                >
                    {/* Slide 1 */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        {/* Left text */}
                        <div className="w-full md:w-1/2 text-left">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Neutral and clean design for web based businesses
                            </h1>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold p-2 rounded mt-3">Try Now!</button>
                        </div>

                        {/* Right image */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src="/hero3.webp"
                                alt="Slide 1"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="w-full md:w-1/2 text-left">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                               Elegant & Responsive Layout
                            </h1>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Design your website with ease and style using our modern templates built with flexibility in mind.
                            </p>
                            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold p-2 rounded mt-3">Try Now!</button>

                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                        <Image src="/hero2.webp" alt="Solar" width={500} height={300} />
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default HeroSection;
