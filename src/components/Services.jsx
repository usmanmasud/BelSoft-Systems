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
                <h2 className="text-[40px] font-bold text-left p-[20px] text-[#00B574]">My Services</h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="w-[66px] h-[290px] flex items-center py-[64px] px-[42px]">
                            {/* Service Image */}
                            <img src={service.image} alt={service.title} className="w-[79.25px] h-[80.40px] mr-4" />
                            {/* Service Title and Description */}
                            <div>
                                <h3 className="text-[27px] font-semibold text-[#000000]">{service.title}</h3>
                                <p className="text-[#474747]  w-[455.04px] h-[108px] font-[20px] ">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
