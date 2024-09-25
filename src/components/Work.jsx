import React from 'react';

const MyWorkSection = () => {
    const works = [
        { title: 'Project Name', description: 'Description (i.e Nike Photoshoot)', image: '/project1.jfif' },
        { title: 'Project Name', description: 'Description (i.e App UI Design)', image: '/project2.jfif' },
        { title: 'Project Name', description: 'Description', image: '/project3.jfif' },
        { title: 'Project Name', description: 'Description', image: '/project4.jfif' },
        { title: 'Project Name', description: 'Description', image: '/project5.jfif' },
        { title: 'Project Name', description: 'Description', image: '/project6.jfif' },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-[40px] font-bold text-left text-[#00B574] mb-4">
                    My Work
                </h2>

                {/* Grid for Works */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <div key={index} className="overflow-hidden w-[404px] h-[416px] gap-[24px]">
                            <img src={work.image} alt={work.title} className="w-full h-48 object-cover h-[330px]" />

                            <div className="p-0">
                                <div className="flex justify-between items-center mb-2 mt-4">
                                    <h3 className="text-[20px] font-Poppins text-[#000000] mb-2">{work.title}</h3>
                                    <button className="bg-[#00B574] text-[#FFFFFF] w-[92px] h-[30px]">
                                        Case Study
                                    </button>
                                </div>

                                <p className="text-[#474747] text-[17px]">{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyWorkSection;