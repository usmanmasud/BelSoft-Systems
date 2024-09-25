import React from 'react';

const IntroSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6 md:flex md:items-center">
                {/* Text Section */}
                <div className="md:w-1/2">
                <div className='w-[592px] h-[291px]'>
                <h2 className="text-[120px] font-bold text-[#000000] mb-[-55px]">Hey there,
                </h2>
                <h2 className='text-[120px] font-bold text-[#00B574]'>I'm Terry</h2>
                </div>
                    
                    <p className="text-lg text-[#474747] w-[454px] h-[112px]">
                        I craft intuitive designs that connect with users and drive results. As a multidisciplinary designer, I bring ideas to life through a perfect blend of creativity, strategy, and user-centered design.
                        Lets talk
                    </p>
                    <button className="mt-6 px-[25px] py-[10px] bg-[#00B574] text-[#FFFFFF] font-bold hover:bg-blue-500 transition duration-300">
                        Lets Talk
                    </button>
                </div>

                {/* Image Section */}
                <div className="mt-[-240px]">
                    <img
                        src="/person.png"
                        alt="image"
                        className="w-[9000px] h-[600px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
