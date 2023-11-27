"use client"
import Typewriter from 'typewriter-effect';
import Contact from './contact/page';
import React from "react"
import Image from 'next/image';
import Hero from './hero';
import Skills from './skills';
import Projects from './projects';
export default function Home() {
  return (
    <div>

{/* <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="  rounded-full bg-slate-500">
      <Image
        className=""
        alt="hero"
        src="/pic1.jpg"
        width={200}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am 
        <br className="hidden lg:inline-block" />
       

        <Typewriter
  options={{
    strings: ["Bushra Khan",
    "Web Developer",
    "UI/UX Designer"                 
  ],
    autoStart: true,
    loop: true,
  }}
/>

      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button>
      </div>
    </div>
  </div>
</section> */}
<Hero/>
<Skills/>
<Projects/>


<Contact/>
    </div>
  

  )
}