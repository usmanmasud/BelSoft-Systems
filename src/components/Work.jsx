import React from 'react';

const MyWorkSection = () => {
    const works = [
        { title: 'Project Name', description: 'Description (i.e Nike Photoshoot)', image: 'public/project1.jfif' },
        { title: 'Project Name', description: 'Description (i.e App UI Design)', image: 'public/project2.jfif' },
        { title: 'Project Name', description: 'Description', image: 'public/project3.jfif' },
        { title: 'Project Name', description: 'Description', image: 'public/project4.jfif' },
        { title: 'Project Name', description: 'Description', image: 'public/project5.jfif' },
        { title: 'Project Name', description: 'Description', image: 'public/project6.jfif' },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-[rgba(0,181,116,1)]">
                    My Work
                </h2>

                {/* Grid for Works */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{work.title}</h3>
                                    <button className="bg-[rgba(0,181,116,1)] text-white font-bold py-1 px-3 rounded">
                                        Case Study
                                    </button>
                                </div>

                                <p className="text-gray-600">{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyWorkSection;
