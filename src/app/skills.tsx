"use client"
import React from 'react';


export default function Skills(){
    const Tskills = [
      { name: 'Typescript', percentage: 70 },      
    { name: 'Next.js', percentage: 70 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'ShadCn UI', percentage: 85 },
    { name: 'DaisyUI', percentage: 60 },
    { name: 'Sanity',  percentage: 75 },
    { name: 'Neon Database', percentage: 70 },
    { name: 'SQLAlchemy',  percentage: 65 },
    { name: 'SQLModel', percentage: 70 },
    { name: 'Python',  percentage: 70 },
    { name: 'Pydantic',  percentage: 40 },
    { name: 'Pandas',  percentage: 40 },
    { name: 'FastApi',  percentage: 60 },
    { name: 'Streamlit',  percentage: 80 },
   
  ];
  const skills =[
    { name: 'Process Improvement',  percentage: 70 },
    { name: 'Data Analysis',  percentage: 65 },
    { name: 'Technical Proficiency',  percentage: 78 },
    { name: 'Project Management',  percentage: 60 },
    { name: 'Quality Management',  percentage: 65 },
    { name: 'Leadership and Team Management ',  percentage: 70 },
    { name: 'Adaptability and Flexibility',  percentage: 75 },
    { name: 'Communication Skill',  percentage:85  },
    { name: 'Problem-solving',  percentage: 80 },
    { name: 'Costumer Focus',  percentage:85  },
    { name: 'Decision-making',  percentage: 80 },
  ]

  return (
 

<div className='p-4'>
<h1 className='text-3xl uppercase font-medium text-center'>Technical Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20 mb-10">
        {Tskills.map((Tskill) => (
          <div key={Tskill.name} className="flex flex-col items-center hover:-translate-y-4 transition duration-700 ease-in-out  hover:scale-110">
            {/* <img src={skill.logo} alt={skill.name} className="w-20 h-20 object-contain mb-2" /> */}
            <h3 className="text-lg font-semibold">{Tskill.name}</h3>
            <div className="w-48 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${Tskill.percentage}%` }}
              ></div>
            </div>
            <p className="mt-2">{`${Tskill.percentage}%`}</p>
          </div>
        ))}
      </div>

      <h1 className='text-3xl uppercase font-medium text-center'>Management Skills</h1>

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
