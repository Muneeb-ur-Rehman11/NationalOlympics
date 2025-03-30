import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import PakFlag from "./pakflag.png";

const NGPreLoader = ({ onComplete }) => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const preloaderRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setPreloaderDone(!preloaderDone);
        if (onComplete) onComplete(); // Notify parent component
      },
    });

    tl.from(".left span", {
      duration: 0.1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      stagger: 0.08,
    })
      .from(
        ".right span",
        {
          duration: 0.2,
          opacity: 0,
          y: 50,
          ease: "power2.out",
          stagger: 0.01,
        },
        "-=0.3"
      )
      .from(".pak-flag", {
        duration: .5,
        scale: 0,
        opacity: 0,
      })
      .to(preloaderRef.current, {
        delay: 0.1,
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none", // Ensure it's not interactable after hiding
      });
  }, []);

  // Function to wrap each letter in a span
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div
      ref={preloaderRef}
      className={`ng-preloader w-screen h-screen bg-black overflow-hidden text-white flex flex-col justify-center items-center transition-all ${
        preloaderDone ? "hidden" : "opacity-100"
      }`}
    >
      {/* Left Text Animation */}
      <h1 className="left text-5xl font-semibold text-center max-sm:text-3xl">
        {splitText("NATIONAL GAMES")}
      </h1>

      {/* Pakistan Flag */}
      <div className="pak-flag w-60">
        <img className="w-full h-full" src={PakFlag} alt="Pak Flag" />
      </div>

      {/* Right Text Animation */}
      <h1 className="right text-5xl font-semibold text-center max-sm:text-3xl">
        {splitText("PAKISTAN OLYMPICS")}
      </h1>
    </div>
  );
};

export default NGPreLoader;
