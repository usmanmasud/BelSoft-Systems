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
                <h2 className="text-[40px] font-bold text-left text-[#00B574] mb-4">My Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {works.map((project, index) => (
                        <div key={index} className="pb-4 flex flex-col">
                            <img src={project.image} alt={project.title} className="w-full  object-cover h-[330px]" />
                            <div className="flex justify-between items-center mt-4">
                                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                                <button className="bg-[rgba(0,181,116,1)] text-white font-bold py-2 px-4">
                                    Case Study
                                </button>
                            </div>
                            <p className="text-lg text-gray-600">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyWorkSection;