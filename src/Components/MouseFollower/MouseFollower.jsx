import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed w-3 h-3 bg-black rounded-full pointer-events-none z-[100] mix-blend-normal"
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  );
};

export default MouseFollower;
