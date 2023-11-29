"use client"
import Image from "next/image"
import Link from "next/link"
export default function Projects()
{
    return(
      <div className="container p-4">
        <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 uppercase text-gray-900">
               My projects
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
             These are the projects which i made in short period of time.
            </p>
          </div>
          <div className="lg:flex justify-between  md:flex-row sm:flex-row">
            <div className="xl:w-1/4 md:w-1/2 p-4  hover:-translate-y-4 transition duration-700 ease-in-out  hover:scale-110">
              <div className="bg-gray-100 p-6 rounded-lg shadow-xl">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pro2.png"
                  alt="content"
                  height={400}
                  width={400}

/>

<h2 className="text-xl text-gray-900 font-medium title-font mb-4">
                 Ecommerce Project
                </h2>
                <Link href={"https://ecommerce-website-ten-omega.vercel.app/"}>
                <h3 className="tracking-widest text-indigo-500 font-medium title-font text-sm">
                 
                 Click here
              
                </h3>
                <p className="leading-relaxed text-base capitalize">
                 This is a UI of dynamic Ecommerce website it is based on nextjs and tailwind css.
                </p>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:-translate-y-4 transition duration-700 ease-in-out  hover:scale-110">
              <div className="bg-gray-100 p-6 rounded-lg shadow-xl">
              <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pro1.png"
                  alt="content"
                  height={400}
                  width={400}

/>
               
                <h2 className="text-xl text-gray-900 font-medium title-font mb-4">
                 Landing Page
                </h2>
                <Link href={"https://landing-six-self.vercel.app/"}>
                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                  
                 Click here
                 
                </h3>
                <p className="leading-relaxed text-base capitalize">
            This is a 
            landing page project based on nextjs and tailwind css

                </p>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:-translate-y-4 transition duration-700 ease-in-out  hover:scale-110">
              <div className="bg-gray-100 p-6 rounded-lg shadow-xl ">
              <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pro3.png"
                  alt="content"
                  height={400}
                  width={400}

/>
<h2 className="text-xl text-gray-900 font-medium title-font mb-4">
                Calculator Project
                </h2>
                <Link href={"https://calculator-app-1iqq.vercel.app/"}>

                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                 Click here
                
                </h3>
                <p className="leading-relaxed text-base capitalize">
                This is a simple calculator project based on nextjs and tailwind css
                </p>
                </Link></div>
            </div>
         
          </div>
        </div>
      </section>
 </div>     
    )
}