import React from 'react';

const IntroSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto  md:flex md:items-center sm:p-8">
                {/* Text Section */}
                <div className="md:w-1/2 p-0 m-0">
                    <div className='w-[592px] h-[291px]'>
                        <h2 className="md:text-[100px] lg:text-[120px] text-[70px] font-bold text-[#000000] mb-[-55px]">Hey there,
                        </h2>
                        <h2 className='md:text-[100px] lg:text-[120px] text-[70px] leading-[150px] font-bold text-[#00B574]'>I'm Terry</h2>
                    </div>

                    <p className="text-lg text-[#474747] mb-2 lg:w-[454px] h-[112px]">
                        I craft intuitive designs that connect with users and drive results. As a multidisciplinary designer, I bring ideas to life through a perfect blend of creativity, strategy, and user-centered design.
                        Lets talk
                    </p>
                    <button className="mt-6 px-[25px] py-[10px] bg-[#00B574] text-[#FFFFFF] font-bold hover:bg-blue-500 transition duration-300">
                        Lets Talk
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:mt-[-240px] lg:mt-[-240px] ">
                    <img
                        src="/person.png"
                        alt="image"
                        className="lg:w-[9000px] md:w-[9000px] lg:h-[600px] md:h-[600px] sm:rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default IntroSection;