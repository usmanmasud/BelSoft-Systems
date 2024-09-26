import React from 'react';
import IntroText from './IntroText';
import IntroImage from './IntroImage';

const IntroSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto  md:flex md:items-center">
                <IntroText />
                <IntroImage />
            </div>
        </section>
    );
};

export default IntroSection;