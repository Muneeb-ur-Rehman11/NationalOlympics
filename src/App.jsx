import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NG2023 from "./pages/NG2023";
import SportsAndEvents from "./pages/SportsAndEvents";
import TopLogoBar from "./Components/TopLogoBar/TopLogoBar";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import MouseFollower from "./Components/MouseFollower/MouseFollower";
import Latestbar from "./Components/Latest-bar/Latestbar";
import NGPreLoader from "./Components/PreLoader/NGPreLoader";
import Poa from "./pages/Poa";
import NationalGames from "./pages/NationalGames";
import Host from "./pages/Host";

const App = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPreloaderDone(true);
    }, 3000); // Adjust timing as needed
  }, []);

  return (
    <>
      <MouseFollower />

      {!preloaderDone && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <NGPreLoader onComplete={() => setPreloaderDone(true)} />
        </div>
      )}

      <div
        className={`transition-opacity duration-700 ${
          preloaderDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <TopLogoBar preloaderDone={preloaderDone} />
        <Navbar preloaderDone={preloaderDone} />
        <Latestbar />

        <Routes>
          <Route path="/" element={<NG2023 preloaderDone={preloaderDone} />} />
          <Route path="/sportsandevents" element={<SportsAndEvents preloaderDone={preloaderDone} />} />
          <Route path="/poa" element={<Poa/>}  />
          <Route path="/national-games" element={<NationalGames/>}  />
          <Route path="/host" element={<Host/>}  />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
