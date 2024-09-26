import React from 'react';
import Thanks from './Thanks';
import Contact1 from './Contact1';

const ReachOutSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-[40px] w-[211px] h-[42px] font-Poppins font-bold text-left text-[#00B574] mb-12">Reach Out</h2>

                <div className="flex  md:flex-row lg:flex-row flex-col gap-12 justify-between">
                    <Contact1 />
                    <Thanks />
                </div>
            </div>
        </section>
    );
};

export default ReachOutSection;