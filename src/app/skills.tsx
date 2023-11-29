"use client"
import React from 'react';


export default function Skills(){
    const skills = [
    { name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg', percentage: 70 },
    { name: 'Tailwind CSS', logo: 'png-transparent-logo-html-html5.png', percentage: 90 },
    { name: 'ShadCn UI', logo: '1452px-CSS3_logo_and_wordmark.svg.png', percentage: 85 },
    { name: 'DaisyUI', logo: 'Bootstrap_logo.svg.png', percentage: 60 },
    { name: 'ReactJS', logo: 'javascript-logo-transparent-logo-javascript-images-3.png', percentage: 95 },
    { name: 'Sanity', logo: 'Typescript_logo_2020.svg.png', percentage: 75 },
    { name: 'PostgressSQL', logo: 'Tailwind_CSS_Logo.svg.png', percentage: 70 },
    { name: 'Typescript', logo: 'WordPress-logotype-simplified.png', percentage: 80 },
    
  ];

  return (
 

<div className='p-4'>
<h1 className='text-3xl uppercase font-medium text-center'>MY Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20 mb-10">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center hover:-translate-y-4 transition duration-700 ease-in-out  hover:scale-110">
            {/* <img src={skill.logo} alt={skill.name} className="w-20 h-20 object-contain mb-2" /> */}
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <div className="w-48 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <p className="mt-2">{`${skill.percentage}%`}</p>
          </div>
        ))}
      </div>
   </div>
  );
};
