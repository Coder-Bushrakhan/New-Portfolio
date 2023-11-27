import Image from "next/image"
import Link from "next/link";
import Typewriter from 'typewriter-effect';

export default function Hero()

{
    return(
 <div>


<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row ">
  <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-full ">
    <Image src="/pic1.png" alt="hero" className="max-w-sm" height={500} width={500} />
    </div>
    <div className="ml-10">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
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

      </h1>      <p className="py-6">I am passionate about building high-quality web applications that meet the needs of my clients. I am also a strong believer in the power of Next.js to help developers build better web applications.</p>
      
    </div>
  </div>
</div>



</div> 



    )
}