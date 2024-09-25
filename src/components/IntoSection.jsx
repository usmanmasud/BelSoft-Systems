import React from 'react';

const IntroSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6 md:flex md:items-center">
                {/* Text Section */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold text-[rgba(0,181,116,1)]">Hey there,
                        I'm Terry</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        I craft intuitive designs that connect with users and drive results. As a multidisciplinary designer, I bring ideas to life through a perfect blend of creativity, strategy, and user-centered design.
                        Lets talk
                    </p>
                    <button className="mt-6 px-6 py-2 bg-[rgba(0,181,116,1)] text-white font-bold rounded hover:bg-blue-500 transition duration-300">
                        Lets Talk
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
                    <img
                        src="public/person.png"
                        alt="image"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
