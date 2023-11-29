import Link from "next/link";

export default function Navbar()
{

    return (

<div className="navbar bg-base-100">
  <div className="navbar-start">
  
    <a className="btn btn-ghost text-xl hover:-translate-y-1 transition duration-700 ease-in-out  hover:scale-110">Portfolio</a>
  </div>
 
  <div className="navbar-end">
  <button className="bg-blue-600  rounded-lg hover:-translate-y-1 transition duration-700 ease-in-out  hover:scale-110  " >
<a href="/cv/resume.pdf" download={"resume.pdf"}><h1 className="text-center p-2 text-white">Download Resume</h1></a>
  </button>
   
  </div>
</div>

    )
}