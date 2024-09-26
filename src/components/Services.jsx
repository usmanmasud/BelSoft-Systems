import React from 'react';
import { services } from './services';

const ServicesSection = () => {

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-left  p-[30px] text-[rgba(0,181,116,1)]">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-90">
                    {services.map((service, index) => (
                        <div key={index} className="flex m-10 items-centerp-4">
                            < img src={service.image} alt={service.title} className={`w-20 h-20 mr-4 bg-${service.bg}`} loading="lazy" />

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};
export default ServicesSection;