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


<Hero/>
<Skills/>
<Projects/>


<Contact/>
    </div>
  

  )
}
