import React from 'react';
import img1 from '../assets/directors/director1.jpeg';
import img2 from '../assets/directors/director2.jpeg';
import img3 from '../assets/directors/director3.jpeg';

export const directors = [
    {
        directorName: "Nihmath Ali",
        directorPosition: "Founder & Proprietor of Fashion Choice",
        directorImage: img1,
        bio: "With a passion for timeless elegance and modern style, Nihmath Ali founded Fashion Choice to offer high-quality, sustainable fashion. He is dedicated to creating designs that empower individuals with confidence, blending innovation with classic craftsmanship to inspire beauty in every collection."
    },
    {
        directorName: "Asjad Ahamed",
        directorPosition: "Creative Director of Fashion Choice",
        directorImage: img2, 
        bio: "As the creative force behind Fashion Choice, Asjad Ahamed blends artistry and vision in every collection. He merges contemporary trends with timeless elegance, ensuring each piece reflects the brand's commitment to craftsmanship and innovation. Passionate about inspiring confidence, Asjad leads with an eye for detail and a strong commitment to sustainability"
    },
    {
        directorName: "Mohamed Hubail",
        directorPosition: "Marketing Director of Fashion Choice",
        directorImage: img3,
        bio: "Mohamed Hubail drives Fashion Choice's marketing strategies by blending creativity with analytics to enhance the brand’s presence. With expertise in digital marketing, he creates compelling campaigns that engage fashion enthusiasts. Committed to building authentic connections and showcasing the brand's dedication to quality and sustainability, Mohamed leverages innovative outreach and storytelling to inspire confidence and individuality in every wearer"
    }
];

const Directors = () => {
    return (
        <div className='py-8 sm:mx-auto mx-4 sm:w-[90%]'>
            {/* Title */}
            <div  className="text-center">
                <h1 className="font-cursiveFont sm:text-5xl text-4xl">
                    Meet the Visionaries Behind Fashion Choice
                </h1>
                <p className="hidden sm:block font-headingFont mt-2 sm:text-base text-sm">
                    Our creative directors blend innovation and tradition to bring you timeless, elegant designs that inspire confidence and celebrate individuality.
                </p>
            </div>

            {/* Display Directors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {directors.map((item, index) => (
                    <div key={index} className="flex flex-col p-4 bg-slate-50 rounded-xl overflow-hidden">
                    <div className='flex gap-4 items-center'>
                        <img className='rounded-full p-1 border-2 border-black w-20 h-20 object-cover ' src={item.directorImage} alt="" />
                        <div>
                            <p className='text-lg font-semibold'>{item.directorName}</p>
                            <p className='text-gray-500 text-sm'>{item.directorPosition}</p>
                        </div>
                        
                    </div>
                    <div className='mt-4'>
                            <p className='text-sm italic text-gray-600'>{item.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Directors;
