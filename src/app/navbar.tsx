import Link from "next/link";

export default function Navbar()
{

    return (

<div className="navbar bg-base-100">
  <div className="navbar-start">
  
    <a className="btn btn-ghost text-xl">Portfolio</a>
  </div>
 
  <div className="navbar-end">
    <a className="btn">      <a href="/cv/resume.pdf"download={"resume.pdf"}>Download Resume</a>
</a>
  </div>
</div>

    )
}