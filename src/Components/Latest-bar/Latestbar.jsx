import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Latestbar = () => {
  
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(".text", {
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  
  
  return (
    <>
    <div className="latest-bar w-full flex justify-between mt-3 items-center bg-yellow-400
    max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-5
    ">
        <div className="latest flex justify-center items-center text-2xl  px-10 py-5 bg-red-500 text-white">
            <h3 className=''>Latest</h3>
        </div>
        <div className="text">
            <h2  ref={textRef} className='text-xl font-semibold text-black text-center'>National Games Torch for the 34th National Games 2023</h2>
        </div>
        <div className="Medal-Count">
            <button className="medal-button flex justify-center items-center text-2xl px-10 py-5 bg-sky-600 text-white 
            hover:bg-red-500 hover:text-white
            ">MEDAL COUNT</button>
        </div>
    </div>
    </>
  )
}

export default Latestbar