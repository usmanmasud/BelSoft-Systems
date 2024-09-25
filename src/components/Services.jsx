import React from 'react';

const ServicesSection = () => {
    const services = [
        { title: 'Art Direction', description: 'I lead creative teams to execute cohesive visual concepts, overseeing the entire design process to ensure alignment with brand identity and project goal', image: '/artDirection.png' },
        { title: 'UI/UX Design', description: 'I design user-friendly interfaces that are both visually appealing and highly functional, focusing on enhancing the overall user experience through research, wireframing, and prototyping.', image: '/uiux.png' },
        { title: 'Visual Design', description: 'I craft compelling visuals that effectively communicate messages, focusing on branding, digital marketing, and web design to create visually striking and impactful designs.', image: '/visualdesign.png' },
        { title: 'Product Design', description: 'I create products that solve real-world problems, blending design and strategy throughout the product lifecycle to meet both user needs and business goals.', image: '/productdesign.png' },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-left  p-[30px] text-[rgba(0,181,116,1)]">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-90">
                    {services.map((service, index) => (
                        <div key={index} className="flex m-10 items-centerp-4">
                            <img src={service.image} alt={service.title} className="w-20 h-20 mr-4" />

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                                <p className="text-gray-600 w-[350px]">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ServicesSection;