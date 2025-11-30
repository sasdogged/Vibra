import { useState } from "react";
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Buddy from './assets/Frame 1000005073.png'
import Avatar1 from './assets/Frame 1000005072.png'
import Avatar2 from './assets/Frame 1000005070.png'
import Avatar3 from './assets/Frame 1000005069.png'
import Avatar4 from './assets/Frame 1000005071.png'

function Header() {

  const [isVisible, setIsVisible] = useState(false)
  const handleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="bg-[#000814] text-white min-h-[60vh]">

      {/* header */}
      <div className="flex items-center justify-between px-[1em] sm:px-[3em] py-[2em] m-0 relative">
        <div className="logo">
          <h2 className="font-[Podkova] font-bold text-white text-4xl sm:text-5xl">Vibra</h2>
        </div>
        <nav>
          <ul className="text-white flex items-center justify-center gap-[1.2em] md:gap-[3.3em] font-[Ubuntu]" data-visible={isVisible}>
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className="cta-btn">
          <button className="text-white font-[Ubuntu] bg-[#471359] px-[1.2em] py-[.6em] rounded-sm cursor-pointer cta">
            Get started
          </button>
        </div>
        <button className="mobile-toggle" aria-expanded={isVisible} aria-controls="mobile-nav-toggle" onClick={handleVisibility}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Hero Section*/}
      <div className="my-[2em] sm:px-[3em] px-[1em] py-[2em] relative">
        {/* Left side avatars */}
        <img 
          src={Avatar1} 
          alt="Avatar" 
          className="absolute top-[6%] left-[5%] w-20 h-20 sm:w-24 sm:h-24 object-cover hidden sm:block"
        />
        <img 
          src={Avatar2} 
          alt="Avatar" 
          className="absolute top-[66%] left-[5%] w-16 h-16 sm:w-20 sm:h-20 hidden md:block"
        />
        {/* Right side avatars */}
        <img 
          src={Avatar3} 
          alt="Avatar" 
          className="absolute top-[15%] right-[5%] w-20 h-20 sm:w-24 sm:h-24 object-cover hidden md:block"
        />
        <img 
          src={Avatar4} 
          alt="Avatar"
          className="absolute top-[55%] right-[5%] w-16 h-16 sm:w-20 sm:h-20 object-cover hidden md:block" 
        />

            {/* Text */}
            <div className="text-center m-[2em] ">
              <img src={Buddy} alt="" className="max-w-[700px] mx-auto pb-[1.3em]"/>
              <h1 className="text-[2.5em] leading-[1.3] max-w-[700px] mx-auto">Be seen, be heard. Discover a world full of fun and creativity.</h1>
              <p className="font-medium text-[1.3rem] py-[1em]">Join 2.7M+ Creators</p>
              <p className="max-w-[600px] mx-auto text-[#a2a9ae]">Every video is an opportunity to connect, inspire and entertain. Vibra makes it easy to find your tribe and build meaningful connections through creative expression.</p>
              <div 
                className="text-[#710c92] bg-white w-[63%] max-w-[200px] mx-auto flex justify-center items-center gap-4.5 rounded-[100vw] py-[.4em] font-semibold my-[3em] cursor-pointer"
              >
                <p>Join Vibra now</p>
                <button className="text-white bg-[#8b25ad] rounded-full p-[.2em] arrow-right">
                      <ArrowRight strokeWidth={1.25} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-[8em]">
                <button className="mt-[3em]">
                  <ArrowLeft color="#aea3a3" strokeWidth={1.25} />
                </button>
                <button><ArrowRight /></button>
              </div>
              <button className="w-32 flex mx-auto gap-3 my-[3em] bg-transparent border-0 outline-0">
                <span className="bg-white w-[70%] h-0.5 rounded-lg"></span>
                <span className="bg-white w-[30%] h-0.5 rounded-lg"></span>
                <span className="bg-white w-[30%] h-0.5 rounded-lg"></span>
              </button>
            </div>
      </div>
    </div>
  );
}

export default Header;
