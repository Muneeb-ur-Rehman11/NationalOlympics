import React, { useEffect } from "react";
import MainImgCaurosel from "../Components/Caurosel/MainImgCaurosel";
import MedalTable from "../Components/Medal-Table/MedalTable";
import SportsEvents from "../Components/SportsEvents/SportsEvents";

const NG2023 = ({ preloaderDone }) => {
  useEffect(() => {
    if (preloaderDone) {
      // Run animations (GSAP, Framer Motion, or CSS-based)
      console.log("Animations triggered!");
    }
  }, [preloaderDone]);

  return (
    <main className="relative">
      <div
        className={`main-page transition-opacity duration-700 ${
          preloaderDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <MainImgCaurosel />
        <MedalTable />
        <SportsEvents />
      </div>
    </main>
  );
};

export default NG2023;
