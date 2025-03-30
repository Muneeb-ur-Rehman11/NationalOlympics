import React, { useEffect, useRef } from "react";
import poalogo from "./poalogo.png";
import noc_logo from "./noc_logo.png";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

const TopLogoBar = ({ preloaderDone }) => {
  const leftLogoRef = useRef(null);
  const rightLogoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (preloaderDone) {
      gsap.from(leftLogoRef.current, {
        duration: 1,
        x: "-200vw",
        opacity: 0,
        ease: "power2.out",
      });

      gsap.from(rightLogoRef.current, {
        duration: 1,
        x: "200vw",
        opacity: 0,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(textRef.current.children, {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power2.out",
        stagger: 0.05,
        delay: 0.8,
      });
    }
  }, [preloaderDone]); // 🔥 Ensures animation triggers **after** preloader finishes

  // Function to wrap each letter in a span
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      <div className="top-bar w-full py-5 px-10 flex justify-between items-center max-md:px-5">
        <div ref={leftLogoRef} className="left-logo w-36 max-xl:w-26 max-md:w-20">
          <img className="w-full h-full" src={poalogo} alt="POA Logo" />
        </div>

        <div ref={rightLogoRef} className="right-logo w-24 max-xl:w-16 max-md:w-16">
          <img className="w-full h-full" src={noc_logo} alt="NOC Logo" />
        </div>
      </div>

      <div className="mid flex justify-center pb-4">
        <Link
          ref={textRef}
          className="text-5xl font-semibold hover:text-sky-600 hover:border-b-2
          max-xl:text-4xl max-md:text-2xl max-sm:text-lg"
          to="/"
        >
          {splitText("34th National Games 2023 Quetta Pakistan")}
        </Link>
      </div>
    </>
  );
};

export default TopLogoBar;
